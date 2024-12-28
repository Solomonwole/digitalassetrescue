import Image from "next/image";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Consult from "./components/home/Consult";
import Process from "./components/home/Process";
import Count from "./components/home/Count";
import Testimonial from "./components/home/Testimonial";
import Blog from "./components/home/Blog";
import Certification from "./components/home/Certification";
import Faq from "./components/home/Faq";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<Consult />
			<Services />
			<Count />
			<Testimonial />
			<Process />
			<Blog />
			<Certification />
			<Faq />
		</main>
	);
}
