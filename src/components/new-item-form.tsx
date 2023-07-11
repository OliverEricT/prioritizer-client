import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { ListItem } from "../models/list-item";

interface NewItemFormProps {
	onSubmit: (item: ListItem) => void;
}

export const NewItemForm = ({ onSubmit }: NewItemFormProps) => {
	const [ formValues, setFormValues ] = useState({
		title: '',
		description: ''
	})

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		
		let item: ListItem = {
			id: 0,
			title: formValues.title,
			description: formValues.description,
			completed: false,
			priority: 0
		};

		setFormValues({
			title: '',
			description: ''
		});
		onSubmit(item);
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="mb-3">
				<label htmlFor="titleInput" className="form-label">Title: </label>
				<input
					type="string"
					className="form-control"
					id="titleInput"
					name="title"
					value={formValues.title}
					onChange={(e) => setFormValues({...formValues, title: e.target.value})}/>
			</div>
			<div className="mb-3">
				<label htmlFor="descriptionInput" className="form-label">Description: </label>
				<input
					type="string"
					className="form-control"
					id="descriptionInput"
					name="description"
					value={formValues.description}
					onChange={(e) => setFormValues({...formValues, description: e.target.value})}/>
			</div>
			<div className="mb-3">
				<button type="submit">Submit</button>
			</div>
		</form>
	)
};