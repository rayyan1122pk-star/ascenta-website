---
title: "Sub-800ms Voice AI: Engineering Conversational Phone Assistants with WebSockets"
excerpt: "How to eliminate the awkward 2-second pause in AI phone calls using bidirectional audio streams, chunked STT, and neural speech synthesis."
date: "2026-02-18"
category: "Voice AI"
author: "Muhammad Rayyan"
coverImage: "/blog/voice-ai-latency.svg"
---

When speaking to another person over the phone, the average human conversational turn gap is between **200 and 400 milliseconds**. 

If an AI phone agent takes **2.5 seconds** to reply, callers immediately detect a robotic, disconnected barrier. They talk over the bot, become impatient, or hang up. 

Achieving a natural, sub-800ms roundtrip turnaround is not a matter of waiting for faster general LLMs. It requires completely redesigning the telephony data pipeline from HTTP polling to full-duplex WebSocket streaming.

Here is how we architect low-latency voice engines at [Ascenta](/services/voice-calling-agent).

---

## Deconstructing the Latency Budget

To get under 800ms, every millisecond in the audio roundtrip must be audited:

| Pipeline Stage | Naive REST Batch Architecture | Modern WebSocket Streaming Stack |
|---|---|---|
| **Audio Ingestion & Network** | 250ms (buffered audio chunk) | 50ms (raw PCM packets over WebSocket) |
| **Speech-to-Text (STT)** | 700ms (Whisper API batch) | 180ms (Deepgram Nova-2 streaming endpoint) |
| **LLM Time-to-First-Token (TTFT)** | 1,200ms (full completion wait) | 280ms (Claude 3.5 / GPT-4o streaming) |
| **Text-to-Speech (TTS)** | 800ms (full WAV file generation) | 150ms (Cartesia Sonic / ElevenLabs Turbo stream) |
| **Network Return & Playback** | 200ms | 40ms |
| **Total Roundtrip Latency** | **~3,150ms (Unusable)** | **~700ms (Conversational)** |

---

## 1. Full-Duplex WebSockets Over Twilio Media Streams

Never record audio into temporary WAV files and POST them to a transcription endpoint. 

Instead, configure Twilio Media Streams to pipe raw bidirectional audio chunks (mulaw 8000Hz) over a persistent WebSocket connection directly into your backend server:

```xml
<!-- TwiML Response -->
<Response>
  <Connect>
    <Stream url="wss://voice.ascenta.dev/api/stream" />
  </Connect>
</Response>
```

Your server receives audio packets in 20ms slices, allowing continuous streaming into your STT engine without buffering complete sentences.

---

## 2. Ultra-Fast Speech-to-Text with Endpointing

Deepgram Nova-2 provides streaming transcription with endpointing thresholds configured for conversational turn-taking:

```typescript
const liveTranscription = deepgram.listen.live({
  model: "nova-2",
  language: "en",
  smart_format: true,
  encoding: "mulaw",
  sample_rate: 8000,
  endpointing: 300, // Fires utterance end after 300ms of caller silence
  interim_results: true,
});
```

By tuning `endpointing` to between 250ms and 350ms, the system detects when the speaker has finished without cutting off natural mid-sentence pauses.

---

## 3. Streaming First Sentence to TTS Immediately

The biggest latency optimization in the reasoning layer is **sentence boundary chunking**.

Do NOT wait for the LLM to complete its entire 50-word response before passing text to the TTS engine. The moment the LLM streams the first punctuation mark (`.` or `?`), immediately dispatch that first clause to Cartesia or ElevenLabs:

```typescript
// Regex for first sentence completion
const sentenceBoundary = /([.?!])\s+/;

async function streamToAudio(textStream: AsyncIterable<string>) {
  let accumulated = "";
  for await (const token of textStream) {
    accumulated += token;
    if (sentenceBoundary.test(accumulated)) {
      const [sentence, rest] = splitSentence(accumulated);
      synthesizeAndPlayAudio(sentence); // Dispatched at ~280ms
      accumulated = rest;
    }
  }
}
```

While the caller is hearing the first sentence play out, the LLM is finishing the rest of its reasoning in the background.

---

## 4. Handling Barge-In & Interruption Gracefully

If the caller speaks while the agent is playing audio, the system must immediately stop audio playback on the caller's phone and cancel pending synthesis tasks.

When the STT stream emits speech activity while the agent is in playback state:
1. Send a `clear` command to Twilio's audio buffer to truncate playback instantaneously.
2. Abort the ongoing LLM and TTS streaming tasks.
3. Switch state back to listening.

Without clean barge-in handling, callers feel trapped trying to talk over a pre-recorded message.

---

## Summary

Sub-800ms voice AI transforms automated telephone calls from an annoying obstacle into an efficient, pleasant interaction. Businesses use this for:
* After-hours inbound consultation booking
* Real-time lead qualification from paid ad forms
* High-volume appointment confirmations and rescheduling

To see a live demonstration of low-latency voice assistants in production, explore our [Voice Calling Agent service](/services/voice-calling-agent) or [reach out to test our voice architecture](/contact).
