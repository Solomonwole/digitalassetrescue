
export function NavListMobile({ item }) {
	return (
		<li className="flex items-center gap-2 text-primary-900 text-xs">
			{item.icon}
			{item.text}
		</li>
	);
}