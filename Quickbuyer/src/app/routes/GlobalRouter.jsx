import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Main from "../Main"
import Navbar from "../../pages/navbar/UI/Navbar"
import BurgerTarget from "../../widgets/burgerTarget/UI/BurgerTarget"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Main />} />
			</Route>
		</>
	)
)

export default router
