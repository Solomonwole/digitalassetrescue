import Image from "next/image";
import React from "react";
import { ManWoman } from "../../../../public/page";
import SubHeader from "@/app/layout/subHeader";
import { PageLayout } from "@/app/layout/pageLayout";

function Process() {
	return (
		<div className="process-bg h-screen relative pt-20">
			<PageLayout>
				<div className="relative z-[2] w-full lg:w-[50%] space-y-5">
					<div className="space-y-2">
						<SubHeader textWhite>work process</SubHeader>
						<h2 data-aos="fade-up" className="text-white">
							We Emphasize Clients Requirements The Most
						</h2>
					</div>

					<div className="relative px-4">
						<ol className="relative border-s border-dashed border-white">
							<li data-aos="fade-up" className="mb-10 ">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white text-[rgba(44, 183, 112, 1)">
									1
								</span>
								<div className="pl-8 space-y-2">
									<h3 className="text-white">Free Consultation</h3>
									<p className="text-white text-sm">
										We begin by understanding your specific asset recovery needs
										and goals through a detailed consultation.
									</p>
								</div>
							</li>
							<li data-aos="fade-up" className="mb-10 ">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white text-[rgba(44, 183, 112, 1)">
									2
								</span>
								<div className="pl-8 space-y-2">
									<h3 className="text-white">Asset Assessment</h3>
									<p className="text-white text-sm">
										Our team conducts a through assessment to identify any
										potential sources of lost assets and develop a customized
										recovery strategy.
									</p>
								</div>
							</li>
							<li data-aos="fade-up" className="">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white text-[rgba(44, 183, 112, 1)">
									3
								</span>
								<div className="pl-8 space-y-2">
									<h3 className="text-white">Resolution and Closure</h3>
									<p className="text-white text-sm">
										Once your assets are successfully recovered, we ensure a
										smooth resolution process providing you with the closure and
										peace of mind you deserve.
									</p>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</PageLayout>

			<Image
				data-aos="fade-left"
				src="/char.png"
				alt=""
				className="hidden lg:flex absolute bottom-0 right-28 z-[1]"
				width={379}
				height={773}
			/>
		</div>
	);
}

export default Process;
