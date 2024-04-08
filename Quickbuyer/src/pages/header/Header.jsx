import styles from "./Header.module.scss"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={6}>
					hi
				</Col>
				<Col xs={12} md={6}>
					hi
				</Col>
        </Row>
		</Container>
	)
}

export default Header
