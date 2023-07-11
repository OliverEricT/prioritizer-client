export interface ListItem {
	id: number;
	img?: string;
	title: string;
	description: string;
	completed: boolean;
	priority?: number
}