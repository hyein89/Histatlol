export const metadata = {
  title: "Histatlol Tracker",
  description: "Simple visitor counter built with Next.js",
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
      <body style={{ fontFamily: "sans-serif", background: "#fafafa", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
