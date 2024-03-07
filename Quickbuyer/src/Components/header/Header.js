import { Image } from "react-bootstrap"
import man from "../../pngImages/GLOBAL/man.png"
import { Col, Container } from "react-bootstrap"
import "./globalHeader.scss"

function Header() {
	return (
		<>
				<Col xs={12} lg={5} className="header__info">
					<p className="header__title title mb-3 mt-4">Эмоции в каждом товаре</p>
	
					<p className="header__subtitle subtitle fz-sm-100">
						Ваш лучший адрес для шопинга в онлайне
					</p>
					<button className=" mt-4 header__button btn">Начать</button>
				</Col>
				<Col xs={12} lg={7} className="header__image mt-3">
					<Image src={man} className="header__man" fluid />
				</Col>
		</>
	)
}

export default Header
