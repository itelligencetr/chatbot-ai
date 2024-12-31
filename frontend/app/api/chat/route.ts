import { HumanloopStream } from '@/lib/humanloop-stream'
import { StreamingTextResponse } from 'ai'
import { HumanloopClient } from 'humanloop'

export const runtime = 'edge'

const API_KEY = process.env.API_KEY

const client = new HumanloopClient({
  apiKey: API_KEY || ''
})

export async function POST(req: Request) {
  if (!API_KEY) {
    throw new Error('API_KEY is not set')
  }

  const { messages } = await req.json()

  const chatResponse = await client.prompts.callStream({
    path: 'sdk-example',
    messages
  })

  return new StreamingTextResponse(HumanloopStream(chatResponse))
}
