//http://localhost:3000/api/revalidate?path:/

import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request: NextRequest) {
  //console.log(request.nextUrl.searchParams.get("path"))
  if(request.nextUrl.searchParams.get("secret") !== process.env.MY_SECRET_TOKEN){
    return NextResponse.json({message: "Invalid Token"})
  } else {
    const path = request.nextUrl.searchParams.get('path') || '/'
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  }
  
}