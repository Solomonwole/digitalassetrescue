import React from "react";
import { motion } from "framer-motion";
export function CustomBtn({ full, plain, children, ...props }) {
	return (
		<motion.button
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 1.1 }}
			className={`${full ? "w-full" : "px-4"} h-[50px] ${
				plain
					? "bg-primary-300 hover:bg-primary-310 text-primary-600"
					: "bg-gradient-to-br from-primary-200 to-primary-200 text-white"
			} font-bold  rounded-lg flex items-center justify-center gap-2`}
			{...props}>
			{children}
		</motion.button>
	);
}
export function CustomMobileToggler({ full, children, ...props }) {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`w-10 h-10 bg-primary-300 hover:bg-primary-310  text-primary-600 font-bold  rounded-lg flex items-center justify-center gap-2`}
			{...props}>
			{children}
		</motion.button>
	);
}
