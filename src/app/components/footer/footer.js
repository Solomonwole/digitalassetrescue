"use client";
import React, { useRef, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import {
	FaFacebookF,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTelegramPlane,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { PageLayout } from "@/app/layout/pageLayout";
import { CustomBtn } from "@/app/utils/customBtn";
import { Logo, Sectigo } from "../../../../public/page";
import { navMenu } from "../header/nav";
import { MdOutlineTextsms } from "react-icons/md";

function Footer() {
	const [emailAdress, setEmailAdress] = useState("");
	const Ref = useRef();
	const [loading, setLoading] = useState(false);

	const sendEmailSubscription = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_l9w1vku",
				"template_f63rg5k",
				Ref.current,
				"etBkiZ_VkvfBYREab"
			)
			.then(
				(result) => {
					console.log(result);
					setLoading(false);
					alert("Subscribed Successfully");
				},
				(error) => {
					console.log(error);
					setLoading(false);
					alert(error.message);
				}
			);
	};
	return (
		<>
			<div className="relative z-[2] bg-primary-500">
				<PageLayout>
					<div className="py-10">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
							<div className="space-y-3 lg:col-span-2">
								<div>
									<a href="/">
										<Image
											src={Logo}
											alt="Digital Asset Rescue"
											className="w-[25%] cursor-pointer"
											width={56}
											height={25}
										/>
										<span className="uppercase font-bold text-lg text-white">
											Digital Asset Rescue
										</span>
									</a>
								</div>
								<p className="text-gray-400">
									Digital Asset Rescue is a leading asset recovery company
									dedicated to helping individuals and businesses reclaim their
									lost assets. With years of experience in the industry, our
									team of experts is committed to providing exceptional service
									and delivering results.
								</p>
								<form
									id="newsletter"
									ref={Ref}
									onSubmit={sendEmailSubscription}
									className="space-y-2">
									<p className="text-primary-500 font-medium text-lg capitalize">
										Subscribe to our newsletter
									</p>
									<CustomInput
										htmlFor="emailAddress"
										full={true}
										name="emailAddress"
										type="email"
										value={emailAdress}
										onChange={(e) => setEmailAdress(e.target.value)}
										placeholder="Email Address"
										required
									/>
									{!loading ? (
										<CustomBtn type="submit" full={true}>
											Subscribe
										</CustomBtn>
									) : (
										<CustomBtn type="button" full={true}>
											Sending...
										</CustomBtn>
									)}
								</form>
								<div className="py-4">
									<Image src={Sectigo} alt="" />
								</div>
							</div>
							<div className="space-y-3">
								<Title text="Contact" />
								<ContactList />
							</div>
							<div className="space-y-3">
								<Title text="Our Services" />
								{ourServices.map((item, index) => (
									<div key={index}>
										<p className="text-gray-300">{item}</p>
									</div>
								))}
							</div>
							<div className="space-y-3">
								<Title text="Links" />
								{navMenu.map((item, index) => (
									<div key={index}>
										<Link href={item.url}>
											<p className="text-gray-300">{item.name}</p>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</PageLayout>
			</div>

			<div className="bg-primary-600 pt-5 pb-10 border-t border-white border-opacity-50">
				<PageLayout>
					<div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-5">
						<p className="text-center lg:text-left font-bold text-sm text-white">
							&copy; 2014 - {new Date().getFullYear()} Digital Asset Rescue. All
							rights reserved.
						</p>

						<div className="flex gap-3 items-center justify-center">
							{socialLinks.map((item, index) => (
								<Social key={index} item={item} />
							))}
						</div>
					</div>
				</PageLayout>
			</div>
		</>
	);
}

export default Footer;

function Social({ item }) {
	return (
		<a href={item.url}>
			<div className="text-xl p-3 rounded-full bg-primary-200 bg-opacity-45 text-white flex items-center justify-center">
				{item.icon}
			</div>
		</a>
	);
}

const ourServices = [
	"Forex",
	"Binary Option",
	"Romance Scam",
	"Investment Scam",
	"Cryptocurrency Scam",
	"Hacking & Blackmail",
];

export function CustomInput({ htmlFor, full, error, ...props }) {
	return (
		<div className="space-y-2">
			<input
				className={`${
					full ? "w-full" : ""
				} rounded-lg placeholder:text-placeholder border ${
					error ? "border-error-800" : "border-neutral-300 border-opacity-15"
				} bg-white bg-opacity-15 px-2 py-3 right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis`}
				{...props}
			/>
		</div>
	);
}
function Title({ text }) {
	return (
		<div className="space-y-1">
			<h4 className="text-white font-bold text-lg">{text}</h4>
			<div className="border-b-4 border-primary-900 w-10 rounded" />
		</div>
	);
}
const socialLinks = [
	{
		icon: <FaFacebookF />,
		url: "https://facebook.com/digitalassetrescue_",
	},
	{
		icon: <AiFillInstagram />,
		url: "https://instagram.com/digitalassetrescue_",
	},
	{
		icon: <FaWhatsapp />,
		url: "https://wa.me/+14182218202",
	},
	{
		icon: <FaWhatsapp />,
		url: "https://wa.me/+16132162258",
	},
	{
		icon: <FaTelegramPlane />,
		url: "https://t.me/digitalassetrescue",
	},
];
function ContactList() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-3 pb-4 border-b border-white border-opacity-10">
				<div>
					<div className="w-8 h-8 border-2 border-primary-300 rounded-full flex items-center justify-center text-primary-300">
						<FaEnvelope />
					</div>
				</div>
				<div>
					<a
						href="mailto:support@digitalassetrescue.net"
						className="text-white font-medium">
						support@digitalassetrescue.net
					</a>
				</div>
			</div>

			<div className="flex items-center gap-3 pb-4 border-b border-white border-opacity-10">
				<div>
					<div className="w-8 h-8 border-2 border-primary-300 rounded-full flex items-center justify-center text-primary-300">
						<MdOutlineTextsms />
					</div>
				</div>
				<div>
					<a href="sms:+14182218202" className="text-white font-medium">
						+1 (418) 221 8202
					</a>
				</div>
			</div>

			<div className="flex items-center gap-3 pb-4 border-b border-white border-opacity-10">
				<div>
					<div className="w-8 h-8 border-2 border-primary-300 rounded-full flex items-center justify-center text-primary-300">
						<FaWhatsapp />
					</div>
				</div>
				<div>
					<a
						href="https://wa.me/+14182218202"
						className="text-white font-medium">
						+1 (418) 221 8202
					</a>
				</div>
			</div>

			<div className="flex items-center gap-3 pb-4 border-b border-white border-opacity-10">
				<div>
					<div className="w-8 h-8 border-2 border-primary-300 rounded-full flex items-center justify-center text-primary-300">
						<FaWhatsapp />
					</div>
				</div>
				<div>
					<a
						href="https://wa.me/+16132162258"
						className="text-white font-medium">
						+1 (613) 216 2258
					</a>
				</div>
			</div>

			<div className="flex items-center gap-3 pb-4 border-b border-white border-opacity-10">
				<div>
					<div className="w-8 h-8 border-2 border-primary-300 rounded-full flex items-center justify-center text-primary-300">
						<FaTelegramPlane />
					</div>
				</div>
				<div>
					<a href="https://t.me/digitalassetrescue" className="text-white font-medium">
						+1 (480) 500 6302
					</a>
				</div>
			</div>

			{/* <div className="flex items-center gap-3 pb-4 ">
				<div>
					<div className="w-8 h-8 border-2 border-primary-500 rounded-full flex items-center justify-center text-primary-500">
						<FaMapMarkerAlt />
					</div>
				</div>

				<div>
					<p className="text-white font-medium">234, Vancouver, Canada</p>
				</div>
			</div> */}
		</div>
	);
}
