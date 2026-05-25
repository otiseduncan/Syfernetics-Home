import type { NextRequest } from 'next/server'

const goneBody = 'This resource has been retired.'

export function GET(_request: NextRequest) {
  return new Response(goneBody, {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'public, max-age=300',
    },
  })
}

export function HEAD(_request: NextRequest) {
  return new Response(null, {
    status: 410,
    headers: {
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'public, max-age=300',
    },
  })
}
