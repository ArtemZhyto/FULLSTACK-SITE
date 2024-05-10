import React, { useCallback, useEffect, useState } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import { countries } from "@entities/selectCountries/countries"
import { categories } from "@entities/categorysList/categorysList"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../CreateProduct.module.scss"
import { substring } from "@shared/utils/jsFunctions/substring"
import "../CreateProductThemes.scss"
import AdditionalImage from "@widgets/AdditionalImage/ui/AdditionalImage"
import { useDropzone } from "react-dropzone"
import axios from "axios"
import { useNavigate } from "react-router"
import { ToastContainer, toast } from "react-toastify"
import currentUserSlice from "../../../features/slices/currentUserSlice"
const CreateProduct = () => {
	const [createdProduct, setCreatedProduct] = useState({
		name: "",
		price: 0,
		seller_id: "",
		country: "Австралия",
		type: "Новое",
		category: "Электроника",
		images: [],
		description: "",
	})
	const onDrop = useCallback(
		(acceptedFiles) => {
			const type = /image.*/
			if (acceptedFiles[0].type.match(type)) {
				const reader = new FileReader()
				reader.onload = () => {
					setCreatedProduct({
						...createdProduct,
						images: createdProduct.images[0]
							? [reader.result, ...createdProduct.images]
							: [reader.result],
					})
				}
				reader.readAsDataURL(acceptedFiles[0])
			}
		},
		[createdProduct]
	)
	const navigate = useNavigate()
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
	useEffect(() => {
		let currentUser = localStorage.getItem("currentUser")
		if (currentUser !== undefined && currentUser && currentUser !== "undefined") {
			currentUser = JSON.parse(currentUser)
			setCreatedProduct({ ...createdProduct, seller_id: currentUser.id })
		} else {
			navigate("/registration")
		}
	}, [])
	return (
		<Container>
			<ToastContainer></ToastContainer>
			<Row>
				<Col xs={12}>
					<main className={substring(styles.createProduct, "createProduct")}>
						<form
							onSubmit={async (e) => {
								e.preventDefault()
								console.log(createdProduct)
								if (
									!createdProduct.name ||
									!createdProduct.price ||
									!createdProduct.country ||
									!createdProduct.type ||
									!createdProduct.category ||
									!createdProduct.images[0] ||
									!createdProduct.description
								) {
									toast.info("Убедитесь , что все поля заполнены 😁")
								} else {
									console.log({
										...createdProduct,
										images: JSON.stringify(createdProduct.images),
									})
									await axios.post(
										`http://127.0.0.1:8000/createproduct/`,
										{
											...createdProduct,
											images: JSON.stringify(createdProduct.images),
										},
										{
											headers: {
												Authorization: "ApiKey admin:1234",
											},
										}
									)
								}
							}}
							className={substring(
								styles.createProduct__form,
								"createProduct__form"
							)}
						>
							<div className={styles.createProduct__imageBlock}>
								<Gallery>
									<div className={styles.createProduct__additionalImages}>
										<AdditionalImage
											createdProduct={createdProduct}
											setCreatedProduct={setCreatedProduct}
											index={1}
										></AdditionalImage>
										<AdditionalImage
											createdProduct={createdProduct}
											setCreatedProduct={setCreatedProduct}
											index={2}
										></AdditionalImage>
										<AdditionalImage
											createdProduct={createdProduct}
											setCreatedProduct={setCreatedProduct}
											index={3}
										></AdditionalImage>
										<AdditionalImage
											createdProduct={createdProduct}
											setCreatedProduct={setCreatedProduct}
											index={4}
										></AdditionalImage>
										<AdditionalImage
											createdProduct={createdProduct}
											setCreatedProduct={setCreatedProduct}
											index={5}
										></AdditionalImage>
									</div>
									{createdProduct.images.length ? (
										<img
											src={createdProduct.images[0]}
											className={substring(
												"createProduct__mainPhoto",
												styles.createProduct__mainPhoto
											)}
											alt=""
										/>
									) : (
										<div
											{...getRootProps()}
											className={substring(
												"createProduct__mainPhoto",
												styles.createProduct__mainPhoto
											)}
										>
											<input {...getInputProps()} type="file" />
											{isDragActive ? (
												<div className="d-flex align-items-center justify-content-center">
													<p
														className="d-none d-sm-block"
														style={{ fontSize: 36 }}
													>
														Ваше фото :
													</p>
													<div className="downloadBtn"></div>
												</div>
											) : (
												<div className="d-flex align-items-center justify-content-center">
													<p
														className="d-none d-sm-flex"
														style={{ fontSize: 36 }}
													>
														Загрузить фото
													</p>
													<div className="downloadBtn"></div>
												</div>
											)}
										</div>
									)}
								</Gallery>
							</div>
							<ul
								className={substring(
									"createProduct__filters",
									styles.createProduct__filters
								)}
							>
								<li className="createProduct__filter">
									<p className="mb-2"> Цена :</p>

									<input
										required
										type="number"
										className={substring(
											"createProduct__input",
											styles.createProduct__input
										)}
										onChange={(e) => {
											setCreatedProduct({
												...createdProduct,
												price: e.target.value,
											})
										}}
									/>
								</li>
								<li className="createProduct__filter">
									<p className="mb-2"> Тип :</p>

									<select
										required
										className={substring(
											"createProduct__selection",
											styles.createProduct__selection
										)}
										onChange={(e) => {
											setCreatedProduct({
												...createdProduct,
												type: e.target.value,
											})
										}}
									>
										<option
											type="number"
											value="Новое"
											className={substring(
												"createProduct__input",
												styles.createProduct__input
											)}
										>
											Новое
										</option>
										<option
											type="number"
											value="Отличное"
											className={substring(
												"createProduct__input",
												styles.createProduct__input
											)}
										>
											Отличное
										</option>
										<option
											type="number"
											value="Б/У"
											className={substring(
												"createProduct__input",
												styles.createProduct__input
											)}
										>
											Б/У
										</option>
									</select>
								</li>
								<li className="createProduct__filter">
									<p className="mb-2">Страна :</p>
									<select
										name=""
										id=""
										className={substring(
											"createProduct__selection",
											styles.createProduct__selection
										)}
										required
										onChange={(e) => {
											setCreatedProduct({
												...createdProduct,
												country: e.target.value,
											})
										}}
									>
										{countries.map((country) => (
											<option key={country} value={country}>
												{country}
											</option>
										))}
									</select>
								</li>
								<li className="createProduct__filter">
									<p className="mb-2">Название :</p>

									<input
										required
										type="text"
										className={substring(
											"createProduct__input",
											styles.createProduct__input
										)}
										onChange={(e) => {
											setCreatedProduct({
												...createdProduct,
												name: e.target.value,
											})
										}}
									/>
								</li>
								<li className="createProduct__filter">
									<p className="mb-2"> Категория :</p>

									<select
										className={substring(
											"createProduct__selection",
											styles.createProduct__selection
										)}
										onChange={(e) => {
											setCreatedProduct({
												...createdProduct,
												category: e.target.value,
											})
										}}
									>
										{categories.map((category) => (
											<option key={category.title} value={category.title}>
												{category.title}
											</option>
										))}
									</select>
								</li>
							</ul>
							<div className="d-flex align-items-start justify-content-center flex-column">
								<textarea
									className={substring(
										"createProduct__description",
										styles.createProduct__description,
										"mb-2"
									)}
									name=""
									id=""
									cols="33"
									rows="10"
									placeholder="Добавьте описание"
									onChange={(e) => {
										setCreatedProduct({
											...createdProduct,
											description: e.target.value,
										})
									}}
								></textarea>
								<button
									type="submit"
									className={styles.createProduct__createBtn}
								>
									Создать
								</button>
							</div>
						</form>
					</main>
				</Col>
			</Row>
		</Container>
	)
}

export default CreateProduct
