import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import { Gamepad2 } from "lucide-react";
import styles from "./MainMenu.module.sass";

const MainMenu = ({items, projects}) => {
	let location = useLocation();

	let project;
	let activePath = location.pathname;
	if (location.pathname.split("/")[1] === "projects") {
		const projectId = location.pathname.split("/")[2];
		// console.log(projectId);
		project = projects.find((p) => p.id === Number(projectId));
		activePath = "/projects";
	}

	// console.log(project);

	return <>
		<div className={styles.mainmenu}>
			<ul>
				{
					items.map((item, idx) => (
						<li key={idx}>
							<Link to={item.path} className={activePath === item.path ? styles.active : ""}>
								<item.icon color={activePath === item.path ? "#272829" : "#D8D9DA"}/>
								{
									activePath === item.path && project !== undefined ?
										<span className={styles.project}>
									<Gamepad2 size={20} />
								</span>
										:
										<></>
								}
							</Link>
						</li>
					))
				}
			</ul>
		</div>
	</>
}

MainMenu.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			icon: PropTypes.node, // or PropTypes.node if you pass React elements instead of URLs
		})
	).isRequired,
};

export default MainMenu;