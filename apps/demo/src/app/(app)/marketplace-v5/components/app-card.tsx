import { ReactNode } from "react"

/**
 * App Card - Generic card component with hover slide animation
 *
 * Used for: Apps (Install button), Starters/Content Models/Recipes (Import button)
 * From capture: Cards with 320x246 dimensions, hover reveals description + button
 */

const styles = `
.mp-v5-card {
  background-color: #fff;
  border: 1px solid rgb(221, 227, 238);
  border-radius: 4px;
  width: 320px;
  height: 246px;
  overflow: hidden;
  margin: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: 0.3s ease-in-out;
}
.mp-v5-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-v5-card .mp-v5-body {
  margin-top: 1px;
  background-color: rgb(255, 255, 255);
}
.mp-v5-card:hover .mp-v5-body {
  margin-top: -100px;
  position: relative;
  transition: 0.15s ease-in-out;
  border-top: 1px solid rgb(221, 227, 238);
  background-color: rgb(255, 255, 255);
}
.mp-v5-card .mp-v5-link-icon {
  display: none;
}
.mp-v5-card:hover .mp-v5-link-icon {
  display: block !important;
}
`

function StackAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 16, height: 16, display: 'block', overflow: 'hidden' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.352 21.622a.75.75 0 011.026-.27L16 28.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.352 15.622a.75.75 0 011.026-.27L16 22.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.622 2.352a.75.75 0 01.756 0l12 7a.75.75 0 010 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 010-1.296l12-7zM5.49 10L16 16.132 26.512 10 16 3.868 5.49 10z" fill="#475161"/>
    </svg>
  )
}

function InstallIcon() {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
      <g fill="#fff">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222Z"/>
        <path d="M4.375 16.25a.625.625 0 1 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.375Z"/>
      </g>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M18 4l-4.5 4.5 1.414 1.414L18 6.828a4 4 0 015.657 5.657l-3.086 3.086 1.415 1.414L25 13.9a6 6 0 00-7-9.9z" fill="#647696"/>
      <path d="M14 28l4.5-4.5-1.414-1.414L14 25.172a4 4 0 01-5.657-5.657l3.086-3.086L10 15.015 7 18.1a6 6 0 007 9.9z" fill="#647696"/>
      <path d="M20.586 10L10 20.586l1.414 1.414L22 11.414 20.586 10z" fill="#647696"/>
    </svg>
  )
}

interface AppCardProps {
  title: string
  icon: ReactNode
  subtitle?: string
  description?: string
  buttonLabel?: "Install" | "Import" | "Request Install"
}

export function AppCard({ title, icon, subtitle, description, buttonLabel = "Install" }: AppCardProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="mp-v5-card">
        <div style={{ width: '100%' }}>
          {/* Cover area */}
          <div style={{ display: 'flex', alignItems: 'center', height: 160 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgb(247, 249, 252)',
                height: 160,
                width: '100%',
                borderBottom: '1px solid rgb(221, 227, 238)',
              }}
            >
              <div style={{ borderRadius: 10, height: 72, width: 72, overflow: 'clip' as const, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
              </div>
            </div>
          </div>

          {/* Card body - slides up -100px on hover */}
          <div className="mp-v5-body" style={{ padding: 16, height: 138 }}>
            <div style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, height: 24 }}>
                <h2 style={{ color: 'rgb(33, 33, 33)', fontSize: 16, fontWeight: 600, lineHeight: '24px', marginRight: 4 }}>
                  {title}
                </h2>
                <span className="mp-v5-link-icon"><LinkIcon /></span>
              </div>
              {subtitle && (
                <div style={{ display: 'flex', alignItems: 'center', height: 18 }}>
                  <StackAppIcon />
                  <p style={{ color: 'rgb(110, 107, 134)', fontSize: 12, lineHeight: '18px', marginLeft: 4 }}>
                    {subtitle}
                  </p>
                </div>
              )}
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', height: 44, overflow: 'hidden' }}>
                {description}
              </p>
            )}
          </div>

          {/* Footer */}
          <div style={{ padding: '0 16px 16px', height: 48 }}>
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
              <InstallIcon />
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * Starter/Content Model Card variant with banner image
 */

const starterStyles = `
.mp-v5-starter-card {
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
.mp-v5-starter-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-v5-starter-card .mp-v5-starter-body {
  position: relative;
  top: 0;
  background-color: rgb(255, 255, 255);
  transition: top 0.15s ease-in-out;
}
.mp-v5-starter-card:hover .mp-v5-starter-body {
  top: -100px;
  background-color: rgb(255, 255, 255);
}
.mp-v5-starter-card .mp-v5-starter-link-icon {
  display: none;
}
.mp-v5-starter-card:hover .mp-v5-starter-link-icon {
  display: block !important;
}
`

interface StarterCardProps {
  title: string
  bannerSrc: string
  bannerAlt?: string
  description?: string
}

