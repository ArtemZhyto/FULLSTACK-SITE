import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Main from "../Main"
import Navbar from "../../pages/navbar/UI/Navbar"
import Profile from "../../pages/profile/UI/YourProfile"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Main />} />
				<Route path="/user/:id" element={<Profile />}></Route>
			</Route>
		</>
	)
)

export default router
