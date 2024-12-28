import { motion } from "framer-motion";

export function SidebarBg({ showBackground, onClose, children }) {
	return (
		<>
			{showBackground && (
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: showBackground ? 0 : -10,
						opacity: showBackground ? 1 : 0,
					}}
					className="z-40 fixed inset-0 w-full lg:hidden h-screen bg-black bg-opacity-40"
					onClick={onClose}>
					{children}
				</motion.div>
			)}
		</>
	);
}
