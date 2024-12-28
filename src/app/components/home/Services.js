import React from "react";
import Image from "next/image";
import {
	Asset,
	Financial,
	Recovery,
	ServiceLine,
	ServiceLine2,
	Unclaimed,
} from "../../../../public/page";
import { PageLayout } from "@/app/layout/pageLayout";
import SubHeader from "@/app/layout/subHeader";
import { motion } from "framer-motion";
import { FaChartLine, FaKissWinkHeart } from "react-icons/fa";
import { BiCandles } from "react-icons/bi";import { GrGrow } from "react-icons/gr";
import { FaBitcoinSign } from "react-icons/fa6";
import { SiHackaday } from "react-icons/si";

function Services() {
	return (
		<div className="relative py-20 bg-white overflow-hidden">
			{/* <Image src={ServiceLine} alt="" className="absolute top-0 left-0" /> */}
			{/* <Image src={ServiceLine2} alt="" className="absolute right-0 top-[50%]" /> */}
			<PageLayout>
				<div
					data-aos="fade-up"
					className="w-full md:max-w-[50%] md:mx-auto md:flex md:flex-col md:items-center md:justify-center">
					<SubHeader>our services</SubHeader>
					<div className="mt-3">
						<div className="left ">
							<h2
								data-aos="fade-up"
								className="text-left md:text-center text-primary-200">
								Services We Provide
							</h2>
						</div>
						<div className="right">
							<p data-aos="fade-up" className="text-left md:text-center">
							Digital Asset Rescue provides comprehensive consultancy and training
								services tailored to the recovery of online assets.
							</p>
						</div>
					</div>
				</div>

				<div className="relative space-y-12 mt-10">
					{/* <div className="w-full flex flex-col items-center justify-center gap-3">
						<SubHeader>our services</SubHeader>
						<h2 className="text-center">Services We Provide</h2>
						<div className="w-full lg:w-[50%]">
							<p className="text-center">
								Digital Asset Rescue provides comprehensive consultancy and training
								services tailored to the recovery of online assets.
							</p>
						</div>
					</div> */}

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{gridList.map((item, index) => (
							<GridBox key={index} item={item} />
						))}
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Services;

function GridBox({ item }) {
	return (
		<>
			<section className="relative bg-primary-500 w-full h-[460px] lg:h-[315px] rounded-2xl grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-reverse">
				<div
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="order-1 lg:order-2 flex items-center justify-center">
					<Image
						data-aos="fade-left"
						src={item.image}
						alt={item.title}
						className="rounded-t-2xl lg:rounded-e-2xl lg:rounded-ss-none object-cover h-full w-full"
						width={500}
						height={450}
						loading="lazy"
					/>
				</div>
				<div data-aos="fade-up" className="order-2 lg:order-1 px-4 lg:p-6">
					<div
						data-aos="fade-up"
						className="relative -mt-10 lg:mt-0 mb-4 text-white bg-primary-200 bg-opacity-55 h-20 w-20 rounded-full flex items-center justify-center text-4xl">
						{item.icon}
					</div>
					<h3
						data-aos="fade-up"
						className="font-bold text-xl mt-1 text-white">{`${item.title}`}</h3>
					<p
						data-aos="fade-up"
						className="text-sm text-gray-400">{`${item.text}`}</p>
				</div>
			</section>
			{/* <div
				data-aos="fade-up"
				className="space-y-8 hover:shadow p-4 cursor-text rounded-lg">
				<div className="bg-primary-100 bg-opacity-20 flex items-center justify-center text-2xl rounded-full h-10 w-10">
					{item.icon}
				</div>
				<div className="space-y-1">
					<h3 className="font-bold text-primary-200">{`${item.title}`}</h3>
					<p>{`${item.text}`}</p>
				</div>
			</div> */}
		</>
	);
}

const gridList = [
	{
		image: "/forex.jpg",
		icon: <BiCandles />,
		title: "Forex",
		text: "We specialize in locating and recovering unclaimed funds, including forgotten bank accounts, uncashed checks, and more.",
	},
	{
		image: "/binary.webp",
		icon: <FaChartLine />,
		title: "Binary Option",
		text: "Let us help you track down lost or dormant financial accounts, such as savings accounts, retirement funds, and investment accounts.",
	},
	{
		image: "/romance.webp",
		icon: <FaKissWinkHeart />,
		title: "Romance Scam",
		text: "Have you lost track of valuable property? Our team can assist in recovering lost or abandoned property, including real estate, vehicles, and personal belongings.",
	},
	{
		image: "/invest.jpeg",
		icon: <GrGrow />,
		title: "Investment Scam",
		text: "Lost your digital currency? Our experts will help you find and retrieve your crypto holdings, whether it's Bitcoin, Ethereum, or any other digital coins.",
	},
	{
		image: "/crypto.jpeg",
		icon: <FaBitcoinSign />,
		title: "Cryptocurrency Scam",
		text: "Lost your digital currency? Our experts will help you find and retrieve your crypto holdings, whether it's Bitcoin, Ethereum, or any other digital coins.",
	},
	{
		image: "/hack.webp",
		icon: <SiHackaday />,
		title: "Hacking & Blackmail",
		text: "Lost your digital currency? Our experts will help you find and retrieve your crypto holdings, whether it's Bitcoin, Ethereum, or any other digital coins.",
	},
];
