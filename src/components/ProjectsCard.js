"use client";

import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects.json";

const ProjectsCard = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<div
						key={index}
						className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
						<div className="w-full h-64 relative">
							<Image
								src={project.image}
								alt={project.title}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="border-b border-gray-600 my-4"></div>
						<div className="px-6 py-4 flex-grow">
							<p className="text-xl mb-2 text-gray-900">{project.title}</p>
							<p className="text-gray-700 text-base">{project.description}</p>
						</div>
						<div className="px-6 pt-4 pb-2 flex justify-center space-x-4">
							<Link href={project.demo} passHref>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Demo
								</button>
							</Link>
							<Link href={project.repository} passHref>
								<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
									Repo
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsCard;
