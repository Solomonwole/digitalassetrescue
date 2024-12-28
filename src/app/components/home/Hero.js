"use client";
import React from "react";
import Image from "next/image";
import { PageLayout } from "@/app/layout/pageLayout";
import { CustomBtn } from "@/app/utils/customBtn";
import { Plant } from "../../../../public/page";
import { motion } from "framer-motion";

function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1,  }}
			transition={{ duration: 0.5 }}
			className="bg-primary-500 w-full">
			<>
				<section className="relative grid grid-cols-1 md:grid-cols-2 lg:h-[80dvh] overflow-x-hidden">
					<section className="relative space-y-4 py-10 px-4 lg:pl-24">
						<div className="border-2 border-primary-200 rounded-full w-[100%] lg:max-w-[50%] mx-auto px-3 inline-flex items-center justify-between gap-3 py-2">
							<div className="w-2 h-2 bg-primary-200 rounded-lg shadow" />
							<p className="text-gray-300 text-xs font-bold">
								REAQUIRIX CONSULTANCY SERVICES
							</p>
							<div className="w-2 h-2 bg-primary-200 rounded-lg shadow" />
						</div>

						<div className="space-y-4 mb-3">
							<h1 className="text-white text-[2.8rem] lg:text-[3.8rem] font-bold leading-tight">
								Recover Your Lost Assets with Confidence and Ease
							</h1>
							<p className="text-white w-full lg:w-[80%]">
								Whether you&apos;ve lost track of financial accounts, unclaimed
								funds, or valuable property, our expert team is here to guide
								you through the recovery process
							</p>
						</div>
						<div>
							<a href="/contact-us">
								<CustomBtn type="button">Get Free Consultation</CustomBtn>
							</a>
						</div>
					</section>

					<Image
						src="/hero-shape.png"
						alt=""
						width={369}
						height={535}
						className="absolute top-10 left-[35%] opacity-10 md:opacity-20"
					/>

					{/* <section className="hidden md:flex h-full w-full"> */}
					<Image
						src="/hero.jpg"
						alt="REAQUIRIX"
						width={1200}
						height={500}
						className="relative object-cover h-full w-full hidden md:flex"
					/>
					{/* </section> */}
				</section>
				{/* <div className="relative w-full lg:w-[70%] space-y-8">
					<div className="border-2 border-primary-200 rounded-full px-3 inline-flex items-center justify-between gap-3 py-2">
						<div className="w-2 h-2 bg-primary-200 rounded-lg shadow" />
						<p className="text-gray-300 font-bold">
							REAQUIRIX CONSULTANCY SERVICES
						</p>
						<div className="w-2 h-2 bg-primary-200 rounded-lg shadow" />
					</div>
					<h1 className="text-white text-5xl lg:text-[80px] font-bold leading-tight">
						Recover Your Lost Assets with Confidence and Ease
					</h1>
					<p className="text-white w-full lg:w-[80%]">
						Whether you&apos;ve lost track of financial accounts, unclaimed
						funds, or valuable property, our expert team is here to guide you
						through the recovery process
					</p>
					<div>
						<a href="/contact-us">
							<CustomBtn type="button">Get Free Consultation</CustomBtn>
						</a>
					</div>
				</div> */}
			</>
		</motion.div>
	);
}

export default Hero;
