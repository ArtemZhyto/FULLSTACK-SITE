import React from "react"
import { useSelector } from "react-redux"
import { chooseTheme } from "../../features/slices/mainpage/mainPageInfo"
import Navbar from "../navbar/UI/Navbar"
import BurgerTarget from "../../widgets/burgerTarget/UI/BurgerTarget"
import Categorys from "../../widgets/categorys/UI/Categorys"
import Footer from "../footer/UI/Footer"

const ErrorPage = () => {
	const theme = useSelector(chooseTheme)
	return (
		<div id={theme}>
			<Navbar />
			<BurgerTarget />

			<Categorys></Categorys>
			<main
				className="errorPage d-flex flex-column justify-content-center"
				style={{ height: "100vh" }}
			>
				<h1 className="errorPage__title display-1 text-center">Error 404</h1>
				<p className="errorPage__descr display-4 text-center">
					Проверьте коректность введенных данных
				</p>
			</main>
			<Footer />
		</div>
	)
}

export default ErrorPage
