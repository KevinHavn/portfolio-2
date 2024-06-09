import Head from "next/head";
import AboutMeCard from "@/components/AboutCard";

export default function About() {
	return (
		<div>
			<Head>
				<title>About Me</title>
				<meta name="description" content="About me page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AboutMeCard />
			</main>
		</div>
	);
}
