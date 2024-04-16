import React, { Children, useEffect, useState } from "react"
import Header from "../pages/header/ui/Header"
import About from "../pages/about/ui/About"
import Comfort from "../pages/coomfort/Comfort"
import GoodsAssortiments from "../pages/goodsAsssortiment/ui/GoodsAssortiments"
import BestUsers from "../pages/bestusers/UI/BestUsers"
import Footer from "../pages/footer/UI/Footer"
import Registration from "../pages/registratiion/UI/Form"
import BurgerTarget from "../widgets/burgerTarget/UI/BurgerTarget"
const Main = ({ children }) => {
	const [isOpened, setIsOpened] = useState(false)
	return (
		<>
			{children}
			<BurgerTarget
				isOpened={isOpened}
				setIsOpened={setIsOpened}
			></BurgerTarget>
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
