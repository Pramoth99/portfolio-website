import { Card, CardBody, CardHeader, CardTitle, Table } from "react-bootstrap";
import { Skills } from "../models/Portfolio";

interface Props{
    skills:Skills | undefined;
}

export default function Skill({skills}:Props) {
    return (
        <Card className="border-0 shadow">
            <CardHeader className="bg-primary bg-gradient text-white">
                <CardTitle>
                    Technical Skills
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Programming</td>
                            <td>{skills && skills.programming}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Backend & Web</td>
                            <td>{skills &&  skills.backendWeb}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cloud & Services</td>
                            <td>{skills && skills.cloudServices}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Database</td>
                            <td>{skills && skills.database}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Design Patterns</td>
                            <td>{skills && skills.designPatterns}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Productivity Tools</td>
                            <td>{skills && skills.productivityTools}</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}