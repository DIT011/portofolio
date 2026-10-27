import Image from "next/image";
import { motion } from "framer-motion";
import Me4 from "@/public/image/aldyto-santai-5.webp";
import Me5 from "@/public/image/aldyto-santai-6.webp";
import Me6 from "@/public/image/aldyto-santai-7.webp";

import Me7 from "@/public/image/aldyto-santai-8.webp";
import Me8 from "@/public/image/aldyto-santai-10.webp";
import Me9 from "@/public/image/aldyto-santai-9.webp";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	return (
		<Wrapper>
			{/* Politeknik Negeri Banyuwangi (terbaru, di atas) */}
			<section className="grid gap-8 md:gap-12">
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-8">
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">2022 - 2026</div>
						<div>
							<h2 className="font-semibold text-xl">
								Politeknik Negeri Banyuwangi
							</h2>
							<h3 className="text-md font-normal mb-3">
								D4 Teknologi Rekayasa Perangkat Lunak | Software Engineering Technology
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								{[Me7, Me8, Me9].map((img, i) => (
									<div
										key={i}
										className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={img}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
								))}
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I studied Software Engineering Technology at{" "}
									<span className="text-black font-medium">
										Politeknik Negeri Banyuwangi,
									</span>{" "}
									where I developed a strong foundation in{" "}
									<span className="text-black font-medium">
										software development
									</span>{" "}
									through various academic projects and practical learning. I gained experience with programming languages and technologies such as{" "}
									<span className="text-black font-medium">
										Java, C++, PHP, HTML, Laravel, and MySQL,
									</span>{" "}
									with a particular interest in{" "}
									<span className="text-black font-medium">
										web and mobile application
									</span>{" "}
									development.
									<br />
									<br />
									I completed my degree within four years. During my studies, I was also entrusted by lecturers to develop several{" "}
									<span className="text-black font-medium">
										application projects
									</span>{" "}
									including a{" "}
									<span className="text-black font-medium">
										goods rental website and a web prototype for course and academic credit management.
									</span>
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.72 out of 4
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* SMK Negeri 1 Glagah (di bawah) */}
			<section className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 gap-8">
					<div className="font-medium text-lg mb-4">{"\u00A0"}</div>

					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">2018 - 2021</div>
						<div>
							<h2 className="font-semibold text-xl">
								SMK Negeri 1 Glagah Banyuwangi
							</h2>
							<h3 className="text-md font-normal mb-3">
								Teknik Komputer Dan Jaringan | Computer and Network Engineering
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								{[Me5, Me4, Me6].map((img, i) => (
									<div
										key={i}
										className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={img}
											width={400}
											height={225}
											alt="Vocational High School"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
								))}
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I studied Computer and Network Engineering at{" "}
									<span className="text-black font-medium">
										SMK Negeri 1 Glagah Banyuwangi
									</span>{" "}
									Vocational High School, where I gained hands-on experience with networking technologies such as{" "}
									<span className="text-black font-medium">
										MikroTik, Cisco Packet Tracer, TP-Link devices, and basic network installation.
									</span>
									<br />
									<br />
									Throughout my three years of study, I consistently ranked in the top 10 and graduated 2nd in my final year. I also earned the{" "}
									<span className="text-black font-medium">
										MTCNA certification{" "}
									</span>
									during my studies.
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 84.54 out of 100
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}