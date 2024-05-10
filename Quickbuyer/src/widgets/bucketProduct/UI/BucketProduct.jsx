import { useCallback, useEffect, useState } from "react"
import "../BucketProduct.scss"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "@features/slices/currentUserSlice"
import { Link } from "react-router-dom"
import {
	changeMainPage,
	selectSumOfBucket,
} from "../../../features/slices/mainPageSlice"

const BucketProduct = ({ id }) => {
	const [productInfo, setProductInfo] = useState()
	const dispatch = useDispatch()
	const sumOfBucket = useSelector(selectSumOfBucket)
	const curUser = useSelector(selectCurrentUser)
	useEffect(() => {
		const setCurProduct = async () => {
			try {
				const res = await axios.get(`http://127.0.0.1:8000/products/${id}`)
				setProductInfo(res.data)
			} catch (error) {
				console.error(error)
			}
		}

		setCurProduct()
	}, [curUser.id, id])
	return productInfo ? (
		<div className="bucketProduct">
			<div className="bucketProduct__imageWrapper">
				<img
					src={JSON.parse(productInfo.images)[0]}
					alt=""
					className="bucketProduct__image"
				/>
			</div>

			<div className="bucketProduct__name d-flex align-items-center justify-content-around w-100">
				{productInfo.name}{" "}
				<button
					onClick={() => {
						const deleteFromCart = async () => {
							await axios.post(
								`http://127.0.0.1:8000/removefrombusket/`,
								{
									user_id: curUser.id,
									product_id: id,
								},
								{
									headers: {
										Authorization: "ApiKey admin:1234",
									},
								}
							)
							window.dispatchEvent(new Event("addCurUser"))
						}
						deleteFromCart()
						dispatch(
							changeMainPage({ sumOfBucket: sumOfBucket - productInfo.price })
						)
					}}
					className="bucketProduct__removeBtn"
				></button>
				<Link
					to={`/products/product?id=${id}`}
					className="bucketProduct__viewBtn"
				></Link>
			</div>
		</div>
	) : null
}

export default BucketProduct
