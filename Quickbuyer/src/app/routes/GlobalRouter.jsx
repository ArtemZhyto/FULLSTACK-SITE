import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Main from "../Main"
import Profile from "../../pages/profile/UI/Profle"
import ThemeWrapper from "../../shared/ui/themeWrapper/ThemeWrapper"
import Products from "../../pages/products/UI/Products"
import Form from "../../pages/registratiion/UI/Form"
import LeftPanelWrapper from "../../widgets/leftPanelWrapper/UI/LeftPanelWrapper"
import Filters from "../../widgets/filters/UI/Filters"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<ThemeWrapper />}>
				<Route path="/products" element={<Products />}></Route>
				<Route index element={<Main />} />
				<Route path="/user/:id" element={<Profile />}></Route>
				<Route path="/registration" element={<Form />}></Route>
			</Route>
		</>
	)
)

export default router
