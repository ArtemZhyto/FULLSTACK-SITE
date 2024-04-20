import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { Outlet } from "react-router"
import Navbar from "../../../pages/navbar/UI/Navbar"
import Footer from "../../../pages/footer/UI/Footer"
import BurgerTarget from "../../../widgets/burgerTarget/UI/BurgerTarget"
import Filters from "../../../widgets/filters/UI/Filters"
const ThemeWrapper = ({ children }) => {
	const theme = useSelector(chooseTheme)
	return (
		<div id={theme}>
			<Navbar />
			<BurgerTarget />
			<Filters />
			{<Outlet />}
			<Footer />
		</div>
	)
}

export default ThemeWrapper
