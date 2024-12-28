import React from "react";

function SubHeader({ children, textWhite }) {
	return (
		<>
			{/* <div className="px-4 py-2 bg-gradient-to-br from-primary-100 to-primary-500 rounded-[100px] justify-center items-start inline-flex">
				<div className="text-center text-white text-xs font-semibold leading-tight uppercase">
					{children}
				</div>
			</div> */}
			<div className="px-4 py-2 bg-primary-200 bg-opacity-30 rounded-[100px] justify-center items-center gap-2 inline-flex">
				<div className="h-2 w-2 bg-primary-200 rounded-full" />
				<div
					className={`text-center ${
						textWhite ? "text-gray-300" : "text-primary-200"
					} text-xs font-bold leading-tight uppercase`}>
					{children}
				</div>
			</div>
		</>
	);
}

export default SubHeader;
