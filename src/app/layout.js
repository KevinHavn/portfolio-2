import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Kevin Havn - Front End Developer",
	description:
		"Kevin Havn is an aspiring Front-End Developer, and this is his portfolio where you can see the different projects he's been involved in.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
				<Header />
				<main className="container mx-auto px-4 py-8 flex-grow">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
