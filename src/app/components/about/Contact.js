import { PageLayout } from "@/app/layout/pageLayout";
import { CustomBtn } from "@/app/utils/customBtn";
import React from "react";

function Contact() {
	return (
		<div className="bg-primary-500 bg-opacity-95 py-10">
			<PageLayout>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<div className="md:col-span-2 space-y-3">
						<h3 className="text-white text-xl">Contact Us Today</h3>
						<p className="text-gray-200 text-sm font-normal lg:w-[80%]">
							If you have lost funds, stolen assets, or a compromised account,
							please contact us today for a free consultation. We are here to
							help you recover your losses and protect your digital assets.
						</p>
					</div>
					<div className="md:col-span-1">
						<a href="/contact-us">
							<CustomBtn full={true}>Get Free Consultation</CustomBtn>
						</a>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Contact;
