import { useSelector } from "react-redux"
import { chooseTheme } from "@features/slices/mainPageSlice"
import { Outlet } from "react-router"
import Navbar from "@pages/NavBar/UI/Navbar"
import Footer from "@pages/Footer/UI/Footer"
import BurgerTarget from "@widgets/burgerTarget/UI/BurgerTarget"
import Categorys from "@widgets/categorys/UI/Categorys"
const ThemeWrapper = ({ children }) => {
	const theme = useSelector(chooseTheme)
	return (
		<div id={theme}>
			<Navbar />
			<BurgerTarget />
			<Categorys></Categorys>
			{<Outlet />}
			<Footer />
		</div>
	)
}

export default ThemeWrapper
