import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const items = [
	{id: 0, title: "Test", description: "lorem ipsum", completed: false, priority: 0, },
	{id: 1, title: "hello", description: "solar dolat", completed: false, priority: 1, },
	{id: 2, title: "kim", description: "gibberishum giberay", completed: false, priority: 2, },
	{id: 3, title: "eric", description: "still reactive", completed: false, priority: 3, }
]

export default function OrganizedList() {
	const itemRows = items.map(item => {
		return (
			<li key={item.id}>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{item.title}
						</Typography>
						<Typography variant="body2">
							{item.description}
						</Typography>
					</CardContent>
				</Card>
			</li>
		)
	});

	return (
		<div>
			<ol>{itemRows}</ol>
		</div>
	)
}