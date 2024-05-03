import { useEffect, useRef, useState } from 'react'
import './styles.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import Skills from '../segments/Skills'
import jsonData from '../assets/data.json';
import { Portfolio } from '../models/Portfolio'
import Summary from '../segments/Summary'
import ProfessionalExperience from '../segments/ProfessionalExperience'
import PersonalProjects from '../segments/PersonalProjects'
import DisplayEducation from '../segments/Education'
import Certifications from '../segments/Certification'
// import bg from "../public/assets/portfolio-bg.jpg"

function App() {
  const [portfolioData, setData] = useState<Portfolio | undefined>(undefined)
  useEffect(() => {
    if (!portfolioData) {
      const loadData = () => JSON.parse(JSON.stringify(jsonData));
      setData(loadData);
    }
  })
  const professtionalExp = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const personalProject = useRef<HTMLDivElement>(null);
  const displayEducation = useRef<HTMLDivElement>(null);
  const certification = useRef<HTMLDivElement>(null);

  return (
    <div>
      <NavBar summaryCard={summary}
        ProfessionExpCard={professtionalExp}
        skillsCard={skills}
        educationCard={displayEducation}
        PersonalProjectCard={personalProject}
        certification={certification} />
      <Container>
        <Row>
          <Col md={10} sm={8} lg={10} className='mx-auto'>
            <div ref={summary} className='pt-5 mt-5'>
              <Summary title={'Summary'} description={portfolioData?.summary} />
            </div>
            <div ref={skills} className='pt-5'>
              <Skills skills={portfolioData?.skills} />
            </div>
            <div ref={certification} className='pt-5'>
              <Certifications certifications={portfolioData?.certifications} />
            </div>
            <div ref={displayEducation} className='pt-5'>
              <DisplayEducation educations={portfolioData?.education} />
            </div>
            <div ref={personalProject} className='pt-5'>
              <PersonalProjects personalProject={portfolioData?.personalProjects} />
            </div>
            <div ref={professtionalExp} className='pt-5  pb-5'>
              <ProfessionalExperience experiences={portfolioData?.professionalExperience} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
