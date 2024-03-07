import { useState } from "react"
import "./registrationglobal.scss"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Registration() {
	console.log("Rendered from registration!")
	const [inputValue, setValue] = useState({ email: "", password: "" })
	const [isEnter, setEnter] = useState(false)
	return !isEnter ? (
		<article>
			<Container>
				<Row>
					<Col xs={2}></Col>
					<Col xs={12} sm={8}>
						<p className="title text-center mb-5">Регистрация</p>
						<div className="register">
							<div className="register__info text-center g-4">
								<h3 className="register__info-text register__title">
									Инструкция
								</h3>
								<p className="register__info-text register__subtitle">
									1. Введите свою почту или номер телефона
								</p>
								<p className="register__info-text register__subtitle">
									2. Придумайте пароль и подтвердите его
								</p>
								<p className="register__info-text register__subtitle">
									3. Нажмите кнопку Зарегистрироваться
								</p>
								<p className="register__info-text register__subtitle">
									Так же, если у Вас уже имеется аккаунт, то введите почту и
									пароль от аккаунта и нажмите Зарегестрироватся
								</p>
								<p className="register__info-text register__subtitle">
									Просим ознакомиться с нашими Условиями пользования сайтом
								</p>
							</div>
							<form className="register__inputs text-center">
								<label className="register__inputs-label">
									Почта{" "}
									<input
										value={inputValue.email}
										onChange={(e) =>
											setValue({ ...inputValue, email: e.target.value })
										}
										type="email"
										placeholder="Например, example@gmail.com"
										required
									/>
								</label>
								<label className="register__inputs-label">
									Пароль
									<input
										type="password"
										value={inputValue.password}
										onChange={(e) =>
											setValue({ ...inputValue, password: e.target.value })
										}
										placeholder="Например, 12345678"
										required
									/>
								</label>
								<label className="register__inputs-label">
									Подтвердите пароль
									<input type="password" />
								</label>
								<Link
									className="button mb-5 mt-2"
									to={`/registration/${inputValue.password}/${inputValue.email}`}
								>
									Зарегистрироваться
								</Link>

								<p>
									Уже есть аккаунт?{" "}
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault()
											setEnter(true)
										}}
									>
										Войти
									</a>
								</p>
							</form>
						</div>
					</Col>
					<Col xs={2}> </Col>
				</Row>
			</Container>
		</article>
	) : (
		<Container>
			<Row>
			<article>
			<Container>
				<Row>
					<Col xs={2}></Col>
					<Col xs={12} sm={8}>
						<p className="title text-center mb-5">Вход</p>
						<div className="register">
							<div className="register__info text-center g-4">
								<h3 className="register__info-text register__title">
									Инструкция
								</h3>
								<p className="register__info-text register__subtitle">
									1. Введите свою почту или номер телефона
								</p>
								<p className="register__info-text register__subtitle">
									2. Введите пароль
								</p>
								<p className="register__info-text register__subtitle">
									3. Нажмите кнопку Зарегистрироваться
								</p>
								<p className="register__info-text register__subtitle">
									Так же, если у Вас уже имеется аккаунт, то введите почту и
									пароль от аккаунта и нажмите Войти
								</p>
								<p className="register__info-text register__subtitle">
									Просим ознакомиться с нашими Условиями пользования сайтом
								</p>
							</div>
							<form className="register__inputs text-center">
								<label className="register__inputs-label">
									Почта{" "}
									<input
										value={inputValue.email}
										onChange={(e) =>
											setValue({ ...inputValue, email: e.target.value })
										}
										type="email"
										placeholder="Например, example@gmail.com"
										required
									/>
								</label>
								<label className="register__inputs-label">
									Пароль
									<input
										type="password"
										value={inputValue.password}
										onChange={(e) =>
											setValue({ ...inputValue, password: e.target.value })
										}
										placeholder="Например, 12345678"
										required
									/>
								</label>
								<Link
									className="button mb-5 mt-2"
									to={`/registration/${inputValue.password}/${inputValue.email}`}
								>
									Зарегистрироваться
								</Link>

								<p>
									Нету аккаунта?
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault()
											setEnter(false)
										}}
										
									>
										Зарегестрироватся
									</a>
								</p>
							</form>
						</div>
					</Col>
					<Col xs={2}> </Col>
				</Row>
			</Container>
		</article>
				<Col xs={2}> </Col>
			</Row>
		</Container>
	)
}

export default Registration
