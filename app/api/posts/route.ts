import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function GET() {
  const client = getAdminClient()
  if (!client) {
    return NextResponse.json({ posts: [] })
  }
  const { data, error } = await client
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ posts: data ?? [] })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { description, images, date, password } = body

  const adminPassword = process.env.ADMIN_PASSWORD ?? 'speedbolt2026'
  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = getAdminClient()
  if (!client) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  const { data, error } = await client
    .from('posts')
    .insert({ description, images: images ?? [], date: date ?? new Date().toISOString().split('T')[0] })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ post: data }, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const { id, password } = await req.json()
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'speedbolt2026'
  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = getAdminClient()
  if (!client) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  const { error } = await client.from('posts').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
