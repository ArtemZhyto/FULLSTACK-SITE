import React, { useEffect, useState } from "react"
import Header from "../pages/header/ui/Header"
import About from "../pages/about/ui/About"
import Comfort from "../pages/coomfort/Comfort"
import GoodsAssortiments from "../pages/goodsAsssortiment/ui/GoodsAssortiments"
import BestUsers from "../pages/bestusers/UI/BestUsers"
import Footer from "../pages/footer/UI/Footer"
import Registration from "../pages/registratiion/UI/Registration"
import { fetchProducts } from "../features/goods/Goods"
import { useDispatch} from "react-redux"
const Main = () => {
	const dispatch = useDispatch()
	const [theme, setTheme] = useState("white")
	const claimInfo = () => dispatch(fetchProducts())
	return (
		<div id={theme} className="main">
			<button onClick={claimInfo}>Claim</button>
			<Header />
			<About />
			<Comfort />
			<GoodsAssortiments />
			<BestUsers />
			<Registration />
			<Footer />
		</div>
	)
}

export default Main
