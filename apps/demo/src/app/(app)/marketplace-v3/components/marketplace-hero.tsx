"use client"

export function MarketplaceHero() {
  return (
    <section
      style={{
        height: 372,
        marginBottom: 15,
        width: '100%',
        borderBottom: '1px solid rgb(237, 241, 247)',
        backgroundImage: `url("https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All%20collections%20page%20banner"), linear-gradient(rgba(255, 255, 255, 0.48), rgba(221, 227, 238, 0.48))`,
        backgroundPosition: '100% 50%, 100% 50%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'auto, auto',
        transition: 'height 0.5s',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        position: 'relative' as const,
      }}
    >
      <div style={{ margin: '80px 0 0 64px', width: 600, lineHeight: '24px' }}>
        <h2
          style={{
            color: 'rgb(33, 33, 33)',
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: '-0.00646px',
            lineHeight: '42.5px',
          }}
        >
          Contentstack Marketplace:<br />
          Where composable happens
        </h2>
        <p
          style={{
            color: 'rgb(71, 81, 97)',
            fontSize: 16,
            lineHeight: '24px',
            marginTop: 12,
            width: 600,
          }}
        >
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project&apos;s journey from concept to launch.
        </p>
        <p
          style={{
            color: 'rgb(110, 107, 134)',
            fontSize: 12,
            lineHeight: '24px',
            marginTop: 12,
            display: 'flex',
          }}
        >
          New to Marketplace? Use
          <a
            href="https://www.contentstack.com/docs/developers/marketplace-platform-guides/"
            target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', color: 'rgb(108, 92, 231)', textDecoration: 'none', padding: '0 4px', fontSize: 12, lineHeight: '24px', whiteSpace: 'nowrap' as const }}
          >
            these
          </a>
          guides to get started.
        </p>
      </div>
    </section>
  )
}
