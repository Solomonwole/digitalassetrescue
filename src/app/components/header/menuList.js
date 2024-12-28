export function MenuList({ item }) {
	return (
		<li>
			<a href={item.url}>{item.name}</a>
		</li>
	);
}
