import { useCallback, useEffect, useState } from "react"
import "../BucketProduct.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../../app/redux/slices/currentUser"

const BucketProduct = ({ id }) => {
	const [productInfo, setProductInfo] = useState()
	const curUser = useSelector(selectCurrentUser)
	useEffect(() => {
		const setCurProduct = async () => {
			try {
				const res = await axios.get(
					`https://localhost:34673/basket/${curUser.id}/${id}`
				)
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
					src={productInfo.images[0]}
					alt=""
					className="bucketProduct__image"
				/>
			</div>

			<div className="bucketProduct__name d-flex align-items-center justify-content-around w-100">
				{productInfo.name}{" "}
				<button
					onClick={() => {
						const deleteFromCart = async () => {
							console.log({
								curUser: curUser.ID,
								id,
							})
							await axios.delete(
								`https://localhost:34673/basket/${curUser.ID}/delete/${id}`
							)
							const res = await axios.get(
								`https://localhost:34673/enter/${curUser.password}/${curUser.mail}`
							)
							localStorage.setItem("currentUser", JSON.stringify(res.data))
							window.dispatchEvent(new Event("addCurUser"))
						}
						deleteFromCart()
					}}
					className="bucketProduct__removeBtn"
				></button>
			</div>
		</div>
	) : null
}

export default BucketProduct
