import React from "react"
import { Container, Col, Image, Row } from "react-bootstrap"
import "./ImageWithText.scss"

const ImageWithText = ({ photoSrc, children, row = "row", isComfortPage }) => {
	return (
		<Container>
			<Row style={{ flexDirection: row }}>
				<Col xs={12} lg={6} order={1} className="infoblock">
					{children}
				</Col>
				<Col xs={12} lg={6} order={2} className="mt-5 imgblock">
					<div className={isComfortPage ? "comfort__image" : "shadow"}></div>
					<Image
						src={photoSrc}
						style={isComfortPage ? { display: "none" } : {}}
						className="image"
					></Image>
				</Col>
			</Row>
		</Container>
	)
}

export default ImageWithText
