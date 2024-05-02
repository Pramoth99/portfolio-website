import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

interface Props {
    title:string;
    description: string | undefined;
}

export default function Summary({ title,description }: Props) {
    return (
        <Card className="border-0 shadow">
            <CardHeader className="bg-primary bg-gradient text-white">
                <CardTitle >
                    {title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
        </Card>
    )
}