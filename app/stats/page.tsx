"use client";
import { useEffect, useState } from "react";

export default function StatsPage() {
  const [visits, setVisits] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/visits.json")
      .then((res) => res.json())
      .then((data) => setVisits(data.reverse()));
  }, []);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Visitor Stats</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm bg-white shadow rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2">Time</th>
              <th className="p-2">Page</th>
              <th className="p-2">Referrer</th>
              <th className="p-2">User Agent</th>
            </tr>
          </thead>
          <tbody>
            {visits.length > 0 ? (
              visits.map((v, i) => (
                <tr key={i} className="border-t hover:bg-blue-50">
                  <td className="p-2">{new Date(v.time).toLocaleString()}</td>
                  <td className="p-2">{v.page}</td>
                  <td className="p-2 text-gray-600">{v.referrer || "-"}</td>
                  <td className="p-2 text-gray-500">{v.userAgent}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400">
                  No visits yet...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
