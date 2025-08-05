// import { EmailTemplate } from '../../../components/EmailTemplate'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)
// const from

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['rajatsahab675@gmailcom'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     })

//     if (error) {
//       return Response.json({ error }, { status: 500 })
//     }

//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }

// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)
// const fromEmail = process.env.FROM_EMAIL

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json()
//   console.log(email, subject, message)
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     })
//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }

// app/api/contact/route.js
// app/api/contact/route.js
import { connectDB } from '../../lib/mongodb'
import Contact from '../../models/Contact'

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    await connectDB()
    await Contact.create({ name, email, message })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
  } catch (error) {
    console.error('Error saving contact:', error)
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    })
  }
}
