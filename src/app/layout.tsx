import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

export const metadata: Metadata = {
	title: "Aurum Cantina",
	description: "Aurum Cantina është një lounge bar modern që ofron një kombinim unik të kuzhinës amerikane, italiane dhe meksikane. Me një atmosferë të ngrohtë dhe relaksuese, ne ju presim me ushqim të shijshëm, kafe cilësore dhe një përzgjedhje të gjerë pijesh alkoolike. Vendi ideal për të shijuar momente me miqtë apo për të kaluar një mbrëmje të këndshme.",
	keywords:
		"restaurant, food, menu, reservation, booking, restaurant template, restaurant website, restaurant website template, restaurant website design, restaurant website development, restaurant website builder, restaurant website creator, restaurant website generator, restaurant website maker, restaurant website editor, restaurant website designer, restaurant website developer, restaurant website builder, restaurant website creator, restaurant website generator, restaurant website maker, restaurant website editor, restaurant website designer, restaurant website developer",
	authors: [{ name: "Codesphere LLC", url: "www.codespherellc.com" }],
	creator: "Codesphere LLC",
	publisher: "Codesphere LLC",
	openGraph: {
		title: "Aurum Cantina",
		description: "Aurum Cantina është një lounge bar modern që ofron një kombinim unik të kuzhinës amerikane, italiane dhe meksikane. Me një atmosferë të ngrohtë dhe relaksuese, ne ju presim me ushqim të shijshëm, kafe cilësore dhe një përzgjedhje të gjerë pijesh alkoolike. Vendi ideal për të shijuar momente me miqtë apo për të kaluar një mbrëmje të këndshme.",
	},
	icons: {
		icon: "/favicon.jpg",
	},
	themeColor: "#000000",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
