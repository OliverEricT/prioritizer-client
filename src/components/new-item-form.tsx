import axios from "axios";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { ListItem } from "../models/list-item";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
	headers: {
		'accept': 'application/json',
		'Authorization': 'Bearer '
	}
});

interface NewItemFormProps {
	onSubmit: (item: ListItem) => void;
	className?: string;
}

export const NewItemForm = ({ onSubmit, className }: NewItemFormProps) => {
	const [ formValues, setFormValues ] = useState({
		title: '',
		description: ''
	});
	const [ searchValues, setSearchValues ] = useState([] as any[]);

	const search = async (val: string) => {
		val = val.replace(' ','%');
		const queryparams: string = 'movie?query='+val+'&include_adult=false&language=en-US&page=1';
		const res = await client.get(queryparams);
    setSearchValues(await res.data.results);
	}

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

	const movies = ()

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={className || ''}>
			<div className="form-floating mb-3">
				<input
					type="string"
					className="form-control"
					id="titleInput"
					name="title"
					value={formValues.title}
					onChange={(e) => setFormValues({...formValues, title: e.target.value})}/>
				<label htmlFor="titleInput" className="form-label">Title: </label>
			</div>
			<div className="form-floating mb-3">
				<input
					type="string"
					className="form-control"
					id="descriptionInput"
					name="description"
					value={formValues.description}
					onChange={(e) => setFormValues({...formValues, description: e.target.value})}/>
				<label htmlFor="descriptionInput" className="form-label">Description: </label>
			</div>
			<div className="mb-3">
				<input type="submit" className="btn btn-primary" value="Submit" />
			</div>
			<div className="form-floating mb-3">
				<input
					type="string"
					className="form-control"
					id="movieSearchInput"
					name="description"
					onChange={(e) => search(e.target.value)}
					/>
				<label htmlFor="movieSearchInput" className="form-label">Search Movie DB: </label>
			</div>
		</form>
	)
};