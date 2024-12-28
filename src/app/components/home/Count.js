"use client";
import React from "react";
import Image from "next/image";
import { StatLeft, StatRight, StatTop } from "../../../../public/page";
import CountUp from "react-countup";
import { PageLayout } from "@/app/layout/pageLayout";

function Count() {
	return (
		<div className="w-full relative bg-primary-400 py-20">
			<PageLayout>
				<div className="w-full relative z-[2]">
					<div className="space-y-10 text-white">
						<div className="">
							<h2 data-aos="fade-up" className="text-center">
								Some counts that matter
							</h2>
							<p data-aos="fade-up" className="text-center">
								Our achievement in the journey depicted in numbers
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-8 lg:gap-0">
							{countList.map((item, index) => (
								<CountBox key={index} item={item} />
							))}
						</div>
					</div>
				</div>
			</PageLayout>
			{/* <Image src={StatRight} alt="" className="absolute top-0 right-0 z-[1] saturate-0" /> */}
			{/* <Image src={StatLeft} alt="" className="absolute bottom-0 left-0 z-[1] saturate-0" /> */}
			<Image
				src={StatTop}
				alt=""
				className="absolute top-0 left-0 z-[1] saturate-0"
			/>
		</div>
	);
}

export default Count;

function CountBox({ item }) {
	const [startCounting, setStartCounting] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const countSection = document.getElementById("count");
			if (countSection) {
				const rect = countSection.getBoundingClientRect();
				const windowHeight =
					window.innerHeight || document.documentElement.clientHeight;
				if (rect.top <= windowHeight * 0.75) {
					setStartCounting(true);
					window.removeEventListener("scroll", handleScroll);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="flex flex-col items-center gap-3">
			{/* <h2>
				<CountUp end={100} />
				{item.title}
			</h2> */}
			<CountUp
				start={0}
				end={startCounting ? item.count : 0}
				duration={2.75}
				separator=","
				decimals={0}
				decimal=","
				prefix={item.prefix}
				suffix={item.suffix}
				onEnd={() => {}}
				onStart={() => {}}>
				{({ countUpRef }) => (
					<div>
						<h2
							data-aos="fade-up"
							className="text-white"
							id="count"
							ref={countUpRef}
						/>
					</div>
				)}
			</CountUp>
			<p data-aos="fade-up" className="font-semibold text-gray-200">
				{item.text}
			</p>
		</div>
	);
}

const countList = [
	{
		prefix: "",
		suffix: "%",
		count: 99,
		text: "Success Rate",
	},
	{
		prefix: "",
		count: 2548932,
		text: "Clients",
	},
	{
		prefix: "$",
		suffix: "B",
		count: 5,
		text: "Worth of Assets Recovered",
	},
	{
		prefix: "",
		suffix: "",
		count: 10,
		text: "Years of Journey",
	},
];
