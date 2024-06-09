"use client";

import React from "react";

const AboutMeCard = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col mx-auto">
				<div className="px-6 py-4 flex-grow">
					<p className="text-xl mb-2 text-gray-900">About Me</p>
					<p className="text-gray-700 text-base">
						This section is a work in progress. I&apos;ll be adding more details
						about myself soon. Stay tuned for updates!
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeCard;
