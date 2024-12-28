"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosArrowDown } from "react-icons/io";
import { PageLayout } from "../layout/pageLayout";
import Link from "next/link";

function Faq() {
	return (
		<>
			<div className="faq-bg h-[20vh] lg:h-[40vh] bg-primary-900 w-full flex items-center justify-center">
				<PageLayout>
					<div className="w-full space-y-2">
						<h1 className="text-white text-center text-3xl font-bold">
							Frequently Asked Questions.
						</h1>

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
												href="/faq"
												className="ms-1 text-sm font-medium text-gray-400 hover:text-white md:ms-2 ">
												FAQ
											</Link>
										</div>
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</PageLayout>
			</div>

			<div className="bg-primary-200 py-20">
				<PageLayout>
					<div className="space-y-16">
						<GeneralFaq />
						<CryptoFaq />
					</div>
				</PageLayout>
			</div>
		</>
	);
}

export default Faq;

function GeneralFaq() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="relative z-[3] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-content-center">
			<div>
				<h2 className="text-white">General</h2>
			</div>
			<div className="space-y-3">
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">What is Digital Asset Rescue</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
							Digital Asset Rescue is a leading asset and cryptocurrency recovery
								company specializing in retrieving lost or stolen digital
								assets.
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
						<h3 className="text-lg">
							What kind of assets can you help recover?
						</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<ul>
								<li>
									Lost or stolen cryptocurrencies (Bitcoin, Ethereum, etc.)
								</li>
								<li>Lost funds from exchanges or wallets</li>
								<li>Compromised accounts</li>
								<li>Lost private keys</li>
								<li>Lost data from hard drives or other storage devices</li>
							</ul>
						</div>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">Do you have a success rate?</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								Yes, we have a high success rate in recovering lost or stolen
								assets. Our team of experienced professionals utilizes
								cutting-edge technology and techniques to maximize the chances
								of recovery.
							</p>
						</div>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">What are your fees?</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								Our fees vary depending on the complexity of the case and the
								amount of assets lost. We offer a free consultation to discuss
								your specific case and provide solution.
							</p>
						</div>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel5"}
					onChange={handleChange("panel5")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">
							How long does it take to recover assets?
						</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								The time it takes to recover assets varies depending on the
								case. We will work diligently to recover your assets as quickly
								as possible.
							</p>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
function CryptoFaq() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="relative z-[3] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-content-center">
			<div>
				<h2 className="text-white">Cryptocurrency Recovery</h2>
			</div>
			<div className="space-y-3">
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">
							What kind of cryptocurrencies do you support?
						</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								We support a wide range of cryptocurrencies, including Bitcoin,
								Ethereum, Litecoin, Bitcoin Cash, XRP, USDT(Erc20, Trc20) and
								many others.
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
						<h3 className="text-lg">
							How do I know if my cryptocurrency is lost or stolen?
						</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								If you are unable to access your cryptocurrency or if you
								believe it has been stolen, it is important to contact us
								immediately. Our team of experts can help you determine if your
								assets are lost or stolen and advise you on the best course of
								action.
							</p>
						</div>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}>
					<AccordionSummary
						expandIcon={<IoIosArrowDown />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<h3 className="text-lg">What happens after I submit a case?</h3>
					</AccordionSummary>
					<AccordionDetails>
						<div className="space-y-3 text-sm">
							<p>
								Once you submit a case, one of our recovery specialists will
								review your information and contact you to discuss your case
								further. We will then work with you to gather any necessary
								information and begin the recovery process.
							</p>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
