import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CartContextProvider } from "@/context/CartContext"

const inter = Inter({ subsets: ["latin"] });
// update node x2
// update git and node
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CartContextProvider>
				<Navbar />
				<section>{children}</section>
				<footer>
					<p className="text-center text-sm text-gray-500">
						&copy; {new Date().getFullYear()} Your Company
					</p>
				</footer>
				</CartContextProvider>
			</body>
		</html>
	);
}
