export interface Portfolio {
    summary: string;
    skills: Skills;
    professionalExperience: Experience[];
    personalProjects: PersonalProject[];
    education:Education[];
    certifications:Certification[];
}

export interface Skills {
    programming: string;
    backendWeb: string;
    cloudServices: string;
    database: string;
    designPatterns: string;
    productivityTools: string;
}

export interface Experience {
    jobTitle: string;
    companyName: string;
    duration: string;
    productName: string;
    projectDescription: string[];
    projectLink: ProjectReference[] | undefined;
}

export interface ProjectReference{
    linkType:string;
    icon:string;
    linkName:string;
    linkDesc:string;
    linkUrl:string;
}

export interface PersonalProject {
    projectName: string;
    projectDescription: string[];
    projectLink: ProjectReference[] | undefined;
}

export interface Education {
    collegeName: string;
    courseName: string;
    duration: string;
    courseDescription:string[];
    projectLink: ProjectReference[] | undefined;
}

export interface Certification {
    certificationDescription:string;
    icon:string;
    certificationName: string;
    certificationLink: string;

}