"use client"

/**
 * Recipe Card Component - Built from vacuum capture: cap_1770163349784_ujpseq
 *
 * Styles extracted using capture_get_styles_for_classes tool:
 * - Card__Content w-100 GuidesCard automations-card
 * - Card__heading w-100 GuidesCard__header
 * - GuidesCard__body--title
 * - GuidesCard__body--desc
 * - Button Button--primary Button--size-small Button--icon-alignment-left
 * - Avatar Avatar--small
 * - Avatar__image
 * - AvatarList
 * - Line Line--Solid
 * - GuidesCard__body--box
 * - w-100 GuidesCard__footer
 */

interface RecipeCardProps {
  recipe: {
    id: string
    title: string
    description: string
    avatars: { src: string; alt: string }[]
  }
}

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 20, height: 20, flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0 1.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5 2.5 8.544 2.5 16 8.544 29.5 16 29.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 10.22a.75.75 0 01.77.02l9 6a.75.75 0 010 1.25l-9 6A.75.75 0 0112 22.85v-12a.75.75 0 01.25-.63zm1.25 2.16v7.24L20.14 16l-6.64-3.62z"
        fill="currentColor"
      />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 16, height: 16 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.25A2.75 2.75 0 006.25 6v14A2.75 2.75 0 009 22.75h14A2.75 2.75 0 0025.75 20V6A2.75 2.75 0 0023 3.25H9zM7.75 6c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H9c-.69 0-1.25-.56-1.25-1.25V6z"
        fill="currentColor"
      />
      <path
        d="M4.75 10a.75.75 0 00-1.5 0v16A2.75 2.75 0 006 28.75h16a.75.75 0 000-1.5H6c-.69 0-1.25-.56-1.25-1.25V10z"
        fill="currentColor"
      />
    </svg>
  )
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div
      style={{
        // Card__Content w-100 GuidesCard automations-card
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '100%',
        height: 240,
        minWidth: 320,
        maxWidth: 320,
        margin: 15,
        border: '1px solid rgb(221, 227, 238)',
        borderRadius: 4,
        backgroundColor: 'rgb(255, 255, 255)',
        cursor: 'pointer',
        transition: '0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.14) 0px 0px 2px 0px'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Card Header - Card__heading w-100 GuidesCard__header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 160,
          padding: '0 20px',
          borderRadius: '4px 4px 0 0',
          backgroundColor: 'rgb(247, 249, 252)',
          flexShrink: 0,
        }}
      >
        {/* AvatarList */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {recipe.avatars.map((avatar, index) => (
            <div
              key={index}
              style={{
                // Avatar Avatar--small
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                width: 65,
                height: 65,
                border: '2px solid rgb(247, 249, 252)',
                borderRadius: '50%',
                backgroundColor: 'rgb(237, 241, 247)',
                marginLeft: index > 0 ? -20 : 0,
                zIndex: recipe.avatars.length - index,
              }}
            >
              {/* Avatar__image */}
              <img
                src={avatar.src}
                alt={avatar.alt}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  border: '3px solid rgb(221, 227, 238)',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(255, 255, 255)',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-width wrapper for line and body */}
      <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Line Line--Solid */}
        <div
          style={{
            width: '100%',
            height: 1,
            borderTop: '1px solid rgb(221, 227, 238)',
          }}
        />

        {/* GuidesCard__body--box */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: 16,
          }}
        >
          {/* Title row with copy icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 4,
            }}
          >
            {/* GuidesCard__body--title */}
            <h2
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                width: 258,
                maxWidth: '100%',
                margin: 0,
                marginRight: 4,
                color: 'rgb(34, 34, 34)',
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                letterSpacing: '-0.00304px',
              }}
            >
              {recipe.title}
            </h2>

            {/* Copy icon */}
            <span
              style={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'rgb(71, 81, 97)',
              }}
            >
              <CopyIcon />
            </span>
          </div>

          {/* GuidesCard__body--desc */}
          <p
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              margin: 0,
              color: 'rgb(71, 81, 97)',
              fontSize: 14,
              lineHeight: '21px',
            }}
          >
            {recipe.description}
          </p>
        </div>

        {/* w-100 GuidesCard__footer */}
        <div
          style={{
            width: '100%',
            height: 32,
            padding: '0 16px 16px',
          }}
        >
          {/* Button Button--primary Button--size-small */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              height: 32,
              minWidth: 32,
              minHeight: 32,
              maxHeight: 32,
              padding: '5px 16px',
              border: '1px solid transparent',
              borderRadius: 4,
              backgroundColor: 'rgb(108, 92, 231)',
              color: 'rgb(255, 255, 255)',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '14px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(93, 80, 190)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(108, 92, 231)'
            }}
          >
            <PlayIcon />
            <span>Use Recipe</span>
          </button>
        </div>
      </div>
    </div>
  )
}
