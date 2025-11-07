import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Visitor logged:", data);

  return NextResponse.json({ message: "Logged", data });
}

export async function GET() {
  return NextResponse.json({ message: "Tracking API ready 🚀" });
}
