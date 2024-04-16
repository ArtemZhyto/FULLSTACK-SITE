import { Container, Col, Row } from "react-bootstrap"
import { useState } from "react"
import styles from "../Registration.module.scss"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { substring } from "../../../shared/utils/substring"
import EnterForm from "../../../widgets/form/EnterForm"
import RegistrationInstruction from "../../../widgets/instruction/RegistrationInstruction"
import EnterInstruction from "../../../widgets/instruction/EnterInstruction"
import RegistrationForm from "../../../widgets/form/RegistrationForm"
import { useNavigate } from "react-router"
import { useEffect } from "react"
const Registration = () => {
	const [typeOfSending, setTypeOfSending] = useState("registration")
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const checking = typeOfSending === "registration"
	const navigate = useNavigate()
	useEffect(() => {
		const handleNewCurUser = () => {
			const localStorageUser = JSON.parse(localStorage.getItem("currentUser"))
			if (localStorageUser) {
				if (localStorageUser.ID) {
					navigate(`/user/${localStorageUser.ID}`)
				}
			}
		}
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
						{checking ? (
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
