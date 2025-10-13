import styles from "./SearchBar.module.sass";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

interface SearchBarProps {
	onValueChanged: any
}

const SearchBar = (props: SearchBarProps) => {
	const [search, setSearch] = useState({
		title: "",
		filters: []
	});

	const onChange = (e) => {
		setSearch({
			...search,
			[e.target.name]: e.target.value
		});

		props.onValueChanged(e.target.value);
	}

	return <>
		<div className={styles.SearchBar}>

			<div className={styles.search}>
				<input type="text" name="title" value={search.title} onChange={onChange}
					   placeholder="Search by title..."/>
				<Search color={"#D8D9DA"} />
			</div>

			{/*<SlidersHorizontal color={"#D8D9DA"} size={28} className={styles.filters} />*/}
		</div>
	</>
}

export default SearchBar;