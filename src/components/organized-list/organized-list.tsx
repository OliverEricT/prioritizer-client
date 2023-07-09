const items = [
	{id: 0, title: "Test", description: "", completed: false, priority: 0, },
	{id: 1, title: "hello", description: "", completed: false, priority: 1, },
	{id: 2, title: "kim", description: "", completed: false, priority: 2, }
]

export default function OrganizedList() {
	const itemRows = items.map(item => {
		return (
			<li key={item.id}>
				<label>{item.priority + 1}</label>
				<label>{item.title}</label>
			</li>
		)
	});

	return (
		<div>
			<ol>{itemRows}</ol>
		</div>
	)
}