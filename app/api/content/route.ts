import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.join('/tmp', 'content.json')

export async function GET() {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return Response.json(JSON.parse(data))
  } catch {
    return Response.json({})
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await fs.writeFile(filePath, JSON.stringify(body))
    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false })
  }
}
