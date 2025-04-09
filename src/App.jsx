// import { useState } from 'react'
import MainContent from "./components/MainContent";
import "./css/main.css";

function App() {
	return (
		<div className="app-container">
			<header className="">
				<h1 className="text-xl">Create your CV</h1>
			</header>
			<main>
				<MainContent />
			</main>
		</div>
	);
}

export default App;
