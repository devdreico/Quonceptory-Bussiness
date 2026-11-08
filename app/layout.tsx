import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quonceptory Business — Oportunidades reales y ejecución",
  description:
    "El feed vivo de señales, capital, talento y proyectos de la red Quonceptory. Una comunidad pública para aprender y un círculo privado que se gana con conocimiento.",
  metadataBase: new URL("https://business.quonceptory.com"),
  openGraph: {
    title: "Quonceptory Business",
    description: "Oportunidades reales. Gente que las ejecuta.",
    url: "https://business.quonceptory.com",
    siteName: "Quonceptory Business",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quonceptory Business",
    description: "Oportunidades reales. Gente que las ejecuta.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="grain antialiased selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}
