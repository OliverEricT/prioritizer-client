import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { ListItem } from '../../models/list-item'

import { DraggableCard } from '../draggable-card'
import { NewItemForm } from '../new-item-form'

import './drag-container.css'

const items: ListItem[] = [
	{id: 0, title: "Test", img: "", description: "lorem ipsum", completed: false, priority: 0, },
	{id: 1, title: "hello", description: "solar dolat", completed: false, priority: 1, },
	{id: 2, title: "kim", description: "gibberishum giberay", completed: false, priority: 2, },
	{id: 3, title: "eric", description: "still reactive", completed: false, priority: 3, }
]

const style = {
  width: 400,
}

export const DragContainer = () => {
	const [ cards, setCards ] = useState(items);
	const [ history, setHistory ] = useState([cards]);
	const [ currentStep, setCurrentStep ] = useState(0);

	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		const newCards = [];
		setCards((prevCards: ListItem[]) =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex]],
				],
			}),
		)
		console.log(cards);
		const nextHistory = [...history.slice(0, currentStep + 1), cards];
		setHistory(nextHistory);
		setCurrentStep(nextHistory.length - 1);
	}, []);

	const renderCard = useCallback(
		(card: ListItem, index: number) => {
			return (
				<DraggableCard
					key={card.id}
					index={index}
					id={card.id}
					item={card}
					moveCard={moveCard}
				/>
			)
		},
		[],
	);

	const handleSubmit = (item: ListItem) => {
		if (item.title === '' || item.description === ''){
			return;
		}
		item.id = cards.length;
		console.log(item);
		setCards([...cards, item]);
	}

	return (
		<div className="float-container">
			<div className="float-child" style={style}>
				{cards.map((card, i) => renderCard(card, i))}
				<input type="button" className="btn btn-primary" disabled={history.length <= 1} value="Undo" onClick={() => console.log(history)}/>
				<input type="button" className="btn btn-primary" disabled={history.length - 1 === currentStep} value="Redo" />
			</div>
			<NewItemForm className="float-child" onSubmit={(item: ListItem) => handleSubmit(item)}/>
		</div>
	)  
}
