"use client";
import React, { useEffect } from "react";
import { IoFlash } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import { SendMail, SendSms, VisitUs } from "../../../public/page";
import { IoMdMailUnread } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { PageLayout } from "../layout/pageLayout";
import SubHeader from "../layout/subHeader";
import FormInput from "../components/contact/FormInput";
import Link from "next/link";

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="contact-bg h-[20vh] lg:h-[40vh] bg-primary-900 w-full flex items-center justify-center">
				<PageLayout>
					<div className="w-full space-y-2">
						<h2 className="text-white text-center text-3xl font-bold">
							Talk to our support team
						</h2>
						<div className="w-full flex items-center justify-center">
							<p className="text-center text-sm text-gray-300 w-full lg:w-[60%]">
								Contact us to recover the password or seed phrase to your locked
								crypto wallet. Our friendly team would love to hear from you.
							</p>
						</div>
						<div className="w-full flex items-center justify-center">
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
												href="/contact-us"
												className="ms-1 text-sm font-medium text-gray-400 hover:text-white md:ms-2 ">
												Contact
											</Link>
										</div>
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</PageLayout>
			</div>

			<PageLayout>
				<div className="py-20 space-y-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div className="space-y-5">
							<SubHeader>Fill our Online Form</SubHeader>
							{displayList.map((item, index) => {
								return (
									<div key={index} className="space-y-2">
										<div className="text-3xl text-primary-900">{item.icon}</div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								);
							})}
						</div>
						<FormInput />
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
						<div className="relative border border-gray-800 border-opacity-20 hover:border-none hover:shadow-xl cursor-pointer rounded-lg">
							<Image
								src={SendMail}
								alt=""
								className="w-full h-[25vh] object-cover rounded-tl-lg rounded-tr-lg "
								quality={100}
								width={370}
								height={226}
							/>
							<div className="h-[25vh] w-full flex flex-col items-center justify-center">
								<h3>Send Us Mail</h3>
								<a href="mailto:support@digitalassetrescue.net">
									support@digitalassetrescue.net
								</a>
							</div>

							<div className="absolute top-[43%] left-[40%] bg-primary-500 w-16 h-16 flex items-center justify-center rounded-lg">
								<IoMdMailUnread className="text-white text-2xl" />
							</div>
						</div>
						<div className="relative border border-gray-800 border-opacity-20 hover:border-none hover:shadow-xl cursor-pointer rounded-lg">
							<Image
								src={SendSms}
								alt=""
								className="w-full h-[25vh] object-cover rounded-tl-lg rounded-tr-lg"
								quality={100}
							/>
							<div className="h-[25vh] w-full flex flex-col items-center justify-center">
								<h3>Send Us Sms Anytime</h3>
								<a href="sms:+14182218202">+1 (418) 221 8202</a>
							</div>

							<div className="absolute top-[43%] left-[40%] bg-primary-500 w-16 h-16 flex items-center justify-center rounded-lg">
								<MdSms className="text-white text-2xl" />
							</div>
						</div>
						<div className="relative border border-gray-800 border-opacity-20 hover:border-none hover:shadow-xl cursor-pointer rounded-lg">
							<Image
								src={VisitUs}
								alt=""
								className="w-full h-[25vh] object-cover rounded-tl-lg rounded-tr-lg"
								quality={100}
							/>
							<div className="h-[25vh] w-full flex flex-col items-center justify-center">
								<h3>About Us</h3>
								<a href="/about-us">Click here to read more</a>
							</div>

							<div className="absolute top-[43%] left-[40%] bg-primary-500 w-16 h-16 flex items-center justify-center rounded-lg">
								<FaMapLocationDot className="text-white text-2xl" />
							</div>
						</div>
					</div>
				</div>
			</PageLayout>
		</>
	);
}

export default Contact;

const displayList = [
	{
		title: "Fast and easy",
		text: "Fill out our online form and tell us about your situation. We'll get back to you as soon as possible.",
		icon: <IoFlash />,
	},
	{
		title: "Secure and confidential",
		text: "Your information is encrypted and protected.",
		icon: <GrSecure />,
	},
	{
		title: "24/7 access",
		text: "Submit your request at any time, regardless of your location.",
		icon: <BiSupport />,
	},
];
