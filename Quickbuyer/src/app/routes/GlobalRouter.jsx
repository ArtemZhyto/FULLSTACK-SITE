import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Main from "@/app/Main"
import Profile from "@pages/Profile/UI/Profle"
import ThemeWrapper from "@shared/layouts/ThemeWrapper/ThemeWrapper"
import Products from "@pages/Products/UI/Products"
import Form from "@pages/Registaration/UI/Form"
import Categorys from "@widgets/categorys/UI/Categorys"
import SingleProduct from "@pages/SingleProduct/UI/SingleProduct"
import ErrorPage from "@pages/ErrorPage/UI/ErrorPage"
import CreateProduct from "@pages/CreateProduct/UI/CreateProduct"
import Bucket from "@pages/Bucket/UI/Bucket"

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
				<Route path="/products/createProduct" element={<CreateProduct />} />
				<Route path="/cart" element={<Bucket />} />
			</Route>
		</>
	)
)

export default router
