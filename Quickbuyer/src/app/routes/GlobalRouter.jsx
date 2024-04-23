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
import Categorys from "../../widgets/categorys/UI/Categorys"
import SingleProduct from "../../pages/SingleProduct/SingleProduct"
import ErrorPage from "../../pages/errorPage/ErrorPage"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<ThemeWrapper />} errorElement={<ErrorPage />}>
				<Route path="/products" element={<Products />}></Route>
				<Route index element={<Main />} />
				<Route path="/user/:id" element={<Profile />}></Route>
				<Route path="/registration" element={<Form />}></Route>
				<Route path="/categorys" element={<Categorys />}></Route>
				<Route path="/products/product" element={<SingleProduct />}></Route>
			</Route>
		</>
	)
)

export default router
