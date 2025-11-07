export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">Histats Custom</h1>
      <p className="text-gray-600 mt-2">
        Server tracking ready on Vercel 🚀
      </p>
      <a
        href="/stats"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Stats
      </a>
    </main>
  );
}
