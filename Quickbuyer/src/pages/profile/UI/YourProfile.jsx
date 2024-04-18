import { CgChevronDown } from "react-icons/cg"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import TextInput from "../../../shared/ui/textInput/UI/TextInput.jsx"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../globalProfile.module.scss"
import { substring } from "../../../shared/utils/substring.js"
import "../ProfileThemes.scss"
import SelectCountry from "../../../widgets/selectCountry/UI/SelectCountry.jsx"
import { countries } from "../../../entities/data/countries.js"
import { sendUpdate } from "../../../features/API/sendUpdate.js"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo.js"
import { getUser } from "../../../features/API/getUser.js"
import { addPhoto } from "../../../features/classic/profile/addPhoto.js"
const YourProfile = ({ currentUser, setCurrentUser }) => {
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const [show, setShow] = useState(false)
	const toggleShow = () => {
		setShow(!show)
	}
	const checkIsNo = (val) => (val === "no" ? "Не указан" : val)
	return (
		<>
			<ToastContainer theme={theme} />
			<article className={substring(styles.yourProfile, "yourProfile")}>
				<Container>
					<Row className="justify-content-center">
						<Col
							xs={12}
							lg={6}
							className={substring(styles.yourProfile__globalinfo, [
								"yourProfile__globalinfo",
							])}
						>
							<div className={styles.yourProfile__imageWithName}>
								{currentUser?.img === "no" || !currentUser?.img ? (
									<>
										<label
											className={substring(
												styles.yourProfile__defaultPhoto,
												"yourProfile__defaultPhoto"
											)}
										>
											<label
												className={substring(
													"yourProfile__changePhoto",
													styles.yourProfile__changePhoto
												)}
											>
												<input
													type="file"
													className="d-none"
													onChange={(e) => {
														const typeOfFile = /image.*/i
														const file = e.target.files[0]
														if (file.type.match(typeOfFile)) {
															const reader = new FileReader()
															reader.onload = () => {
																setCurrentUser({
																	...currentUser,
																	img: reader.result,
																})
															}
															reader.readAsDataURL(file)
														}
													}}
												></input>
											</label>
										</label>
										<TextInput
											customInput={
												<input
													type="text"
													value={currentUser.name}
													onChange={(e) => {
														setCurrentUser({
															...currentUser,
															name: e.target.value,
														})
													}}
													className="yourProfile__input"
												/>
											}
											text={currentUser.name}
										>
											{currentUser.name}
										</TextInput>
									</>
								) : (
									<label>
										<img
											className={styles.yourProfile__photo}
											src={currentUser.img}
										></img>
										<label
											className={substring(
												"yourProfile__changePhoto",
												styles.yourProfile__changePhoto
											)}
										>
											<input
												type="file"
												className="d-none"
												onChange={() => {
													addPhoto(
														(setCurrentUser = setCurrentUser),
														(currentUser = currentUser)
													)
												}}
											></input>
										</label>
										<TextInput
											customInput={
												<input
													type="text"
													value={currentUser.name}
													onChange={(e) => {
														setCurrentUser({
															...currentUser,
															name: e.target.value,
														})
													}}
													className="yourProfile__input"
												/>
											}
											text={currentUser.name}
										>
											{currentUser.name}
										</TextInput>
									</label>
								)}
							</div>
							<div className="yourProfile__yearsSoldProducts">
								<p className={styles.yourProfile__years}>
									Лет на нашем сайте {currentUser.regist_data - 2023}
								</p>
								<p className={styles.yourProfile__soldProducts}>
									Продано товаров :
									<span className={styles.yourProfile__title}>
										{currentUser.sold}
									</span>
								</p>
								<button type="button" className={styles.yourProfile__exit}>
									Выйти
								</button>
							</div>
						</Col>
						<Col xs={12} lg={6}>
							<form
								className={substring(
									styles.yourProfile__additionalinfo,
									"yourProfile__additionalinfo"
								)}
								onSubmit={(e) => {
									e.preventDefault()
									sendUpdate(currentUser)
								}}
							>
								<TextInput
									customInput={
										<input
											type="email"
											value={currentUser.mail}
											onChange={(e) => {
												setCurrentUser({ ...currentUser, mail: e.target.value })
											}}
											className="yourProfile__input"
										/>
									}
									text={currentUser.mail}
									label="Почта :"
								></TextInput>
								<TextInput
									logo={
										<button
											onClick={toggleShow}
											type="button"
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__eye"
											)}
										></button>
									}
									customInput={
										<input
											type={show ? "text" : "password"}
											value={currentUser.password}
											onChange={(e) => {
												setCurrentUser({
													...currentUser,
													password: e.target.value,
												})
											}}
											className="yourProfile__input"
										/>
									}
									text={currentUser.password}
									label="Пароль :"
								></TextInput>
								<TextInput
									customInput={
										<input
											value={checkIsNo(currentUser.phone)}
											onChange={(e) => {
												setCurrentUser({
													...currentUser,
													phone: e.target.value,
												})
											}}
											className="yourProfile__input"
										/>
									}
									text={checkIsNo(currentUser.phone)}
									label="Номер телефона :"
								></TextInput>
								<TextInput
									customInput={
										<SelectCountry
											defaultValue={checkIsNo(currentUser.region)}
											onChange={(e) =>
												setCurrentUser({
													...currentUser,
													region: e.target.value,
												})
											}
											countries={countries}
										></SelectCountry>
									}
									text={checkIsNo(currentUser.region)}
									label="Регион :"
								></TextInput>

								<div
									className={substring(
										"yourProfile__line",
										styles.yourProfile__line
									)}
								></div>
								<label className={"yourProfile__label"}>
									Получать уведовмления и новости
									<input
										type="checkbox"
										className={styles.yourProfile__checkbox}
										onClick={(e) => {
											setCurrentUser({
												...currentUser,
												allowNotifications: !currentUser.allowNotifications,
											})
										}}
										checked={currentUser.allowNotifications}
									/>
									<div
										className={substring(
											"yourProfile__customCheckbox",
											styles.yourProfile__customCheckbox
										)}
									>
										<CgChevronDown className={styles.yourProfile__checkMark} />
									</div>
								</label>
								<div
									className={substring(
										"yourProfile__line",
										styles.yourProfile__line
									)}
								></div>
								<TextInput
									logo={
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__instagram"
											)}
										></div>
									}
									customInput={
										<>
											<input
												type="email"
												value={checkIsNo(currentUser.instagram)}
												onChange={(e) => {
													setCurrentUser({
														...currentUser,
														instagram: e.target.value,
													})
												}}
												className="yourProfile__input"
											/>
										</>
									}
									text={checkIsNo(currentUser.instagram)}
									label="Инстаграм :"
								></TextInput>
								<TextInput
									logo={
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__telegram"
											)}
										></div>
									}
									customInput={
										<input
											type="email"
											value={checkIsNo(currentUser.telegram)}
											onChange={(e) => {
												setCurrentUser({
													...currentUser,
													telegram: e.target.value,
												})
											}}
											className="yourProfile__input"
										/>
									}
									text={checkIsNo(currentUser.telegram)}
									label="Телеграм :"
								></TextInput>
								<button type="submit" className={styles.yourProfile__yelbut}>
									Сохранить изменения
								</button>
							</form>
						</Col>
					</Row>
				</Container>
			</article>
		</>
	)
}

export default YourProfile
