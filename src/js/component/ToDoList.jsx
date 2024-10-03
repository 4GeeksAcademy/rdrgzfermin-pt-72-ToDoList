import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>To Do List</h1>
			<input></input>
		</div>
	);
};

export default Home;

/* onKeyPress={(e) => e.key === 'Enter' && handleSearch()} */