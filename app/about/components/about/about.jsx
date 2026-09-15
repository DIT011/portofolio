import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/aldyto-santai-1.webp";
import Me2 from "@/public/image/aldyto-santai-3.webp";
import Me3 from "@/public/image/aldyto-santai-4.webp";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Hi! I&rsquo;am Aldyto Yohan Yudhatama 👋
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am a{" "}
						<span className="text-black font-medium">
							Fresh graduate with a D4 degree in Software Engineering Technology from Politeknik Negeri Banyuwangi,{" "}
						</span>
						with experience in{" "}
						<span className="text-black font-medium">
							web and mobile {" "}
						</span>
						application development through{" "}
						<span className="text-black font-medium">
							Project-Based Learning (PBL), internships, academic projects, and freelance work.{" "}
						</span>
						Proficient in {" "}
						<span className="text-black font-medium">
							Laravel, MySQL, and Flutter. {" "}
						</span>						
						
						<br />
						<br />
						And a foundational background in{" "}
						<span className="text-black font-medium">
							networking {" "}
						</span>
						supported by {" "}
						<span className="text-black font-medium">
							MTCNA and BNSP Junior Network Administrator certifications. {" "}
						</span>
						Developed a{" "}
						<span className="text-black font-medium">
							digital village website {" "}
						</span>
						and an {" "}
						<span className="text-black font-medium">
							internship registration and participant management system during internships, {" "}
						</span>
						along with various freelance projects through {" "}
						<a
								href="https://ijendev.id/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline hover:text-blue-600 transition-colors"
							>
								IjenDev.id
						</a>
						. Adaptable, collaborative, and able to take on different roles based on
						project needs.
					</p>
					{/* <Card /> */}
				</motion.div>
			</div>
		</>
	);
}
