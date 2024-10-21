import type { Metadata } from "next";
import "../globals.css";
import i18nConfig from "@/i18nConfig";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased bg-slate-200 text-black`}>{children}</body>
		</html>
	);
}