import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { Outlet } from "react-router"
import Navbar from "../../../pages/navbar/UI/Navbar"
import Footer from "../../../pages/footer/UI/Footer"
const ThemeWrapper = ({ children }) => {
	const theme = useSelector(chooseTheme)
	return (
		<div id={theme}>
			<Navbar />
			{<Outlet />}
			<Footer />
		</div>
	)
}

export default ThemeWrapper
