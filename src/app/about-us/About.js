"use client";
import Link from "next/link";
import React from "react";
import Count from "../components/home/Count";
import Consult from "../components/home/Consult";
import Image from "next/image";
import {
	AboutBack,
	AboutLogo,
	AboutMission,
	AboutMissionBack,
	AboutService,
	AboutServiceBack,
	AboutSuccess,
	AboutSuccessBack,
	AboutTeam,
	AboutTeamBack,
} from "../../../public/page";
import { PageLayout } from "../layout/pageLayout";
import SubHeader from "../layout/subHeader";
import Contact from "../components/about/Contact";

function About() {
	return (
		<div>
			{/* <Seo title="Digital Asset Rescue - About Us" /> */}
			<div className="about-bg h-[20vh] lg:min-h-[40vh] bg-primary-900 w-full flex flex-col gap-3 lg:gap-10 items-center justify-center">
				<div className="w-full lg:w-[80%]">
					<h1 className="text-white text-center text-3xl lg:text-5xl font-bold">
						About Us
					</h1>
				</div>
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
						<li className="inline-flex items-center">
							<Link
								href="/"
								className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
								<svg
									className="w-3 h-3 me-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
								Home
							</Link>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<Link
									href="/about-us"
									className="ms-1 text-sm font-medium text-gray-400 hover:text-white md:ms-2">
									About
								</Link>
							</div>
						</li>
					</ol>
				</nav>
			</div>

			<PageLayout>
				<div className="w-full py-20 space-y-10 lg:space-y-20">
					<Sections reverse={false}>
						<div className="lg:w-1/2">
							<SubHeader>About Digital Asset Rescue</SubHeader>
							<h2 data-aos="fade-up">About Us</h2>
							<p data-aos="fade-up">
							Digital Asset Rescue is a leading asset and cryptocurrency recovery
								company with a proven track record of success. We have helped
								clients from all over the world recover lost funds, stolen
								assets, and compromised accounts.
							</p>
						</div>
						<div className="lg:w-1/2">
							<ImageCard frontImage={AboutLogo} backImage={AboutBack} />
						</div>
					</Sections>
					<Sections reverse={true}>
						<div className="lg:w-1/2">
							<SubHeader>Digital Asset Rescue Mission</SubHeader>
							<h2 data-aos="fade-up">Our Mission</h2>
							<p data-aos="fade-up">
								Our mission is to help people regain control of their digital
								assets and protect themselves from cybercrime. We believe that
								everyone deserves access to safe and reliable financial
								services, and we are committed to providing our clients with the
								best possible service and support.
							</p>
						</div>
						<div className="lg:w-1/2">
							<ImageCard
								frontImage={AboutMission}
								backImage={AboutMissionBack}
							/>
						</div>
					</Sections>
					<Sections reverse={false}>
						<div className="lg:w-1/2">
							<SubHeader>Digital Asset Rescue Services</SubHeader>
							<h2 data-aos="fade-up">Our Services</h2>
							<div>
								<p data-aos="fade-up">
									We offer a wide range of asset and cryptocurrency recovery
									services, including:
								</p>
								<p>
									<br />
								</p>
								<ul data-aos="fade-up">
									<li>
										<strong>Lost Fund Recovery:</strong>&nbsp;We can help you
										recover lost funds from exchanges,&nbsp;wallets,&nbsp;and
										other platforms.
									</li>
									<li>
										<strong>Stolen Asset Recovery:</strong>&nbsp;We can help you
										recover stolen assets such as
										Bitcoin,&nbsp;Ethereum,&nbsp;and other cryptocurrencies.
									</li>
									<li>
										<strong>Compromised Account Recovery:</strong>&nbsp;We can
										help you recover compromised accounts and protect your data.
									</li>
									<li>
										<strong>Forensic Investigation:</strong>&nbsp;We can conduct
										forensic investigations to determine the cause of a
										cybercrime and identify the perpetrators.
									</li>
									<li>
										<strong>Legal Services:</strong>&nbsp;We can provide you
										with legal advice and representation to help you recover
										your losses.
									</li>
								</ul>
								<p>
									<br />
								</p>
							</div>
						</div>
						<div className="lg:w-1/2">
							<ImageCard
								frontImage={AboutService}
								backImage={AboutServiceBack}
							/>
						</div>
					</Sections>
					<Sections reverse={true}>
						<div className="lg:w-1/2">
							<SubHeader>Digital Asset Rescue Team</SubHeader>
							<h2 data-aos="fade-up">Our Team</h2>
							<p data-aos="fade-up">
								Our team of experts is comprised of experienced professionals
								with a deep understanding of the digital asset landscape. We are
								committed to providing our clients with the highest level of
								service and support.
							</p>
						</div>
						<div className="lg:w-1/2">
							<ImageCard frontImage={AboutTeam} backImage={AboutTeamBack} />
						</div>
					</Sections>
					<Sections reverse={false}>
						<div className="lg:w-1/2">
							<SubHeader>Digital Asset Rescue Success</SubHeader>
							<h2 data-aos="fade-up">Our Success Rate</h2>
							<p data-aos="fade-up">
							Digital Asset Rescue has a proven track record of success. We have helped
								clients recover large amount of dollars in lost funds and stolen
								assets.
							</p>
						</div>
						<div className="lg:w-1/2">
							<ImageCard
								frontImage={AboutSuccess}
								backImage={AboutSuccessBack}
							/>
						</div>
					</Sections>
				</div>
			</PageLayout>

			{/* <div className="pt-20 lg:pt-0">
				<Consult />
			</div> */}
			<Count />
			<Contact />
		</div>
	);
}

export default About;

function Sections({ reverse, children }) {
	return (
		<div
			className={`w-full flex ${
				reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
			} lg:items-center justify-between gap-10`}>
			{children}
		</div>
	);
}

function ImageCard({ frontImage, backImage }) {
	return (
		<div className="relative h-[450px]">
			<Image
				data-aos="fade-left"
				src={frontImage}
				alt=""
				className="absolute h-[325px] w-full max-w-[325px] left-0 z-[2] rounded-lg"
				height={325}
				width="100%"
			/>
			<Image
				data-aos="fade-right"
				src={backImage}
				alt=""
				className="absolute h-[325px] w-full max-w-[325px] right-0 bottom-2 z-[1] rounded-lg"
				height={325}
				width="100%"
			/>
		</div>
	);
}
