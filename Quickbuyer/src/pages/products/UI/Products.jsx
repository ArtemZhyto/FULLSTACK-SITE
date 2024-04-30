import React, { useEffect } from "react"
import {
	changeSearch,
	fetchProducts,
	selectGoods,
	selectSearch,
} from "@features/slices/mainPageSlice"
import { useDispatch, useSelector } from "react-redux"
import Product from "../../../widgets/product/UI/Product"
import styles from "../products.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { substring } from "@shared/utils/jsFunctions/substring"
import { useLocation, useParams } from "react-router"
import queryString from "query-string"
import { chooseFilters } from "@features/slices/FilterSlice"
import { productsFilter } from "@features/productsFilter/productsFilter"
import Filters from "../../../widgets/filters/UI/Filters"
import { addCurrentUser, exitFromUser } from "@features/slices/currentUserSlice"
import axios from "axios"
const Products = () => {
	const dispatch = useDispatch()
	const goods = useSelector(selectGoods)
	let qstring = useSelector(selectSearch)
	const filters = useSelector(chooseFilters)
	const location = useLocation()
	useEffect(() => {
		if (location.search) {
			dispatch(changeSearch(queryString.parse(location.search).q))
		}
		const handleNewCurUser = async () => {
			let localStorageUser = localStorage.getItem("currentUser")
			if (localStorageUser !== "undefined" && localStorageUser) {
				localStorageUser = JSON.parse(localStorageUser)
				try {
					const res = await axios.get(
						`https://localhost:34673/enter/${localStorageUser.password}/${localStorageUser.mail}`
					)
					localStorage.setItem("currentUser", JSON.stringify(res.data))
					dispatch(addCurrentUser(res.data))
				} catch (error) {
					localStorage.clear()
					console.log("cleared")
					dispatch(exitFromUser())
				}
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [location])
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	return (
		<>
			<Filters />
			<article className="products">
				<Container>
					<Row className={substring(styles.products__row, "g-5")}>
						{goods
							? productsFilter(goods, qstring, filters).map((good) => (
									<Product
										key={good.ID}
										name={good.name}
										img={good.images[0]}
										seller={good.seller}
										price={good.price}
										id={good.ID}
									/>
							  ))
							: null}
					</Row>
				</Container>
			</article>
		</>
	)
}

export default Products
