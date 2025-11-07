export const metadata = {
  title: "Histats Custom",
  description: "Simple visitor tracker hosted on Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
