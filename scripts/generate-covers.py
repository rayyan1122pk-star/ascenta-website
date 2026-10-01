import os

images = {
    'aeo-geo-guide.svg': ('SEO & AEO', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="160" fill="#221918" stroke="#E63946" stroke-width="2" stroke-dasharray="8 8" />
      <circle cx="0" cy="0" r="90" fill="#7A2229" opacity="0.4" />
      <polygon points="0,-110 32,-30 110,0 32,30 0,110 -32,30 -110,0 -32,-30" fill="#D4A24E" />
      <circle cx="0" cy="0" r="18" fill="#EDE3DD" />
      <circle cx="-160" cy="0" r="12" fill="#E63946" />
      <circle cx="160" cy="0" r="12" fill="#D4A24E" />
      <circle cx="0" cy="-160" r="12" fill="#EDE3DD" opacity="0.8" />
      <circle cx="0" cy="160" r="12" fill="#E63946" />
    </g>'''),
    'ai-lead-qualification.svg': ('LEAD AUTOMATION', '''
    <g transform="translate(600,380)">
      <polygon points="-180,-140 180,-140 100,-20 -100,-20" fill="#221918" stroke="rgba(237,227,221,0.2)" stroke-width="2" />
      <polygon points="-90,-10 90,-10 40,80 -40,80" fill="#7A2229" opacity="0.6" stroke="#E63946" stroke-width="2" />
      <rect x="-30" y="95" width="60" height="80" rx="10" fill="#D4A24E" />
      <circle cx="0" cy="135" r="12" fill="#17100F" />
    </g>'''),
    'b2b-funnel-guide.svg': ('B2B STRATEGY', '''
    <g transform="translate(600,380)">
      <rect x="-180" y="-120" width="360" height="50" rx="8" fill="#221918" stroke="rgba(237,227,221,0.18)" stroke-width="2" />
      <rect x="-130" y="-50" width="260" height="50" rx="8" fill="#7A2229" stroke="#E63946" stroke-width="2" />
      <rect x="-80" y="20" width="160" height="50" rx="8" fill="#E63946" />
      <rect x="-40" y="90" width="80" height="50" rx="8" fill="#D4A24E" />
    </g>'''),
    'cleandata-ai-architecture.svg': ('DATA ARCHITECTURE', '''
    <g transform="translate(600,380)">
      <ellipse cx="0" cy="-90" rx="140" ry="36" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <ellipse cx="0" cy="-10" rx="140" ry="36" fill="#221918" stroke="#E63946" stroke-width="2" />
      <ellipse cx="0" cy="70" rx="140" ry="36" fill="#221918" stroke="rgba(237,227,221,0.3)" stroke-width="2" />
      <path d="M-140,-90 L-140,70 A140,36 0 0,0 140,70 L140,-90" fill="none" stroke="rgba(237,227,221,0.15)" stroke-width="2" />
      <circle cx="0" cy="-10" r="16" fill="#D4A24E" />
    </g>'''),
    'core-web-vitals-fix.svg': ('PERFORMANCE', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(237,227,221,0.14)" stroke-width="16" />
      <path d="M-98,98 A140,140 0 1,1 138,-20" fill="none" stroke="#E63946" stroke-width="16" stroke-linecap="round" />
      <line x1="0" y1="0" x2="70" y2="-70" stroke="#D4A24E" stroke-width="6" stroke-linecap="round" />
      <circle cx="0" cy="0" r="14" fill="#EDE3DD" />
      <rect x="-60" y="60" width="120" height="36" rx="8" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <text x="0" y="84" text-anchor="middle" font-family="monospace" font-size="18" font-weight="bold" fill="#D4A24E">100/100</text>
    </g>'''),
    'custom-crm-vs-saas.svg': ('CUSTOM CRM', '''
    <g transform="translate(600,380)">
      <rect x="-190" y="-110" width="170" height="220" rx="16" fill="#221918" stroke="rgba(237,227,221,0.18)" stroke-width="2" />
      <rect x="20" y="-110" width="170" height="220" rx="16" fill="#7A2229" opacity="0.5" stroke="#E63946" stroke-width="2" />
      <line x1="-150" y1="-60" x2="-60" y2="-60" stroke="#EDE3DD" opacity="0.5" stroke-width="4" stroke-linecap="round" />
      <line x1="-150" y1="-20" x2="-80" y2="-20" stroke="#EDE3DD" opacity="0.5" stroke-width="4" stroke-linecap="round" />
      <line x1="60" y1="-60" x2="150" y2="-60" stroke="#D4A24E" stroke-width="4" stroke-linecap="round" />
      <line x1="60" y1="-20" x2="130" y2="-20" stroke="#D4A24E" stroke-width="4" stroke-linecap="round" />
      <circle cx="105" cy="50" r="24" fill="#E63946" />
    </g>'''),
    'customer-support-automation.svg': ('SUPPORT AI', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="130" fill="#221918" stroke="rgba(237,227,221,0.15)" stroke-width="2" />
      <path d="M-60,-20 A60,60 0 0,1 60,-20" fill="none" stroke="#D4A24E" stroke-width="6" stroke-linecap="round" />
      <rect x="-80" y="-90" width="60" height="44" rx="12" fill="#E63946" />
      <rect x="20" y="-90" width="60" height="44" rx="12" fill="#D4A24E" />
      <circle cx="0" cy="45" r="16" fill="#EDE3DD" />
    </g>'''),
    'dashboards-vs-spreadsheets.svg': ('ANALYTICS', '''
    <g transform="translate(600,380)">
      <rect x="-190" y="-120" width="380" height="240" rx="16" fill="#221918" stroke="rgba(237,227,221,0.2)" stroke-width="2" />
      <rect x="-160" y="-90" width="90" height="70" rx="8" fill="#7A2229" opacity="0.7" />
      <rect x="-50" y="-90" width="90" height="70" rx="8" fill="#E63946" />
      <rect x="60" y="-90" width="100" height="70" rx="8" fill="#D4A24E" />
      <polyline points="-160,80 -80,40 0,60 80,-10 160,20" fill="none" stroke="#D4A24E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </g>'''),
    'instagram-ai-automation.svg': ('INSTAGRAM AI', '''
    <g transform="translate(600,380)">
      <rect x="-120" y="-120" width="240" height="240" rx="44" fill="#221918" stroke="#E63946" stroke-width="3" />
      <circle cx="0" cy="0" r="60" fill="none" stroke="#D4A24E" stroke-width="4" />
      <circle cx="65" cy="-65" r="14" fill="#E63946" />
      <g transform="translate(110,-110)">
        <polygon points="0,-25 8,-8 25,0 8,8 0,25 -8,8 -25,0 -8,-8" fill="#D4A24E" />
      </g>
    </g>'''),
    'local-seo-lahore-tech-agencies.svg': ('LOCAL SEO', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(237,227,221,0.15)" stroke-width="2" />
      <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(237,227,221,0.25)" stroke-width="2" />
      <path d="M0,-110 C-45,-110 -60,-70 0,20 C60,-70 45,-110 0,-110 Z" fill="#E63946" />
      <circle cx="0" cy="-65" r="18" fill="#17100F" />
      <circle cx="0" cy="-65" r="8" fill="#D4A24E" />
    </g>'''),
    'modern-b2b-tech-stack.svg': ('TECH STACK', '''
    <g transform="translate(600,380)">
      <polygon points="0,-120 120,-50 120,70 0,140 -120,70 -120,-50" fill="#221918" stroke="#E63946" stroke-width="2" />
      <polygon points="0,-70 70,-30 70,40 0,80 -70,40 -70,-30" fill="#7A2229" opacity="0.5" stroke="#D4A24E" stroke-width="2" />
      <circle cx="0" cy="5" r="20" fill="#D4A24E" />
    </g>'''),
    'multi-agent-architecture.svg': ('MULTI-AGENT', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="-70" r="45" fill="#E63946" />
      <circle cx="-110" cy="80" r="40" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <circle cx="110" cy="80" r="40" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <line x1="0" y1="-25" x2="-80" y2="50" stroke="#EDE3DD" opacity="0.4" stroke-width="3" stroke-dasharray="6 6" />
      <line x1="0" y1="-25" x2="80" y2="50" stroke="#EDE3DD" opacity="0.4" stroke-width="3" stroke-dasharray="6 6" />
      <line x1="-70" y1="80" x2="70" y2="80" stroke="#EDE3DD" opacity="0.4" stroke-width="3" stroke-dasharray="6 6" />
    </g>'''),
    'n8n-vs-zapier.svg': ('AUTOMATION', '''
    <g transform="translate(600,380)">
      <rect x="-160" y="-80" width="80" height="80" rx="16" fill="#E63946" />
      <rect x="80" y="-80" width="80" height="80" rx="16" fill="#D4A24E" />
      <circle cx="0" cy="60" r="45" fill="#221918" stroke="rgba(237,227,221,0.3)" stroke-width="2" />
      <path d="M-80,-40 C-30,-40 -30,60 0,60 C30,60 30,-40 80,-40" fill="none" stroke="#EDE3DD" opacity="0.5" stroke-width="3" />
    </g>'''),
    'nextjs-vs-remix-vite.svg': ('FRONTEND ENG', '''
    <g transform="translate(600,380)">
      <circle cx="-110" cy="0" r="55" fill="#221918" stroke="#E63946" stroke-width="3" />
      <circle cx="0" cy="0" r="55" fill="#7A2229" stroke="#D4A24E" stroke-width="3" />
      <circle cx="110" cy="0" r="55" fill="#221918" stroke="rgba(237,227,221,0.4)" stroke-width="3" />
      <text x="-110" y="8" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#EDE3DD">NEXT</text>
      <text x="0" y="8" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#D4A24E">REMIX</text>
      <text x="110" y="8" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#EDE3DD">VITE</text>
    </g>'''),
    'perplexity-chatgpt-seo.svg': ('AI DISCOVERY', '''
    <g transform="translate(600,380)">
      <rect x="-180" y="-110" width="360" height="220" rx="20" fill="#221918" stroke="rgba(237,227,221,0.18)" stroke-width="2" />
      <line x1="-140" y1="-50" x2="80" y2="-50" stroke="#EDE3DD" opacity="0.6" stroke-width="5" stroke-linecap="round" />
      <line x1="-140" y1="-10" x2="140" y2="-10" stroke="#EDE3DD" opacity="0.4" stroke-width="4" stroke-linecap="round" />
      <line x1="-140" y1="30" x2="20" y2="30" stroke="#EDE3DD" opacity="0.4" stroke-width="4" stroke-linecap="round" />
      <circle cx="120" cy="-50" r="14" fill="#E63946" />
      <polygon points="120,40 128,58 145,65 128,72 120,90 112,72 95,65 112,58" fill="#D4A24E" />
    </g>'''),
    'rag-architecture.svg': ('RAG SYSTEMS', '''
    <g transform="translate(600,380)">
      <rect x="-170" y="-90" width="80" height="100" rx="8" fill="#221918" stroke="#EDE3DD" opacity="0.7" stroke-width="2" />
      <circle cx="0" cy="-40" r="42" fill="#7A2229" stroke="#E63946" stroke-width="2" />
      <rect x="90" y="-90" width="90" height="100" rx="16" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <line x1="-90" y1="-40" x2="-42" y2="-40" stroke="#EDE3DD" stroke-width="3" stroke-linecap="round" />
      <line x1="42" y1="-40" x2="90" y2="-40" stroke="#D4A24E" stroke-width="3" stroke-linecap="round" />
      <text x="0" y="60" text-anchor="middle" font-family="monospace" font-size="14" fill="#D4A24E">VECTOR PIPELINE</text>
    </g>'''),
    'sqlite-vs-postgres.svg': ('DATABASE ARCH', '''
    <g transform="translate(600,380)">
      <g transform="translate(-90,0)">
        <ellipse cx="0" cy="-50" rx="55" ry="18" fill="#221918" stroke="#E63946" stroke-width="2" />
        <ellipse cx="0" cy="10" rx="55" ry="18" fill="#221918" stroke="#E63946" stroke-width="2" />
        <path d="M-55,-50 L-55,10 A55,18 0 0,0 55,10 L55,-50" fill="none" stroke="#E63946" stroke-width="2" />
        <text x="0" y="-10" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#EDE3DD">SQLITE</text>
      </g>
      <g transform="translate(90,0)">
        <ellipse cx="0" cy="-70" rx="65" ry="22" fill="#221918" stroke="#D4A24E" stroke-width="2" />
        <ellipse cx="0" cy="-10" rx="65" ry="22" fill="#D4A24E" stroke-width="2" />
        <ellipse cx="0" cy="50" rx="65" ry="22" fill="#221918" stroke="#D4A24E" stroke-width="2" />
        <path d="M-65,-70 L-65,50 A65,22 0 0,0 65,50 L65,-70" fill="none" stroke="#D4A24E" stroke-width="2" />
        <text x="0" y="-20" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#D4A24E">POSTGRES</text>
      </g>
    </g>'''),
    'voice-ai-latency.svg': ('VOICE AI', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="140" fill="#221918" stroke="rgba(237,227,221,0.15)" stroke-width="2" />
      <line x1="-90" y1="0" x2="-90" y2="0" stroke="#E63946" stroke-width="8" stroke-linecap="round" />
      <line x1="-60" y1="-30" x2="-60" y2="30" stroke="#E63946" stroke-width="8" stroke-linecap="round" />
      <line x1="-30" y1="-70" x2="-30" y2="70" stroke="#D4A24E" stroke-width="8" stroke-linecap="round" />
      <line x1="0" y1="-95" x2="0" y2="95" stroke="#EDE3DD" stroke-width="8" stroke-linecap="round" />
      <line x1="30" y1="-60" x2="30" y2="60" stroke="#D4A24E" stroke-width="8" stroke-linecap="round" />
      <line x1="60" y1="-25" x2="60" y2="25" stroke="#E63946" stroke-width="8" stroke-linecap="round" />
      <line x1="90" y1="0" x2="90" y2="0" stroke="#E63946" stroke-width="8" stroke-linecap="round" />
      <text x="0" y="120" text-anchor="middle" font-family="monospace" font-size="16" font-weight="bold" fill="#D4A24E">&lt; 800MS TTFT</text>
    </g>'''),
    'voice-ai-vs-call-center.svg': ('VOICE SYSTEMS', '''
    <g transform="translate(600,380)">
      <path d="M-120,-30 C-120,-80 -50,-100 0,-100 C50,-100 120,-80 120,-30 L120,20 C120,50 90,70 50,70 L-20,70 L-60,100 L-60,70 L-100,70 C-115,70 -120,60 -120,45 Z" fill="#221918" stroke="#E63946" stroke-width="2" />
      <circle cx="-40" cy="-10" r="12" fill="#D4A24E" />
      <circle cx="0" cy="-10" r="12" fill="#EDE3DD" />
      <circle cx="40" cy="-10" r="12" fill="#E63946" />
    </g>'''),
    'whatsapp-ai-agent.svg': ('WHATSAPP AI', '''
    <g transform="translate(600,380)">
      <circle cx="0" cy="0" r="120" fill="#221918" stroke="#25D366" stroke-width="3" />
      <path d="M-40,-50 C-10,-70 50,-50 60,-10 C70,30 30,70 -10,70 L-50,85 L-40,55 C-70,35 -65,-20 -40,-50 Z" fill="#25D366" opacity="0.2" stroke="#25D366" stroke-width="2" />
      <polygon points="40,-40 46,-28 58,-22 46,-16 40,-4 34,-16 22,-22 34,-28" fill="#D4A24E" />
      <circle cx="0" cy="5" r="18" fill="#EDE3DD" />
    </g>'''),
    'whatsapp-real-estate.svg': ('REAL ESTATE AI', '''
    <g transform="translate(600,380)">
      <polygon points="0,-120 130,-20 90,-20 90,90 -90,90 -90,-20 -130,-20" fill="#221918" stroke="#D4A24E" stroke-width="2" />
      <rect x="-30" y="20" width="60" height="70" rx="6" fill="#E63946" />
      <circle cx="0" cy="-20" r="16" fill="#25D366" />
    </g>''')
}

out_dir = r"public/blog"
for filename, (badge, body) in images.items():
    prefix = filename.replace('.svg', '').replace('-', '_')[:8]
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <radialGradient id="glow_{prefix}" cx="78%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#E63946" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#E63946" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid_{prefix}" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(237,227,221,0.12)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="#17100F" />
  <rect width="1200" height="800" fill="url(#grid_{prefix})" />
  <rect width="1200" height="800" fill="url(#glow_{prefix})" />
  <rect x="0.5" y="0.5" width="1199" height="799" fill="none" stroke="rgba(237,227,221,0.14)" />
  {body}
  <text x="64" y="732" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="#EDE3DD" opacity="0.6">{badge}</text>
</svg>"""
    filepath = os.path.join(out_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)
print(f"Successfully generated {len(images)} vector cover assets in {out_dir}")
