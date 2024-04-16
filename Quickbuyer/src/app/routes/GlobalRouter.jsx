import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Main from "../Main"
import Navbar from "../../pages/navbar/UI/Navbar"
import Profile from "../../pages/profile/UI/YourProfile"
import Expiriment from "../../pages/expiriment"
import ThemeWrapper from "../../shared/ui/themeWrapper/ThemeWrapper"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* <Route path="/expiriment" element={<Expiriment />}></Route> */}
			<Route path="/" element={<ThemeWrapper />}>
				<Route index element={<Main />} />
				<Route path="/user/:id" element={<Profile />}></Route>
			</Route>
		</>
	)
)

export default router
