import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const filePath = path.join(process.cwd(), "data", "visits.json");

  // Buat folder "data" kalau belum ada
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath));
  }

  const oldData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  const newVisit = {
    time: new Date().toISOString(),
    page: req.body.page || "unknown",
    referrer: req.body.referrer || "",
    userAgent: req.headers["user-agent"] || "",
  };

  oldData.push(newVisit);
  fs.writeFileSync(filePath, JSON.stringify(oldData, null, 2));

  res.status(200).json({ message: "Tracked" });
}
