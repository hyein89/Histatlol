import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "visits.json");

export async function POST(request: Request) {
  try {
    // Baca file data pengunjung
    let data = { visits: 0 };
    if (fs.existsSync(filePath)) {
      const json = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(json);
    }

    // Tambah 1 kunjungan baru
    data.visits += 1;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, visits: data.visits });
  } catch (error) {
    console.error("Error saving visit:", error);
    return NextResponse.json({ success: false, error: "Failed to save visit" });
  }
}

export async function GET() {
  try {
    if (fs.existsSync(filePath)) {
      const json = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(json);
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ visits: 0 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to read data" });
  }
}
