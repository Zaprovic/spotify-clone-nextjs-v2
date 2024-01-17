import "@/app/globals.css";
import ProviderResizable from "@/provider/provider-resizable";
import ProviderSession from "@/provider/provider-session";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProviderSession>
            <html lang="en">
                <body>
                    <div id="app">
                        <ProviderResizable>{children}</ProviderResizable>
                        <section className="p-2">Bottom section</section>
                    </div>
                </body>
            </html>
        </ProviderSession>
    );
}
