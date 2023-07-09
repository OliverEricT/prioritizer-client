import Header from "../components/header/header";
import OrganizedList from "../components/organized-list/organized-list";
import SideNav from "../components/side-nav/side-nav";

export default function Home() {
	return (
		<div>
			<Header />
			<SideNav />
			<OrganizedList></OrganizedList>
		</div>
	)
}