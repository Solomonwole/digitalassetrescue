import { PageLayout } from "../components/header/Nav";

function HeaderPage({ title, subtext }) {
	return (
		<div className="contact-bg h-[20vh] lg:h-[40vh] bg-primary-900 w-full flex items-center justify-center">
			<PageLayout>
				<div className="w-full space-y-2">
					<h2 className="text-white text-center text-3xl font-bold">{title}</h2>
					<div className="w-full flex items-center justify-center">
						{subtext && (
							<p className="text-center text-sm text-gray-300 w-full lg:w-[60%]">
								{subtext}
							</p>
						)}
					</div>
				</div>
			</PageLayout>
		</div>
	);
}

export default HeaderPage;
