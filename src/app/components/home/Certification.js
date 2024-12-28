import React from "react";
import Image from "next/image";
import {
	ACFE,
	Blockchain,
	Cali,
	Fali,
	Trace,
	Wad,
} from "../../../../public/page";
import { PageLayout } from "@/app/layout/pageLayout";

function Certification() {
	return (
		<div className="py-20">
			<PageLayout>
				<div className="space-y-10">
					<h2 data-aos="fade-up" className="text-center">Our Certifications</h2>

					<div className="w-full max-w-3xl mx-auto">
						<div className="cert flex items-center gap-5 justify-center flex-wrap">
							{listCert.map((item, index) => (
								<ListCert key={index} item={item} />
							))}
						</div>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default Certification;

function ListCert({ item }) {
	return <Image data-aos="fade-up" src={item} alt="" />;
}

const listCert = [Blockchain, ACFE, Cali, Wad, Fali, Trace];
