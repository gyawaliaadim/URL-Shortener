import { NextResponse } from 'next/server'

const corsOptions = {
  'Access-Control-Allow-Origin': '*', // Allow all origins
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function middleware(request) {
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    return NextResponse.json({}, { headers: corsOptions })
  }

  const response = NextResponse.next()
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: '/api/generate',
}
