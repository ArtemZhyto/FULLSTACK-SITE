import React, { Children, useEffect, useState } from "react"
import Header from "../pages/header/ui/Header"
import About from "../pages/about/ui/About"
import Comfort from "../pages/coomfort/Comfort"
import GoodsAssortiments from "../pages/goodsAsssortiment/ui/GoodsAssortiments"
import BestUsers from "../pages/bestusers/UI/BestUsers"
import Footer from "../pages/footer/UI/Footer"
import Registration from "../pages/registratiion/UI/Registration"
import { fetchProducts } from "../features/goods/Goods"
import { useDispatch } from "react-redux"
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
			<Footer />
		</>
	)
}

export default Main
