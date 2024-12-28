"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosArrowDown } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { PageLayout } from "../layout/pageLayout";
import { CustomBtn } from "../utils/customBtn";
import Link from "next/link";

function Page() {
	const [expanded, setExpanded] = React.useState(false);
	const router = useRouter();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div>
			<div className="contact-bg h-[20vh] lg:h-[40vh] bg-primary-900 w-full flex items-center justify-center">
				<PageLayout>
					<div className="w-full space-y-2">
						<h2 className="text-white text-center text-3xl font-bold">
							Thank You For Choosing Digital Asset Rescue
						</h2>
						<div className="w-full flex items-center justify-center">
							<p className="text-center text-sm text-gray-300 w-full lg:w-[60%]"></p>
						</div>
					</div>
				</PageLayout>
			</div>

			<PageLayout>
				<div className="py-20 space-y-4 w-full max-w-xl mx-auto">
					<h3 className="text-center">
						A member of our team will reach <br /> out to you soon
					</h3>
					<p className="text-center ">
						You are well on your way to recovering your assets. We can&apos;t
						wait to help. Follow the instructions on this page to get the most
						out of the time you spend working with us.
					</p>

					<div className="pt-20 pb-10 w-full">
						<div className="space-y-3 w-full max-w-xl mx-auto">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={handleChange("panel1")}>
								<AccordionSummary
									expandIcon={<IoIosArrowDown />}
									aria-controls="panel1bh-content"
									id="panel1bh-header">
									<h3 className="text-lg">Check your inbox</h3>
								</AccordionSummary>
								<AccordionDetails>
									<div className="space-y-3 text-sm">
										<p>
											The first thing you should do is check your inbox as you
											should have received a welcome email from{" "}
											<a
												href="mailto:support@digitalassetrescue.net"
												className="text-primary-900">
												support@digitalassetrescue.net
											</a>
											. This email is to confirm that your help ticket has been
											submitted and share some information about our process
											with you prior to a team member reaching out.
										</p>
										<p>
											The Second thing you should do is add{" "}
											<a
												href="mailto:support@digitalassetrescue.net"
												className="text-primary-900">
												support@digitalassetrescue.net
											</a>{" "}
											to your contacts list to ensure proper email delivery (
											ie. to ensure no emails end up in spam).
										</p>
									</div>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}>
								<AccordionSummary
									expandIcon={<IoIosArrowDown />}
									aria-controls="panel1bh-content"
									id="panel1bh-header">
									<h3 className="text-base">Information availability</h3>
								</AccordionSummary>
								<AccordionDetails>
									<div className="space-y-3 text-sm">
										<p>
											We require essential details such as the account or asset
											in question, relevant transaction history/ID and any
											available supporting documentation. The more information
											you provide, the smoother the recovery process will be.
										</p>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
					</div>

					<div className="w-full flex items-center justify-center">
						<Link href="/">
							<CustomBtn full={false}>
								<IoHome /> Go Home
							</CustomBtn>
						</Link>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Page;

const faqList = [
	{
		title: "Check your inbox",
		text: "The first thing you should do is check your inbox as you should have received a welcome email from support@digitalassetrescue.net. This email is to confirm that your help ticket has been submitted and share some information about our process with you prior to a team member reaching out. ",
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
