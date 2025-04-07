import React, { RefObject } from "react";
import { Container, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import profilePhoto from "../public/assets/Pramoth.jpg"
import { useNavigate } from "react-router-dom";

interface Props {
    summaryCard: React.RefObject<HTMLDivElement> | undefined;
    skillsCard: React.RefObject<HTMLDivElement> | undefined;
    ProfessionExpCard: React.RefObject<HTMLDivElement> | undefined;
    PersonalProjectCard: React.RefObject<HTMLDivElement> | undefined;
    educationCard: React.RefObject<HTMLDivElement> | undefined;
    certification: React.RefObject<HTMLDivElement> | undefined;
}

export default function NavBar(cards: Props) {
    const HandleClick = (obj: RefObject<HTMLDivElement> | undefined) => {
        if (obj && obj.current) {
            obj.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    let navigate = useNavigate();
    const TakeHome = (() => {
        let path = '/portfolio/';
        navigate(path);
    });

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
            <Container>
                <Nav className="">
                    <Image src={profilePhoto} onClick={TakeHome} alt="50*50" width="40" height="40" roundedCircle></Image>
                    <NavbarBrand className="">
                        <div className="mx-3" onClick={TakeHome}>
                           Pramoth Varsan Madhavan
                        </div>
                    </NavbarBrand>
                    {cards.summaryCard && <Nav.Link href="#home" onClick={() => HandleClick(cards.summaryCard)} className="text-white pt-2"> Summary </Nav.Link>}
                    {cards.skillsCard && <Nav.Link href="#home" onClick={() => HandleClick(cards.skillsCard)} className="text-white pt-2"> Technical Skills </Nav.Link>}
                    {cards.ProfessionExpCard && <Nav.Link href="#home" onClick={() => HandleClick(cards.ProfessionExpCard)} className="text-white pt-2"> Professional Experience </Nav.Link>}
                    {cards.PersonalProjectCard && <Nav.Link href="#home" onClick={() => HandleClick(cards.PersonalProjectCard)} className="text-white pt-2"> Personal Projects </Nav.Link>}
                    {cards.certification && <Nav.Link href="#home" onClick={() => HandleClick(cards.certification)} className="text-white pt-2"> Certifications </Nav.Link>}
                    {cards.educationCard && <Nav.Link href="#home" onClick={() => HandleClick(cards.educationCard)} className="text-white pt-2"> Education </Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    )
} 
