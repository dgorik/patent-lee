
import { type NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest){
    try{
        const body = await request.json()
        const {userQuestion} = body
        let summary = "this is the response from the backend"
        return NextResponse.json({ success: true, summary })
    }

    catch (error) {
    console.error("Fethcing Error:", error)
    return NextResponse.json({ success: false, message: "Data you requested doesn't exist" }, { status: 500 })
  }
}