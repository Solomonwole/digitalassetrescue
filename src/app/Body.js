"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Preloader } from "../../public/page";
import Nav from "./components/header/nav";
import Footer from "./components/footer/footer";
import "aos/dist/aos.css";
import AOS from "aos";

function Body({ children }) {
	const [preload, setPreload] = useState(true);

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			setPreload(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{preload ? (
				<div
					className="bg-primary-500"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}>
					<span className="loader"></span>
					{/* <Image src={Preloader} alt="" quality={100} /> */}
				</div>
			) : (
				<>
					<Nav />
					{children}
					<Footer />
				</>
			)}
		</div>
	);
}

export default Body;
