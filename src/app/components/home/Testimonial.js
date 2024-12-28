"use client";
import React from "react";
import Image from "next/image";
import {
	Brad,
	Face1,
	Gary,
	Google,
	Judith,
	Robert,
	Thumbs,
} from "../../../../public/page";
import {
	HiOutlineArrowLongLeft,
	HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { Rating } from "@mui/material";
import { PageLayout } from "@/app/layout/pageLayout";
import SubHeader from "@/app/layout/subHeader";

function Testimonial() {
	const customPrevButton = (
		<button className="swiper-button-prev border border-white rounded-full w-8 h-8 flex items-center justify-center text-white">
			<HiOutlineArrowLongLeft />
		</button>
	);

	const customNextButton = (
		<button className="swiper-button-next border border-white rounded-full w-8 h-8 flex items-center justify-center text-white">
			<HiOutlineArrowLongRight />
		</button>
	);
	return (
		<div className="relative bg-primary-500 py-20">
			<PageLayout>
				<div className="relative z-[2]">
					<div className="space-y-3 border-b border-white pb-10 mb-10 border-opacity-10">
						<SubHeader textWhite>TESTIMONIAL</SubHeader>
						<div className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center items-center gap-6 lg:gap-0">
							<h2 data-aos="fade-up" className="text-white">
								Hear Reviews From Our Amazing Clients
							</h2>
							<p data-aos="fade-up" className="text-white">
								Our clients ratings from different rating platforms
							</p>
							<div
								data-aos="fade-up"
								className="relative bg-primary-900 py-4 px-10 rounded-lg text-white space-y-2">
								<p>AverageRating</p>
								<div className="flex ">
									<p className="font-bold text-xl">4.5</p>
									<Stars num={4.5} />
								</div>
								<Image
									src={Thumbs}
									alt=""
									className="absolute -bottom-2 -right-4 w-[54px] h-[54px]"
								/>
							</div>
						</div>
					</div>

					<div className="relative ">
						<div className="pb-5">
							<Swiper
								slidesPerView={1}
								spaceBetween={16}
								breakpoints={{
									768: {
										slidesPerView: 3,
									},
								}}
								loop={true}
								grabCursor={true}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								modules={[Navigation, Autoplay]}
								navigation={{
									prevEl: ".swiper-button-prev",
									nextEl: ".swiper-button-next",
								}}
								// navigation={true}
								className="mySwiper">
								{testiy.map((item, index) => (
									<SwiperSlide key={index}>
										<Testimony2 item={item} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
							{testiy.map((item, index) => (
								<Testimony2 key={index} item={item} />
							))}
						</div> */}
						<div className="absolute right-0 z-[2]">
							<div data-aos="fade-left" className="flex gap-3 items-center">
								{customPrevButton}
								{customNextButton}
							</div>
						</div>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Testimonial;

function Stars({ num }) {
	return (
		<div className="flex items-center">
			<Rating
				name="half-rating-read"
				defaultValue={num}
				precision={0.5}
				readOnly
			/>
		</div>
	);
}

function Testimony({ item }) {
	return (
		<div
			data-aos="fade-up"
			className="w-full grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-12 lg:gap-0">
			<div className="relative w-96 h-[473px] bg-zinc-300 bg-opacity-10">
				<Image
					src={item.image}
					alt=""
					className="absolute -bottom-1 -right-3 h-[450px] w-[384px] object-cover"
					loading="lazy"
				/>
			</div>
			<div className="space-y-5">
				<div className="space-y-3">
					<Stars />
					<p className="text-white italic font-light">
						&apos;&apos;{item.text}&apos;&apos;
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
					<div className="space-y-2 w-full">
						<h4 className="font-bold text-lg text-white">{item.name}</h4>
						<p className="text-gray-400 text-sm ">{item.company}</p>
					</div>

					{/* <div className="flex items-center justify-end  gap-3 w-full">
						{customPrevButton}
						{customNextButton}
					</div> */}
				</div>
			</div>
		</div>
	);
}
function Testimony2({ item }) {
	return (
		<div className="bg-white shadow rounded-lg p-4 space-y-2 h-[210px]">
			<div className="w-full flex gap-3 items-start">
				<div>
					<div className="w-10 h-10 bg-zinc-300 bg-opacity-10 rounded-full">
						<Image
							src={item.image}
							alt=""
							className="w-full h-full object-cover rounded-full"
							loading="lazy"
							width={100}
							height={100}
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium text-black">{item.name}</p>
							<Stars num={item.star} />
						</div>
						<Image src={Google} alt="" className="w-8 h-8" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-sm">{item.text}</p>
			</div>
		</div>
	);
}

const testiy = [
	{
		image: Robert,
		name: "Larissa Farber",
		text: "I can remember when I initially contacted Digital Asset Rescue I was skeptical I thought they were like other recovery companies but to my surprise they didn’t charge any upfront fees. Although I had a few annoying delays but they helped me recover my lost crypto wallet and coins, for which I am forever grateful.",
		star: 4.5,
	},
	{
		image: Judith,
		name: "Lada Bilozor",
		text: "I was devastated when I was scammed out of my cryptocurrency, but Digital Asset Rescue was there to help. Their dedication and hard work led to the recovery of my stolen funds, and I couldn't be more grateful. I highly recommend their services to anyone who has been the victim of a scam.",
		star: 5,
	},
	{
		image: Face1,
		name: "Luke Miller",
		text: "This was a fantastic experience the customer service is unmatched and their professionalism was top-notch, but I didn’t like the time it took to get my case resolved but highly recommend them to anyone who has been scammed. Thank you for you Digital Asset Rescue",
		star: 3.5,
	},
	{
		image: Gary,
		name: "Willy Méndez",
		text: "I thought all was lost when my Bitcoin was stolen, but Digital Asset Rescue provided a glimmer of hope. Their tireless efforts led to the recovery of my stolen funds, and I can't thank them enough. I highly recommend Digital Asset Rescue to anyone who needs their services.",
		star: 4.5,
	},
	{
		image: Brad,
		name: "Leandro Queiroz",
		text: "I was scammed out of my cryptocurrency and didn't know where to turn, but Digital Asset Rescue was there to help. They showed great empathy and professionalism, and their hard work led to the recovery of my stolen funds. I highly recommend their services to anyone who has been the victim of a crypto scam. Thank you, Digital Asset Rescue!",
		star: 5,
	},
];
