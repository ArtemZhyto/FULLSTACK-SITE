import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./footerGlobal.scss"

export default function Footer() {
    return (<footer className="footer">
        <Container>
            <Row>
            <Col xs={2}></Col>
                <Col xs={8} className="text-center">
                    <div className="footer__links d-flex justify-content-between mb-5">
                        <Link href="">Главная</Link>
                        <Link href="">Регистрация</Link>
                        <Link href="">Покупки</Link>
                        <Link href="">Профиль</Link>
                    </div>
                    <p>© 2023-2024. Quick Buyer. Все права защищены ver 0.0.6</p>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    </footer>)
}