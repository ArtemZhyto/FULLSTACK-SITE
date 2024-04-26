import { Container, Col, Row } from "react-bootstrap"
import { useState } from "react"
import styles from "../Registration.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { substring } from "../../../shared/utils/substring"
import EnterForm from "../../../widgets/form/EnterForm"
import RegistrationInstruction from "../../../widgets/instruction/RegistrationInstruction"
import EnterInstruction from "../../../widgets/instruction/EnterInstruction"
import RegistrationForm from "../../../widgets/form/RegistrationForm"
import { useEffect } from "react"
import {
	addCurrentUser,
	exitFromUser,
	selectCurrentUser,
} from "../../../app/redux/slices/currentUser"
import { Link } from "react-router-dom"
import axios from "axios"
const Registration = () => {
	const [typeOfSending, setTypeOfSending] = useState("registration")
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const checking = typeOfSending === "registration"
	const currentUser = useSelector(selectCurrentUser)
	const dispatch = useDispatch()
	useEffect(() => {
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
					dispatch(exitFromUser())
				}
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [])
	return (
		<article className="registration">
			<ToastContainer theme={theme}></ToastContainer>
			<Container>
				<Col xs={12}>
					{checking ? (
						<p className={substring(styles.registration__title, "title")}>
							Регистрация
						</p>
					) : (
						<p className={substring(styles.registration__title, "title")}>
							Вход
						</p>
					)}
				</Col>
				<Row>
					<Col xs={0} lg={2}></Col>
					<Col
						xs={12}
						lg={8}
						className={substring(
							styles.registration__regblock,
							"registration__regblock"
						)}
					>
						{currentUser.ID ? (
							<Link
								className={styles.registration__userLink}
								to={`/user/${currentUser.ID}`}
							>
								Войти в профиль
							</Link>
						) : checking ? (
							<>
								<RegistrationInstruction />
								<RegistrationForm
									setTypeOfSending={setTypeOfSending}
									theme={theme}
								/>
							</>
						) : (
							<>
								<EnterInstruction />
								<EnterForm setTypeOfSending={setTypeOfSending} theme={theme} />
							</>
						)}
					</Col>
					<Col xs={0} lg={2}></Col>
				</Row>
			</Container>
		</article>
	)
}

export default Registration
