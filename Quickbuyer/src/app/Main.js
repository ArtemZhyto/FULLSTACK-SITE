import React, { Children, useEffect, useState } from "react"
import Header from "@pages/Header/ui/Header"
import About from "@pages/About/ui/About"
import Comfort from "@pages/Comfort/Comfort"
import GoodsAssortiments from "../pages/GoodsAssortiment/ui/GoodsAssortiments"
import BestUsers from "@pages/BestUsers/UI/BestUsers"
import Footer from "@pages/Footer/UI/Footer"
import Registration from "@pages/Registaration/UI/Form"
import BurgerTarget from "@widgets/burgerTarget/UI/BurgerTarget"
const Main = ({ children }) => {
	return (
		<>
			{children}
			<Header />
			<About />
			<Comfort />
			<GoodsAssortiments />
			<BestUsers />
			<Registration />
		</>
	)
}

export default Main
