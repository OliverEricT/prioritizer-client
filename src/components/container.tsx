import update from 'immutability-helper'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { ListItem } from '../models/list-item'

import { DraggableCard } from './draggable-card'
import { NewItemForm } from './new-item-form'

const items: ListItem[] = [
	{id: 0, title: "Test", description: "lorem ipsum", completed: false, priority: 0, },
	{id: 1, title: "hello", description: "solar dolat", completed: false, priority: 1, },
	{id: 2, title: "kim", description: "gibberishum giberay", completed: false, priority: 2, },
	{id: 3, title: "eric", description: "still reactive", completed: false, priority: 3, }
]

const style = {
  width: 400,
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState(items)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: ListItem[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as ListItem],
          ],
        }),
      )
    }, [])

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
    )

		const handleSubmit = (item: ListItem) => {
			if (item.title === '' || item.description === ''){
				return;
			}
			item.id = cards.length + 1;
			console.log(item);
			setCards([...cards, item]);
		}

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
				<NewItemForm onSubmit={(item: ListItem) => handleSubmit(item)}/>
      </>
    )
  }
}
