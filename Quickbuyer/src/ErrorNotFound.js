import { Col, Container, Row } from "react-bootstrap";

export function ErrorNotFound() {
    return (
        <Container className="w-100 h-100 mt-5">
            <Row className="text-center justify-content-center w-100 h-100">
                <Col xs={8} className="text-center">
                    <h1 className="">Error NotFound</h1>
                    <h3>Проверьте коректность введенных данных</h3>
                </Col>
            </Row>
        </Container>
    )
}