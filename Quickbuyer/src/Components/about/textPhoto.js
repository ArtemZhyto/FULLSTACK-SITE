import { Row, Col, Image, Container } from "react-bootstrap"
// import "C:\Users\User\OneDrive\Рабочий стол\quickbuyer\src\pngImages\GLOBAL\man.png"
import "./textPhotoGlobal.scss"
function About({ text, imagePath, type, heading, isTheme }) {
	if (!isTheme) {
		if (type === "row") {
			return (
				<Container>
					<article>
						<Row className="textPhoto">
							<Col
								xs={12}
								lg={6}
								className="textPhoto__info subtitle mb-5 mb-lg-0"
							>
								{heading ? <h1 className="title">{heading}</h1> : null}
								{text}
							</Col>
							<Col xs={12} lg={6} className="textPhoto__imgblock box-shadow">
								<Image className="textPhoto__img" src={imagePath} />
							</Col>
						</Row>
					</article>
				</Container>
			)
		}
		if ((type = "row-reversed")) {
			return (
				<Container>
					<article>
						<Row className="textPhoto">
							<Col xs={12} lg={6} className="textPhoto__imgblock box-shadow">
								<Image className="textPhoto__img" src={imagePath} />
							</Col>
							<Col
								xs={12}
								lg={6}
								className="textPhoto__info subtitle mb-5 mb-lg-0"
							>
								{heading ? <h1 className="title">{heading}</h1> : null}
								{text}
							</Col>
						</Row>
					</article>
				</Container>
			)
		}
	} else {
		return (
			<Container>
				<article>
					<Row className="textPhoto">
						<Col
							xs={12}
							lg={6}
							className="textPhoto__info subtitle mb-5 mb-lg-0"
						>
							{heading ? <h1 className="title">{heading}</h1> : null}
							{text}
						</Col>
						<Col xs={12} lg={6} className="textPhoto__imgblock">
							<Image className="textPhoto__img" src={imagePath} />
						</Col>
					</Row>
				</article>
			</Container>
		)
	}
}

export default About
