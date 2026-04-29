interface MarqueeStripProps {
  items: string[]
  bg: string
  textColor: string
  reverse?: boolean
}

export default function MarqueeStrip({ items, bg, textColor, reverse }: MarqueeStripProps) {
  const doubled = [...items, '•', ...items, '•', ...items, '•', ...items, '•']

  return (
    <div
      style={{ background: bg, padding: '0.8rem 0', overflow: 'hidden' }}
    >
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontStyle: 'italic',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: item === '•' ? `${textColor}55` : textColor,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