export function StarterCard({ title, bannerSrc, bannerAlt, description }: StarterCardProps) {
  return (
    <>
      <style>{starterStyles}</style>
      <div className="mp-v5-starter-card">
        <div style={{ width: '100%' }}>
          {/* Banner cover */}
          <div style={{ height: 160, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bannerSrc} alt={bannerAlt ?? title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Body - slides up -100px on hover */}
          <div className="mp-v5-starter-body" style={{ padding: '16px 16px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 24, marginBottom: 10 }}>
              <h2 style={{ color: 'rgb(34, 34, 34)', fontSize: 16, fontWeight: 600, lineHeight: '24px', marginRight: 4 }}>
                {title}
              </h2>
              <span className="mp-v5-starter-link-icon"><LinkIcon /></span>
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', overflow: 'hidden' }}>
                {description}
              </p>
            )}

            {/* Import button - only visible when body slides up on hover */}
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
                <InstallIcon />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * Content Model Card variant with banner image (similar to StarterCard but different dimensions)
 */

const cmStyles = `
.mp-v5-cm-card {
  background-color: #fff;
  border: 1px solid rgb(221, 227, 238);
  border-radius: 4px;
  width: 320px;
  height: 220px;
  overflow: hidden;
  margin: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: 0.3s ease-in-out;
}
.mp-v5-cm-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-v5-cm-card .mp-v5-cm-body {
  margin-top: 1px;
  background-color: rgb(255, 255, 255);
}
.mp-v5-cm-card:hover .mp-v5-cm-body {
  margin-top: -100px;
  position: relative;
  transition: 0.15s ease-in-out;
  border-top: 1px solid rgb(221, 227, 238);
  background-color: rgb(255, 255, 255);
}
.mp-v5-cm-card .mp-v5-cm-link-icon {
  display: none;
}
.mp-v5-cm-card:hover .mp-v5-cm-link-icon {
  display: block !important;
}
`

interface ContentModelCardProps {
  title: string
  bannerSrc: string
  bannerAlt?: string
  description?: string
}

export function ContentModelCard({ title, bannerSrc, bannerAlt, description }: ContentModelCardProps) {
  return (
    <>
      <style>{cmStyles}</style>
      <div className="mp-v5-cm-card">
        <div style={{ width: '100%' }}>
          {/* Banner cover */}
          <div style={{ height: 160, overflow: 'hidden', borderBottom: '1px solid rgb(221, 227, 238)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bannerSrc} alt={bannerAlt ?? title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Body - slides up -100px on hover */}
          <div className="mp-v5-cm-body" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 24, marginBottom: 12 }}>
              <h3 style={{ color: 'rgb(34, 34, 34)', fontSize: 16, fontWeight: 600, lineHeight: '24px', marginRight: 4 }}>
                {title}
              </h3>
              <span className="mp-v5-cm-link-icon"><LinkIcon /></span>
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', height: 44, overflow: 'hidden' }}>
                {description}
              </p>
            )}
          </div>

          {/* Footer with Import button */}
          <div style={{ padding: '0 16px 16px', height: 48 }}>
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
              <InstallIcon />
              Import
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * Recipe Card with dual icon display
 */

const recipeStyles = `
.mp-v5-recipe-card {
  background-color: #fff;
  border: 1px solid rgb(221, 227, 238);
  border-radius: 4px;
  width: 320px;
  height: 220px;
  overflow: hidden;
  margin: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: 0.3s ease-in-out;
}
.mp-v5-recipe-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-v5-recipe-card .mp-v5-recipe-body {
  margin-top: 1px;
  background-color: rgb(255, 255, 255);
}
.mp-v5-recipe-card:hover .mp-v5-recipe-body {
  margin-top: -100px;
  position: relative;
  transition: 0.15s ease-in-out;
  border-top: 1px solid rgb(221, 227, 238);
  background-color: rgb(255, 255, 255);
}
.mp-v5-recipe-card .mp-v5-recipe-link-icon {
  display: none;
}
.mp-v5-recipe-card:hover .mp-v5-recipe-link-icon {
  display: block !important;
}
`

interface RecipeCardProps {
  title: string
  icon: ReactNode
  description?: string
}

export function RecipeCard({ title, icon, description }: RecipeCardProps) {
  return (
    <>
      <style>{recipeStyles}</style>
      <div className="mp-v5-recipe-card">
        <div style={{ width: '100%' }}>
          {/* Cover area with dual icons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(247, 249, 252)',
              height: 160,
              borderBottom: '1px solid rgb(221, 227, 238)',
            }}
          >
            {icon}
          </div>

          {/* Body - slides up -100px on hover */}
          <div className="mp-v5-recipe-body" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 24, marginBottom: 12 }}>
              <h2
                style={{
                  color: 'rgb(33, 33, 33)', fontSize: 16, fontWeight: 600,
                  lineHeight: '24px', marginRight: 4,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const,
                  maxWidth: 260,
                }}
              >
                {title}
              </h2>
              <span className="mp-v5-recipe-link-icon"><LinkIcon /></span>
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', height: 44, overflow: 'hidden' }}>
                {description}
              </p>
            )}
          </div>

          {/* Footer with Import button */}
          <div style={{ padding: '0 16px 16px', height: 48 }}>
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
              <InstallIcon />
              Import
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
