import React, { useState } from "react"
import Header from "../pages/header/ui/Header"
import About from "../pages/about/ui/About"
import Comfort from "../pages/coomfort/Comfort"
import GoodsAssortiments from "../pages/goodsAsssortiment/ui/GoodsAssortiments"
import BestUsers from "../pages/bestusers/UI/BestUsers"

const App = () => {
	const [theme, setTheme] = useState("dark")
	return (
		<div id={theme} className="main">
			<Header />
			<About />
			<Comfort />
			<GoodsAssortiments />
			<BestUsers />
		</div>
	)
}

export default App
