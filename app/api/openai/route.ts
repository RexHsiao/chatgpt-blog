import OpenAI from 'openai';
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request, response: any) {
  try {
    const { title, role } = await request.json();

    const aiResponse: OpenAI.Chat.ChatCompletion = 
      await openai.chat.completions.create({
        messages: [
          { 
            role: 'user', 
            content: `Create 3 line blog post with html tags based on this title: ${title}` 
          },
          { 
            role: 'system', 
            content: `${role || "I am a helpful assistant."} Write with html tags.` 
          },
        ],
        model: 'gpt-3.5-turbo',
      });
    
    // response.revalidate("/api/posts")
    return NextResponse.json({
      content: aiResponse.choices[0].message?.content
    }, { status: 200})
  } catch (error) {
    console.error("request error", error)
    return NextResponse.json({ error: "error updating post"}, { status: 500})
  }
}