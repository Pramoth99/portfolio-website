import { Card, CardHeader, CardTitle, Col, Container, Row } from "react-bootstrap";
import NavBar from "../layout/NavBar";

export default function ProjectPage() {
    return (
        <>
            <NavBar summaryCard={undefined} skillsCard={undefined} ProfessionExpCard={undefined} PersonalProjectCard={undefined} educationCard={undefined} certification={undefined} />
            <Container className="mx-auto">
                <Row className="pt-5">
                    <Col >
                        <Card className="border-0 shadow mx-3 mt-5">
                            <CardHeader className="bg-gradient bg-primary">
                                <CardTitle className="text-white">
                                    Project Page
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}