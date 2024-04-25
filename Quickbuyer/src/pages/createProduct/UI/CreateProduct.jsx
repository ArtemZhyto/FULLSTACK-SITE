import React, { useCallback, useState } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import { countries } from "../../../entities/data/countries"
import { categories } from "../../../entities/data/categorysList"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../CreateProduct.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../CreateProductThemes.scss"
const CreateProduct = () => {
	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles)
		// acceptedFiles.forEach)
	}, [])
	const [createdProduct, setCreatedProduct] = useState({})
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<main className="createProduct">
						<form
							className={substring(
								styles.createProduct__form,
								"createProduct__form"
							)}
						>
							<div className={styles.createProduct__imageBlock}>
								<Gallery>
									<div className={styles.createProduct__additionalImages}>
										<Item width="1024" height="768">
											{({ ref, open }) => (
												<label
													className="createProduct__additionalImage"
													onClick={(e) => {
														const file = e.target.files[0]
														const type = /image.*/
														if (file.match(type)) {
															const reader = new FileReader()
															reader.onload = () => {
																console.log(reader.result)
																setCreatedProduct({
																	...createdProduct,
																	additionalImage: [
																		...createdProduct.additionalImage,
																		reader.result,
																	],
																})
															}
															reader.readAsDataURL()
														}
													}}
												>
													{createdProduct.additionalImage ? (
														<img
															ref={ref}
															onClick={open}
															src={createdProduct.image}
															alt=""
															className={
																"createProducts__additionalImagePreview"
															}
														/>
													) : (
														<div
															className={substring(
																styles.createProduct__defaultAdditionalPhoto,
																"createProducts__additionalImagePreview",
																"createProduct__defaultAdditionalPhoto"
															)}
														>
															Нету
														</div>
													)}
													<input type="file" className="d-none" />
												</label>
											)}
										</Item>
										<Item width="1024" height="768">
											{({ ref, open }) => (
												<label
													className="createProduct__additionalImage"
													onClick={(e) => {
														const file = e.target.files[0]
														const type = /image.*/
														if (file.match(type)) {
															const reader = new FileReader()
															reader.onload = () => {
																console.log(reader.result)
																setCreatedProduct({
																	...createdProduct,
																	additionalImage: [
																		...createdProduct.additionalImage,
																		reader.result,
																	],
																})
															}
															reader.readAsDataURL()
														}
													}}
												>
													{createdProduct.additionalImage ? (
														<img
															ref={ref}
															onClick={open}
															src={createdProduct.image}
															alt=""
															className={
																"createProducts__additionalImagePreview"
															}
														/>
													) : (
														<div
															className={substring(
																styles.createProduct__defaultAdditionalPhoto,
																"createProducts__additionalImagePreview",
																"createProduct__defaultAdditionalPhoto"
															)}
														>
															Нету
														</div>
													)}
													<input type="file" className="d-none" />
												</label>
											)}
										</Item>
										<Item width="1024" height="768">
											{({ ref, open }) => (
												<label
													className="createProduct__additionalImage"
													onClick={(e) => {
														const file = e.target.files[0]
														const type = /image.*/
														if (file.match(type)) {
															const reader = new FileReader()
															reader.onload = () => {
																console.log(reader.result)
																setCreatedProduct({
																	...createdProduct,
																	additionalImage: [
																		...createdProduct.additionalImage,
																		reader.result,
																	],
																})
															}
															reader.readAsDataURL()
														}
													}}
												>
													{createdProduct.additionalImage ? (
														<img
															ref={ref}
															onClick={open}
															src={createdProduct.image}
															alt=""
															className={
																"createProducts__additionalImagePreview"
															}
														/>
													) : (
														<div
															className={substring(
																styles.createProduct__defaultAdditionalPhoto,
																"createProducts__additionalImagePreview",
																"createProduct__defaultAdditionalPhoto"
															)}
														>
															Нету
														</div>
													)}
													<input type="file" className="d-none" />
												</label>
											)}
										</Item>
										<Item width="1024" height="768">
											{({ ref, open }) => (
												<label
													className="createProduct__additionalImage"
													onClick={(e) => {
														const file = e.target.files[0]
														const type = /image.*/
														if (file.match(type)) {
															const reader = new FileReader()
															reader.onload = () => {
																console.log(reader.result)
																setCreatedProduct({
																	...createdProduct,
																	additionalImage: [
																		...createdProduct.additionalImage,
																		reader.result,
																	],
																})
															}
															reader.readAsDataURL()
														}
													}}
												>
													{createdProduct.additionalImage ? (
														<img
															ref={ref}
															onClick={open}
															src={createdProduct.image}
															alt=""
															className={
																"createProducts__additionalImagePreview"
															}
														/>
													) : (
														<div
															className={substring(
																styles.createProduct__defaultAdditionalPhoto,
																"createProducts__additionalImagePreview",
																"createProduct__defaultAdditionalPhoto"
															)}
														>
															Нету
														</div>
													)}
													<input type="file" className="d-none" />
												</label>
											)}
										</Item>
										<Item width="1024" height="768">
											{({ ref, open }) => (
												<label
													className="createProduct__additionalImage"
													onClick={(e) => {
														const file = e.target.files[0]
														const type = /image.*/
														if (file.match(type)) {
															const reader = new FileReader()
															reader.onload = () => {
																console.log(reader.result)
																setCreatedProduct({
																	...createdProduct,
																	additionalImage: [
																		...createdProduct.additionalImage,
																		reader.result,
																	],
																})
															}
															reader.readAsDataURL()
														}
													}}
												>
													{createdProduct.additionalImage ? (
														<img
															ref={ref}
															onClick={open}
															src={createdProduct.image}
															alt=""
															className={
																"createProducts__additionalImagePreview"
															}
														/>
													) : (
														<div
															className={substring(
																styles.createProduct__defaultAdditionalPhoto,
																"createProducts__additionalImagePreview",
																"createProduct__defaultAdditionalPhoto"
															)}
														>
															Нету
														</div>
													)}
													<input type="file" className="d-none" />
												</label>
											)}
										</Item>
									</div>
									<Item
										width="1024"
										height="768"
										/* 		original={}
                						thumbnail={} */
									>
										{({ ref, open }) => (
											<label className="createProduct__mainImage">
												<img
													ref={ref}
													onClick={open}
													alt=""
													className={
														createdProduct.image
															? "createProducts__mainImagePreview"
															: "createProducts__mainImagePreview createProducts__defaultPhoto"
													}
												/>
												<input type="file" className="d-none" />
											</label>
										)}
									</Item>
								</Gallery>
							</div>
							<ul className="createProduct__filters">
								<li className="createProduct__filter">
									Цена :
									<input type="number" className="createProduct__input" />
								</li>
								<li className="createProduct__filter">
									<select className="createProduct__selection">
										Тип :
										<option
											type="number"
											value="Новое"
											className="createProduct__input"
										>
											Новое
										</option>
										<option
											type="number"
											value="Отличное"
											className="createProduct__input"
										>
											Отличное
										</option>
										<option
											type="number"
											value="Б/У"
											className="createProduct__input"
										>
											Б/У
										</option>
									</select>
								</li>
								<li className="createProduct__filter">
									<select name="" id="" className="createProduct__selection">
										<option value="Все">Все</option>
										{countries.map((country) => (
											<option value={country}>{country}</option>
										))}
									</select>
								</li>
								<li className="createProduct__filter">
									Название
									<input type="text" className="createProduct__input" />
								</li>
								<li className="createProduct__filter">
									<select className="createProduct__selection">
										Категория
										{categories.map((category) => (
											<option value={category.title}>{category.title}</option>
										))}
									</select>
								</li>
							</ul>
							<div className="createProduct__description">
								<textarea
									name=""
									id=""
									cols="33"
									rows="10"
									placeholder="Добавьте описание"
								></textarea>
								<button type="submit" className="createProduct__createBtn">
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
