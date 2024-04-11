import React from "react"
import "../Navbar.module.scss"
import { Outlet } from "react-router"
import FeaturesBlock from "../../../widgets/FeaturesBlock/UI/FeaturesBlock"
const Navbar = () => {
	return (
		<>
			<div>Navbar</div>
			<FeaturesBlock />
			<Outlet> </Outlet>
		</>
	)
}

export default Navbar
