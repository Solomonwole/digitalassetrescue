export function NavList({ item }) {
	return (
		<li className="flex items-center gap-2 text-white text-xs">
			{item.icon}
			<a href={`mailto:${item.text}`}>{item.text}</a>
		</li>
	);
}