import { Education, ProjectReference } from "../models/Portfolio";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";

interface Props {
    educations: Education[] | undefined;
}

export default function DisplayEducation({ educations }: Props) {
    const ConfigureIcon:any = ((type:string|undefined)=>{
        if(type && type.includes('data')){
            return <i className="bi bi-graph-up-arrow"></i>
        }else{
            return <i className="bi bi-github"></i>
        }
    });

    return (
        <>
            <Card className="border-0 shadow">
                <CardHeader className="bg-primary bg-gradient text-white">
                    <CardTitle >
                        Education
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <div>
                        {
                            educations?.map((education: Education,index) => {
                                return <div className="text-black">
                                    {index > 0 && <hr />}
                                    <Row>
                                        <Col md={4}>
                                            <div >
                                                <h5>{education?.collegeName}</h5>
                                            </div>
                                        </Col>
                                        <Col md={4} className=" text-center text-highlight">
                                            <div>
                                                <h5>  {education?.courseName} </h5>
                                            </div>
                                        </Col>
                                        <Col md={4} className="font-weight-bold text-end">
                                            <div>
                                                <h5> {education?.duration}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Table striped borderless hover>
                                        {
                                            education?.courseDescription.map((desc: string | undefined, descIndex: number) => {
                                                return <div key={descIndex}>
                                                    <tr>
                                                        <td>
                                                            {descIndex + 1}.{desc}
                                                        </td>
                                                    </tr>
                                                </div>
                                            })
                                        }
                                    </Table>
                                    <Row>
                                    { education?.projectLink && education?.projectLink.length > 0 && <h5>Project Link:</h5>} 
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }} className="text-black">
                                            {education?.projectLink?.map((projectRef: ProjectReference | undefined, index: number) => (
                                                <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                                    {projectRef && (
                                                        <>
                                                            {projectRef.linkDesc}{' '}
                                                            <Button target="bank" href={projectRef.linkUrl} variant="success" style={{ marginLeft: '0px' }}>
                                                                {projectRef.linkDesc}{' '} {ConfigureIcon(projectRef.icon)}
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            })
                        }
                    </div>
                </CardBody>
            </Card>
        </>
    )
}