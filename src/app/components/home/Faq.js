"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { PageLayout } from "@/app/layout/pageLayout";

function Faq() {
	return (
		<div className=" bg-primary-200 py-20">
			<PageLayout>
				<div className="relative z-[3] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-content-center">
					<div>
						<h2 data-aos="fade-up" className="text-white">
							Frequently asked questions
						</h2>
						<p data-aos="fade-up" className="text-white">
							Can&apos;t find the answer you&apos;re looking for?{" "}
							<Link href="/contact-us" className="text-primary-300">
								Contact Us
							</Link>
						</p>
					</div>
					<div className="space-y-3">
						{faqList.map((item, index) => {
							return (
								<ControlledAccordions
									key={index}
									item={item}
									num={`panel${index + 1}`}
								/>
							);
						})}
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Faq;

function ControlledAccordions({ item, num }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				data-aos="fade-up"
				expanded={expanded === `${num}`}
				onChange={handleChange(num)}>
				<AccordionSummary
					expandIcon={<IoIosArrowDown />}
					aria-controls={`${num}bh-content`}
					id={`${num}bh-header`}>
					<h3 className="text-base">{item.title}</h3>
				</AccordionSummary>
				<AccordionDetails>
					<p className="text-sm">{item.text}</p>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

const faqList = [
	{
		title: "What is Digital Asset Rescue?",
		text: "Digital Asset Rescue is a specialised service provider that offers a combination of technical expertise and legal resources to help individuals and businesses recover lost, stolen, or inaccessible cryptocurrencies and assets. Our team works diligently to trace and recover stolen assets from hacked wallets or scam activities, restore access to lost wallets, and recover funds that were sent to the wrong address.",
	},
	{
		title:
			"Is it possible to recover cryptocurrency lost or stolen due to a scam or fraud?",
		text: "Yes, in many cases it is possible to recover cryptocurrency lost or stolen due to a scam or fraud. Our team has extensive experience in dealing with these types of situations and can help you navigate the process of recovering your assets. We will work with you to document the details of the scam or fraud and gather any necessary evidence to support your case.",
	},
	{
		title:
			"How long does it typically take to recover lost or stolen cryptocurrency?",
		text: "The amount of time it takes to recover lost or stolen cryptocurrency can vary depending on the specific circumstances of your case, however, our team will be able to recover your assets within a few days. Rest assured that our team is committed to working tirelessly on your behalf to get your assets back as quickly as possible.",
	},
	{
		title: "Will my information and assets be kept confidential?",
		text: "At Digital Asset Rescue, we understand the importance of privacy and security when it comes to assets. We take all necessary precautions to protect your personal and financial information, and our team is composed of experienced professionals who are dedicated to providing you with the highest level of service and support. Your information and assets will be kept strictly confidential throughout the recovery process.",
	},
];
