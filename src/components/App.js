import React from "react";
import Nav from "./Nav";
// import Search from "./Search";
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			{/* <Search /> */}
			<HogList hogInfo={hogs}/>
		</div>
	);
}

export default App;
