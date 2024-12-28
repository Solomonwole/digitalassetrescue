import React, { useState } from "react";
import { PageLayout } from "@/app/layout/pageLayout";
import { NavListMobile } from "./navListMobile";
import Image from "next/image";
import { NavList } from "./navList";
import { NavList2 } from "./navList2";
import { MenuList } from "./menuList";
import { CgMenuGridO } from "react-icons/cg";
import { CustomBtn, CustomMobileToggler } from "@/app/utils/customBtn";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { SidebarBg } from "@/app/layout/sidebar";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Logo } from "../../../../public/page";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* <div className="flex bg-primary-500">
				<PageLayout>
					<div className="rounded-bl-full rounded-br-full  w-full pt-3 pb-5 px-5 lg:px-10 flex items-center justify-between gap-4">
						<ul className="space-y-2">
							{navList.map((item, index) => (
								<NavList key={index} item={item} />
							))}
						</ul>
						<ul className="space-y-2 flex flex-col items-end">
							{navList2.map((item, index) => (
								<NavList2 key={index} item={item} />
							))}
						</ul>
					</div>
				</PageLayout>
			</div> */}
			<nav className="bg-primary-600 sticky top-0 py-3 lg:py-4 z-20 border-b border-black border-opacity-10">
				<PageLayout>
					<div className="flex items-center justify-between">
						<div>
							<a href="/">
								<Image
									src={Logo}
									alt="Digital Asset Rescue recovery company"
									className="w-[100%] lg:w-[100%] cursor-pointer"
									width={56}
									height={25}
									loading="lazy"
								/>
								<span className="uppercase font-bold text-white">
									Digital Asset Rescue
								</span>
							</a>
						</div>
						<div className="hidden lg:flex items-center gap-4">
							<ul className="flex text-white gap-4">
								{navMenu.map((item, index) => (
									<MenuList key={index} item={item} />
								))}
							</ul>
							<a href="/contact-us">
								<CustomBtn>Get Free Consulation</CustomBtn>
							</a>
						</div>

						{/* Mobile Menu Toggler  */}
						<div className="lg:hidden">
							<CustomMobileToggler onClick={() => setIsOpen(true)}>
								<CgMenuGridO className="text-2xl text-white" />
							</CustomMobileToggler>

							<SidebarBg showBackground={isOpen} onClose={toggleSidebar}>
								<motion.div
									className={`z-50 h-screen flex lg:hidden flex-col gap-4 overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 bg-white w-60 md:w-64 pb-10 px-3 hide-scroll ${
										isOpen ? "sidebar-open" : "sidebar-closed"
									}`}
									initial={{ x: 300, opacity: 0 }}
									animate={{
										x: isOpen ? 0 : 300,
										opacity: isOpen ? 1 : 0,
									}}
									transition={{ type: "tween" }}>
									<div className="w-full flex items-center justify-end pt-5 pb-5 sticky top-0 z-20">
										<CustomBtn onClick={() => setIsOpen(false)}>
											<AiOutlineClose className="text-xl" />
										</CustomBtn>
									</div>
									<ul className="w-full flex-1 font-heading font-medium space-y-6">
										{navMenu.map((item, index) => (
											// <MenuList key={index} item={item} />
											<li key={index} id="sidebar">
												<a href={item.url}>
													<div className="nav-link w-full py-3.5 px-4 rounded-lg justify-start items-center gap-3 inline-flex">
														{item.name}
													</div>
												</a>
											</li>
										))}
									</ul>
									<hr />
									<ul className="pb-24 md:pb-0 font-heading font-medium space-y-2">
										{navList.map((item, index) => (
											<NavListMobile key={index} item={item} />
										))}
									</ul>
								</motion.div>
							</SidebarBg>
						</div>
					</div>
				</PageLayout>
			</nav>
		</>
	);
}

export default Nav;

export const navList = [
	{
		icon: <IoMdMail />,
		text: "support@digitalassetrescue.net",
	},
	// {
	// 	icon: <FaLocationDot />,
	// 	text: "234, Vancouver, Canada",
	// },
];
const navList2 = [
	{
		text: "",
	},
	{
		icon: [
			{
				icon: <RiInstagramFill />,
				url: "https://instagram.com/reacdigitalassetrescuequirix",
			},
			{
				icon: <FaTelegramPlane />,
				url: "https://t.me/digitalassetrescue_",
			},
			{
				icon: <FaWhatsapp />,
				url: "https://wa.me/+16132169514",
			},
			{
				icon: <FaWhatsapp />,
				url: "https://wa.me/+15154932030",
			},
		],
	},
];

export const navMenu = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About Us",
		url: "/about-us",
	},
	{
		name: "Services",
		url: "/services",
	},
	{
		name: "FAQs",
		url: "/faq",
	},
	{
		name: "Blog",
		url: "/blog",
	},
	{
		name: "Contact",
		url: "/contact-us",
	},
];
