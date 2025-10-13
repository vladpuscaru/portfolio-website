import "./common/sass/general.sass"
import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome/PageHome.tsx";
import MainMenu from "./components/MainMenu/MainMenu.tsx";
import PageResume from "./pages/PageResume/PageResume.tsx";
import PageProjects from "./pages/PageProjects/PageProjectsX.tsx";
import PageProject from "./pages/PageProject/PageProject.tsx";
import { House, FileText, SquareTerminal } from "lucide-react";
import { getProjects } from "./assets/data/projects";
import GameOfLifeBackground from "./components/GOLBackground/GOLBackground.tsx";
import Resume from "./assets/data/documents/resumev5.pdf";
import ResumeShowcase from "./pages/PageResume/ResumeShowcase.tsx";
import NetworkBackground from "./components/FlowFieldBackground/FlowFieldBackground.tsx";
import { BASE_PATH } from "./assets/data";

const App = () => {
	const projects = getProjects();

	return (
		<div className="App">
			{/*<GameOfLifeBackground*/}
			{/*	cellSize={8}*/}
			{/*	speed={35}*/}
			{/*	density={0.2}*/}
			{/*	aliveColor="#ffffff"*/}
			{/*	bgFade={0.08}*/}
			{/*/>*/}

			<NetworkBackground
				color="#ffcb00"
				accent="#00b3e6"
				density={0.54}
				linkDist={130}
				opacity={0.45}
			/>

			<div className="main container">
				<Routes>
					<Route path={`${BASE_PATH}`} element={<PageHome/>}/>

					{/*<Route path={"/resume"} element={<PageResume src={Resume} />}/>*/}
					<Route path={`${BASE_PATH}/resume`} element={<ResumeShowcase pdfUrl={Resume} />}/>

					<Route path={`${BASE_PATH}/projects`} element={<PageProjects projects={projects} highlight={projects[projects.length - 1]} />}/>

					<Route path={`${BASE_PATH}/projects/:projectId`} element={<PageProject projects={projects} />}/>
				</Routes>
			</div>

			<MainMenu projects={getProjects()} items={
				[
					{
						path: `${BASE_PATH}/resume`,
						icon: FileText
					},
					{
						path: `${BASE_PATH}`,
						icon: House
					},
					{
						path: `${BASE_PATH}/projects`,
						icon: SquareTerminal
					}
				]
			}/>

		</div>
	)
}

export default App;