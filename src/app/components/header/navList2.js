
export function NavList2({ item }) {
	return (
		<li className="flex items-center gap-2 text-white text-xs">
			{item.text && item.text}
			{item.icon && (
				<div className="flex text-sm lg:text-lg space-x-3">
					{item.icon.map((social, index) => {
						return (
							<a href={social.url} target="_blank" key={index}>
								{social.icon}
							</a>
						);
					})}
				</div>
			)}
		</li>
	);
}
