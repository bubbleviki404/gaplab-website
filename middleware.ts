import { NextResponse, type NextRequest } from 'next/server'

/**
 * Local/dev Font Card proxy for ZeoSeven.
 * Static GitHub Pages export cannot run middleware — before deploy, replace with
 * Cloudflare Worker (or self-hosted fonts) that sets Origin to fonts.zeoseven.com.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/zsft/')) {
    return NextResponse.next()
  }

  const upstreamPath = pathname.replace(/^\/zsft/, '') || '/'
  const upstream = `https://fontsapi.zeoseven.com${upstreamPath}${request.nextUrl.search}`

  try {
    const res = await fetch(upstream, {
      headers: {
        Origin: 'https://fonts.zeoseven.com',
        Referer: 'https://fonts.zeoseven.com/',
        'User-Agent': 'Mozilla/5.0 GapLabFontCardProxy/1.0',
        Accept: request.headers.get('Accept') || '*/*',
      },
      // Avoid caching empty 204s from bad origins in the edge of fetch
      cache: 'no-store',
    })

    const headers = new Headers()
    const contentType = res.headers.get('Content-Type')
    if (contentType) headers.set('Content-Type', contentType)
    headers.set('Cache-Control', 'public, max-age=3600')
    headers.set('Access-Control-Allow-Origin', '*')

    return new NextResponse(res.body, {
      status: res.status,
      headers,
    })
  } catch {
    return new NextResponse('Font proxy failed', { status: 502 })
  }
}

export const config = {
  matcher: '/zsft/:path*',
}
