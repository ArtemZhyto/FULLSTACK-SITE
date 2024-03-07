import BestUsers from "./Components/bestUsers/BestUsers.js"
import UploadImage from "./UploadImage.js"
import TextPhoto from "./Components/about/textPhoto.js"
import { useEffect, useState, useRef } from "react"
import "./reset.css"
import { Col, Container, Row, Breadcrumb, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import Buttons from "./Components/navbar/Buttons.js"
import Header from "./Components/header/Header.js"
import "./Loader.scss"
import BurgerPanel from "./Components/navbar/burger/burgerpanel/BurgerPanel.js"
import Burger from "./Components/navbar/burger/Burger.js"
import girl from "./pngImages/GLOBAL/girl.png"
import iphone from "./pngImages/GLOBAL/iphone.png"
import card from "./pngImages/GLOBAL/card.png"
import lightTheme from "./pngImages/GLOBAL/lightTheme.png"
import darkTheme from "./pngImages/GLOBAL/darkTheme.png"
import buttonPrevWhite from "./pngImages/prevbuttonlight.svg"
import prevButtonBlack from "./pngImages/GLOBAL/prevbuttondark.svg"
import Registration from "./Components/registration/Registration.js"
import Footer from "./Components/footer/Footer.js"

function App() {
	const inputRef = useRef(null)
	const [choosedFile, setFile] = useState("")
	const [theme, setTheme] = useState("light")
	const [headerInputVal, setHeaderInput] = useState("")
	const [isLoading, setLoading] = useState(false)

	const swithTheme = () => {
		setTheme((cur) => (cur === "light" ? "dark" : "light"))
		setLoading(true)
		setTimeout(() => setLoading(false), 500)
	}
	const search = (event) => {
		setHeaderInput(event.target.value)
	}
	return !isLoading ? (
		<div className="App" id={theme}>
			<Container>
				<header className="header">
					<Row className="navpanelll">
						<Col xs={0} sm={2}></Col>
						<Col xs={0} sm={2}></Col>
						<Col xs={0} sm={2}></Col>
						<Col className="ml-auto mr-0 header__buttons" xs={12} sm={6}>
							<Buttons
								headerInputVal={headerInputVal}
								search={search}
								switchTheme={swithTheme} // Была исправлена опечатка: switchTheme вместо swithTheme
							/>
						</Col>
					</Row>
					<Row>
						<Header />
					</Row>
				</header>
			</Container>
			<Burger switchTheme={swithTheme} />
			<TextPhoto
				text='   "Quick Buyer" – это ваш виртуальный торговый партнер, обещающий удивить вас разнообразием и качеством ассортимента. От модных трендов до технологических новинок, у нас есть все, что вам нужно. Наш интерфейс интуитивно понятен, а процесс оформления заказа максимально удобен.
Мы поощряем лояльность, предоставляя постоянным клиентам уникальные бонусы и специальные предложения. "Quick Buyer" - это не просто магазин, это сообщество любителей умных и быстрых покупок. Присоединяйтесь к нам, чтобы насладиться преимуществами современных онлайн-покупок'
				imagePath={girl}
				type="reversed-row"
			/>
			<TextPhoto
				text="    Мы гордимся тем, что предоставляем вам доступ к широкому и разнообразному ассортименту товаров. Мы стремимся удовлетворить любые ваши потребности, предлагая различные товары в каждой категории.
   У нас есть все, что вам может понадобиться - от электроники и моды до товаров для дома и развлечений. Наш магазин предлагает большой выбор необходимых вещей для вашего удобства. Добро пожаловать в мир богатого ассортимента и удовлетворения ваших потребностей!"
				imagePath={iphone}
				type="row"
				heading="Ассортимент товаров"
			/>
			<TextPhoto
				text='На нашем сайте ваш комфорт не ограничится лишь широким ассортиментом товаров. Мы также гарантируем надежные и удобные способы оплаты, делая ваш опыт покупок максимально беззаботным. С нашими надежными методами оплаты вы можете быть уверены в безопасности каждой транзакции. Мы ценим ваше доверие и предоставляем вам безопасность в первую очередь. Быстрые и эффективные транзакции обеспечивают немедленное удовлетворение от ваших покупок. Прозрачные условия без скрытых платежей обеспечивают ваше полное понимание процесса оплаты. Выбирайте "Quick Buyer" не только за разнообразие товаров, но и за уверенность в надежных и безопасных способах оплаты. Приготовьтесь к беззаботным покупкам вместе с нами!'
				imagePath={card}
				type="row"
				heading="Надежные способы оплаты"
			/>
			{theme === "light" ? (
				<>
					<TextPhoto
						text='   Мы понимаем, что ваш онлайн-шопинг должен быть комфортным и приятным. Поэтому мы предлагаем нечто большее, чем просто покупки.
	Наш сайт создан с учетом ваших предпочтений. У нас есть удобная опция смены темы, чтобы вы могли наслаждаться покупками в атмосфере, которая соответствует вашему настроению. Будь то светлая классика для утра или темные оттенки для вечернего шопинга - выбор за вами.
	   Простота в использовании сайта сочетается с приятными цветовыми решениями, чтобы каждое посещение "Quick Buyer" приносило вам удовольствие. Добро пожаловать в мир комфорта и стиля!'
						imagePath={lightTheme}
						type="row"
						heading="Комфорт"
						isTheme={true}
					/>
					<BestUsers arrow={buttonPrevWhite} />
				</>
			) : (
				<>
					<TextPhoto
						text='   Мы понимаем, что ваш онлайн-шопинг должен быть комфортным и приятным. Поэтому мы предлагаем нечто большее, чем просто покупки.
	Наш сайт создан с учетом ваших предпочтений. У нас есть удобная опция смены темы, чтобы вы могли наслаждаться покупками в атмосфере, которая соответствует вашему настроению. Будь то светлая классика для утра или темные оттенки для вечернего шопинга - выбор за вами.
	   Простота в использовании сайта сочетается с приятными цветовыми решениями, чтобы каждое посещение "Quick Buyer" приносило вам удовольствие. Добро пожаловать в мир комфорта и стиля!'
						imagePath={darkTheme}
						type="row"
						heading="Комфорт"
						isTheme={true}
					/>

					<BestUsers arrow={prevButtonBlack} />
				</>
			)}
			<Registration />
			<Footer />
		</div>
	) : (
		<div className="App App__loader" id={theme}>
			<div className="loader"></div>
		</div>
	)
}

export default App
