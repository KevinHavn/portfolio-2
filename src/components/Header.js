import Link from "next/link";

const Header = () => {
	return (
		<header className="bg-blue-600 text-white py-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<h1 className="text-3xl font-bold">Kevin Havn</h1>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About Me</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
