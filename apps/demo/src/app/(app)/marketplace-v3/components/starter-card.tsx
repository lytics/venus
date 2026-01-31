const styles = `
.mp-starter-card {
  background-color: #fff;
  border: 1px solid rgb(221, 227, 238);
  border-radius: 10px;
  width: 320px;
  height: 210px;
  overflow: hidden;
  margin: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: box-shadow 0.1s ease-in-out;
}
.mp-starter-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-starter-card .mp-starter-body {
  position: relative;
  top: 0;
  background-color: rgb(255, 255, 255);
  transition: top 0.15s ease-in-out;
}
.mp-starter-card:hover .mp-starter-body {
  top: -100px;
  background-color: rgb(255, 255, 255);
}
.mp-starter-card .mp-starter-link-icon {
  display: none;
}
.mp-starter-card:hover .mp-starter-link-icon {
  display: block !important;
}
`

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M18 4l-4.5 4.5 1.414 1.414L18 6.828a4 4 0 015.657 5.657l-3.086 3.086 1.415 1.414L25 13.9a6 6 0 00-7-9.9z" fill="#647696"/>
      <path d="M14 28l4.5-4.5-1.414-1.414L14 25.172a4 4 0 01-5.657-5.657l3.086-3.086L10 15.015 7 18.1a6 6 0 007 9.9z" fill="#647696"/>
      <path d="M20.586 10L10 20.586l1.414 1.414L22 11.414 20.586 10z" fill="#647696"/>
    </svg>
  )
}

function ImportIcon() {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
      <g fill="#fff">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222Z"/>
        <path d="M4.375 16.25a.625.625 0 1 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.375Z"/>
      </g>
    </svg>
  )
}

interface StarterCardProps {
  title: string
  bannerSrc: string
  bannerAlt?: string
  description?: string
}

export function StarterCard({ title, bannerSrc, bannerAlt, description }: StarterCardProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="mp-starter-card">
        <div style={{ width: '100%' }}>
          {/* Banner cover */}
          <div style={{ height: 160, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bannerSrc} alt={bannerAlt ?? title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Body — slides up -100px on hover via CSS top */}
          <div className="mp-starter-body" style={{ padding: '16px 16px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 24, marginBottom: 10 }}>
              <h2 style={{ color: 'rgb(34, 34, 34)', fontSize: 16, fontWeight: 600, lineHeight: '24px', marginRight: 4 }}>
                {title}
              </h2>
              <span className="mp-starter-link-icon"><LinkIcon /></span>
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', overflow: 'hidden' }}>
                {description}
              </p>
            )}

            {/* Import button — only visible when body slides up on hover */}
            <div style={{ marginTop: 12 }}>
              <button
                className="cursor-pointer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgb(108, 92, 231)', border: '1px solid transparent',
                  borderRadius: 4, color: '#fff', fontSize: 14, fontWeight: 600,
                  height: 32, lineHeight: '14px', padding: '5px 16px',
                  fontFamily: 'Inter, sans-serif', textAlign: 'center' as const,
                }}
              >
                <ImportIcon />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
