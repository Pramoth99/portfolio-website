import { Experience, ProjectReference } from "../models/Portfolio";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
    experiences: Experience[] | undefined;
}

export default function ProfessionalExperience({ experiences }: Props) {
    const ConfigureIcon:any = ((type:string|undefined)=>{
        if(type && type.includes('android')){
            return <i className="bi bi-android2"></i>
        }else if (type && type.includes('android')){
            return <i className="bi bi-apple"></i>
        }else {

        }
    });
    return (
        <>
            <Card className="border-0 shadow">
                <CardHeader className="bg-primary bg-gradient text-white">
                    <CardTitle >
                        Professional Experience
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    {
                        experiences?.map((expirence: Experience | undefined, index) => {
                            return <div className="text-black">
                                {index > 0 && <hr />}
                                <Row>
                                    <Col md={4}>
                                        <div>
                                            <h5>  {expirence?.jobTitle} </h5>
                                        </div>
                                    </Col>
                                    <Col md={4} className=" text-center text-highlight">
                                        <div >
                                            <h5>{expirence?.companyName}</h5>
                                        </div>
                                    </Col>
                                    <Col md={4} className="font-weight-bold text-end">
                                        <div>
                                            <h5> {expirence?.duration}</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="pt-2">
                                    <h6 style={{ textDecorationLine: 'underline' }}>{expirence?.productName}</h6>
                                </div>
                                <div>
                                    <Table striped borderless hover>
                                        {
                                            expirence?.projectDescription.map((desc: string | undefined, descIndex: number) => {
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
                                         { expirence?.projectLink && expirence?.projectLink?.length > 0 && <h5>Project Link:</h5>} 
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {expirence?.projectLink?.map((projectRef: ProjectReference | undefined, index: number) => (
                                                <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                                    {projectRef && (
                                                        <> 
                                                            {projectRef.linkDesc}{' '}
                                                            <Button target="blank" href={projectRef.linkUrl} variant="success" style={{ marginLeft: '0px' }}>
                                                                {projectRef.linkName} {ConfigureIcon(projectRef.icon)}
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        })
                    }
                </CardBody>
            </Card>
        </>
    )
}