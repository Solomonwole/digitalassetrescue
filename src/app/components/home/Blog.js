"use client";
import React, { useEffect, useState } from "react";
import {
	BlogImage,
	Logo,
	ServiceLine,
	ServiceLine2,
} from "../../../../public/page";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { PageLayout } from "@/app/layout/pageLayout";
import SubHeader from "@/app/layout/subHeader";

export const baseUrl = "https://parseapi.back4app.com";
export const APP_ID = "NhmhTwYHftG3qvkOyeTqfcbMOPp46jMBQ8tNWvC7";
export const REST_KEY = "bi1b2FLrwO5iMoQ1VTT3QEf9RjGXU7KPGqokuxjx";

function Blog() {
	const [blogContents, setBlogContents] = useState([]);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			let config = {
				method: "get",
				maxBodyLength: Infinity,
				url: `${baseUrl}/classes/ReBlog`,
				headers: {
					"X-Parse-Application-Id": APP_ID,
					"X-Parse-REST-API-Key": REST_KEY,
				},
				params: {
					order: "createdAt",
				},
			};

			axios
				.request(config)
				.then((response) => {
					const res = response.data.results;
					// console.log(response.data.results);
					setBlogContents(res);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchBlogPosts();
	}, []);
	return (
		<div className="relative py-20">
			<Image
				src={ServiceLine}
				alt=""
				className="absolute top-0 left-0 z-[1] saturate-0"
			/>
			<Image
				src={ServiceLine2}
				alt=""
				className="absolute right-0 top-[50%] z-[1] saturate-0"
			/>

			<PageLayout>
				<div className="relative z-[2] space-y-12">
					<div className="w-full flex flex-col items-center justify-center gap-3">
						<SubHeader>Latest news</SubHeader>
						<h2 data-aos="fade-up" className="text-center">Digital Asset Rescue Latest news</h2>
						<div className="w-full lg:w-[50%]">
							<p data-aos="fade-up" className="text-center">
								Dive into the Heart of Our Blog for Engaging Content and
								Valuable Insights
							</p>
						</div>
					</div>

					<div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-10">
						{blogContents.slice(0, 3).map((item, index) => (
							<BlogTemplate key={index} item={item} />
						))}
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Blog;

export function BlogTemplate({ item }) {
	const formattedTitle = item?.title?.replace(/\s+/g, "-");

	const date = new Date(item?.createdAt);
	const options = { year: "numeric", month: "short", day: "2-digit" };
	const formattedDate = date.toLocaleDateString("en-US", options);
	return (
		<a href={`/blog/${formattedTitle}`}>
			<div className="p-4 bg-white shadow border border-gray-300 rounded-xl">
				<div className="relative w-full h-56">
					<img
						src={item?.image?.url}
						alt=""
						className="rounded-lg w-full h-full object-cover"
						loading="eager"
					/>
					<div className="bg-primary-900 py-2 px-3 flex items-center justify-center absolute bottom-0 right-0 rounded rounded-tr-none text-white gap-2 text-sm">
						<FaCalendarAlt />
						<p>{formattedDate}</p>
					</div>
				</div>
				<div className="flex items-center gap-3 py-5 border-b border-gray-500 border-opacity-10">
					<div className="w-8 h-8 rounded-full bg-primary-900">
						<Image
							src={Logo}
							alt="Digital Asset Rescue"
							className="w-full h-full rounded-full object-cover"
						/>
					</div>

					<p className="text-primary-900 text-sm font-medium">
						<span className="text-gray-400 font-normal">By </span>
						{item?.name}
					</p>
				</div>

				<div className="pt-5 pb-10 space-y-2">
					<h2 className="text-2xl">{`${item?.title?.substring(0, 48)}...`}</h2>
					{/* <p>{`${item.content.substring(0, 25)}...`}</p> */}
					<div
						dangerouslySetInnerHTML={{
							__html: `${item?.content?.substring(0, 150)}...`,
						}}
					/>
				</div>
				<div className="flex items-center gap-2">
					<FaArrowRightLong className="font-bold text-primary-900" />
					<p className="font-bold text-primary-900">Continue Reading</p>
				</div>
			</div>
		</a>
	);
}

// export const blogContents = [
// 	{
// 		title: "Protecting Your Crypto Investments in a Volatile Market",
// 		date: "2024-01-05",
// 		name: "Digital Asset Rescue",
// 		image:
// 			"https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 		viewed: 261,
// 		content:
// 			"<p>The crypto market is known for its volatility, and recent events have only served to highlight this fact. With prices fluctuating wildly, it’s more important than ever to take steps to protect your investments.</p><p><br></p><p><strong>Here are some tips for protecting your crypto investments:</strong></p><p><br></p><p><strong>1. Diversify your portfolio:</strong></p><p>Don’t put all your eggs in one basket. Spread your investments across different cryptocurrencies and asset classes to mitigate risk.</p><p><br></p><p><strong>2. Use a secure wallet:</strong></p><p>Store your crypto assets in a secure wallet, such as a hardware wallet. Hardware wallets are offline devices that are not connected to the internet, making them much less vulnerable to hacking.</p><p><br></p><p><strong>3. Enable two-factor authentication (2FA):</strong></p><p>2FA adds an extra layer of security to your accounts. With 2FA enabled, you will need to enter a code from your phone in addition to your password to log in.</p><p><br></p><p><strong>4. Be wary of scams:</strong></p><p>There are many scams targeting crypto investors. Be careful about clicking on links or opening attachments from unknown senders, and never give out your private keys to anyone.</p><p><br></p><p><strong>5. Keep your software updated:</strong></p><p>Make sure that your software, including your wallet software, is always up to date. This will help to protect you from vulnerabilities that hackers can exploit.</p><p><br></p><p><strong>6. Back up your data:</strong></p><p>Always back up your data, including your wallet’s seed phrase. This will allow you to recover your funds if you lose your wallet or device.</p><p><br></p><p><strong>7. Consider using a recovery service:</strong></p><p>If you lose your assets due to theft, fraud, or a technical error, a recovery service might be able to help you get them back. Companies like Cyberhelp specialize in retrieving lost or stolen digital assets.</p><p><br></p><p>By following these tips, you can help to protect your crypto investments in a volatile market.</p><p>&nbsp;</p><p><strong>By taking the time to protect your investments, you can give yourself peace of mind and help to ensure that your crypto journey is a successful one.</strong></p>",

// 		comment: [
// 			{
// 				name: "Jane Smith",
// 				emailAddress: "janesm@gmail.com",
// 				date: "APRIL 4, 2024",
// 				message:
// 					"Great article! I've been through a similar situation and this helped me understand the process.",
// 			},
// 			{
// 				name: "Jane Smith",
// 				emailAddress: "janesm@gmail.com",
// 				date: "APRIL 4, 2024",
// 				message:
// 					"Great article! I've been through a similar situation and this helped me understand the process.",
// 			},
// 			{
// 				name: "Jane Smith",
// 				emailAddress: "janesm@gmail.com",
// 				date: "APRIL 4, 2024",
// 				message:
// 					"Great article! I've been through a similar situation and this helped me understand the process.",
// 			},
// 		],
// 	},
// ];
