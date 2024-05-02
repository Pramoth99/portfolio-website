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
                            <td>Software and Dev Tools</td>
                            <td>{skills &&  skills.software}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Frameworks</td>
                            <td>{skills && skills.frameworks}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Server & Database</td>
                            <td>{skills && skills.database}</td>
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