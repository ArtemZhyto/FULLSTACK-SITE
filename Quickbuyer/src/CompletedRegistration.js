import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"

export default function CompletedRegistration() {
    const profileInfo = useParams()

    useEffect(() => {
        axios
            .post(
                `https://localhost:34673/registration/${profileInfo.password}/${profileInfo.mail}`,
                { profileInfo }
            )
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }, [profileInfo]) // Зависимость добавлена сюда

    return (    
        <Container>
            <Row>
                <Col className="text-center" xs={12}>
                    <h1 className="fz-5">
                        Регистрация прошла успешно. Добро пожаловать в Quickbuyer! Ваша
                        почта: {profileInfo.mail}
                    </h1>

                </Col>
            </Row>
        </Container>
    )
}