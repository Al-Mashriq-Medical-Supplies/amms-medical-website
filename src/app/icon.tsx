import { ImageResponse } from 'next/og'
import { join } from 'path'
import { readFileSync } from 'fs'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default function Icon() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/logo/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <img
          src={logoSrc}
          style={{
            objectFit: 'contain',
            width: '80%',
            height: '80%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
