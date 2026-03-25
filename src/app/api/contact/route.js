export async function POST(req) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 })
  }

  const text = `📩 *New Portfolio Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:*\n${message}`

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    }
  )

  if (!res.ok) {
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return Response.json({ success: true })
}
