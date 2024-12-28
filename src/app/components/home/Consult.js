"use client";
import React from "react";
import { ConsultImage } from "../../../../public/page";
import Image from "next/image";
import { PageLayout } from "@/app/layout/pageLayout";
import SubHeader from "@/app/layout/subHeader";
import { CustomBtn } from "@/app/utils/customBtn";
import { motion } from "framer-motion";

function Consult() {
	return (
		<div className="relative overflow-x-hidden">
			<PageLayout>
				<div className="py-10 relative flex flex-col-reverse lg:flex-row items-center justify-between">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						className="w-full lg:w-[100%] relative">
						<Image
							data-aos="fade-up"
							src={ConsultImage}
							alt=""
							className="relative z-[2]"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: false }}
						className="w-full flex gap-5 flex-col items-start justify-start">
						<div
						// data-aos="fade-up"
						>
							<SubHeader>Digital Asset Rescue overview</SubHeader>
						</div>
						<h2 className="text-left" data-aos="fade-up">
							Services We Provide
						</h2>
						<p data-aos="fade-up">
							Digital Asset Rescue is a leading crypto recovery company that
							helps individuals and businesses reclaim lost or stolen assets
							from online scams, including forex, romance, investment scams, and
							cyber threats like hacking. Our expert team utilizes advanced
							recovery techniques and offers personalized solutions without
							charging upfront fees. Committed to integrity and client
							satisfaction, we empower our clients to navigate the digital
							landscape confidently, providing compassionate support throughout
							their recovery journey.
						</p>
						<div data-aos="fade-up">
							<a href="/about-us">
								<CustomBtn>About Us</CustomBtn>
							</a>
						</div>
					</motion.div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Consult;
