import { Button, Card, CardBody, CardHeader, CardTitle, Row } from "react-bootstrap";
import { Certification } from "../models/Portfolio";

interface Props {
    certifications: Certification[] | undefined;
}

export default function Certifications({ certifications }: Props) {
const ConfigureIcon:any = ((type:string|undefined)=>{
    if(type && type.includes('linkedin')){
        return <i className="bi bi-linkedin"></i>
    }else{
        return <i className="bi bi-file-play-fill"></i>
    }
});

    return (
        <div>
            <Card className="border-0 shadow">
                <CardHeader className="bg-primary bg-gradient text-white">
                    <CardTitle>
                        Certifications
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {certifications?.map((cert: Certification | undefined, index: number) => (
                                <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                    {cert && (
                                        <>
                                            {cert?.certificationDescription}{' '}
                                            <Button target="bank" href={cert.certificationLink} variant="success" style={{ marginLeft: '0px' }}>
                                                {cert.certificationName} {ConfigureIcon(cert.icon)}
                                            </Button>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}