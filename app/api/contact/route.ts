import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')

    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json({
      success: true,
      message: 'Contact form received.',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      { success: false, message: 'Unable to process contact form.' },
      { status: 500 }
    )
  }
}
