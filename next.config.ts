import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All SVGs served through next/image are locally generated, trusted
    // project assets (never user-uploaded), so the maximum-lockdown CSP
    // Next recommends for arbitrary SVG sources isn't needed here — and
    // `sandbox` combined with `Content-Disposition: attachment` was
    // actually preventing these images from decoding through the
    // optimizer (fetch succeeded, but <img> rendering silently failed).
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
