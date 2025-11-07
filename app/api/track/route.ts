import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();
  const filePath = path.join(process.cwd(), "public", "visits.json");

  let visits: any[] = [];
  if (fs.existsSync(filePath)) {
    visits = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  visits.push(data);
  fs.writeFileSync(filePath, JSON.stringify(visits, null, 2));

  return NextResponse.json({ message: "Logged", total: visits.length });
}
