// Index file used to reduce code repetition and keep all the repeating info in one place

export const navText = [
  {
    name: "home",
  },
  {
    name: "about me",
    sectionName: "aboutMe",
  },
  {
    name: "experience",
  },
  {
    name: "projects",
  },
  {
    name: "skills",
  },
  {
    name: "contact",
  },
]

export const navIcons = [
  {
    name: "home",
  },
  {
    name: "about_me",
    url: "aboutMe",
  },
  {
    name: "experience",
  },
  {
    name: "projects",
  },
  {
    name: "skills",
  },
  {
    name: "contact",
  },
]

export const projects = [
  {
    name: "rituale",
    description: "habits app",
    tools:
      "react / ts / nodde.js / postgresql / jest / photoshop / illustrator",
    imgUrl: "/projectImages/ritualeProjectImage.jpg",
    liveUrl: "https://www.rituale.digital",
    githubUrl: "https://github.com/lazarevkristijan/rituale-app",
  },
  {
    name: "admin dashboard",
    tools: "react / ts / figma / photoshop / illustrator",
    imgUrl: "/projectImages/dashboardProjectImage.jpg",
    liveUrl: "https://iphone-sales-dashboard.vercel.app/",
    githubUrl: "https://github.com/lazarevkristijan/sales-dashboard",
  },
  {
    name: "portfolio website",
    tools: "react / ts / next / figma / photoshop / illustrator",
    imgUrl: "/projectImages/thisProjectImage.png",
    liveUrl: "https://www.kristijanlazarev.com/",
    githubUrl: "https://github.com/lazarevkristijan/personal-next-js-portfolio",
  },
  {
    name: "valentine invitation",
    tools: "php / html / css / js",
    imgUrl: "/projectImages/valentineProjectImage.jpg",
    liveUrl: "https://valentine-invitation.vercel.app",
    githubUrl: "https://github.com/lazarevkristijan/valentine-invitation",
  },
  {
    name: "exotic exposure",
    tools: "html / css / js / photoshop",
    imgUrl: "/projectImages/exoticProjectImage.jpg",
    liveUrl: "https://exotic-exposure.onrender.com/",
    githubUrl: "https://github.com/lazarevkristijan/Exotic-Exposure",
  },
]

export const frontEndSkills = [
  {
    name: "html",
    level: "w-full",
  },
  {
    name: "css",
    level: "w-full",
  },
  {
    name: "javascript",
    level: "w-full",
  },
  {
    name: "react",
    level: "w-full",
  },
  {
    name: "typescript",
    level: "w-4/5",
  },
  {
    name: "wordpress",
    level: "w-4/5",
  },
  {
    name: "react native",
    level: "w-3/5",
  },
  {
    name: "jest",
    level: "w-3/5",
  },
]

export const backEndSkills = [
  {
    name: "node.js",
    level: "w-full",
  },
  {
    name: "express.js",
    level: "w-full",
  },
  {
    name: "postgresql",
    level: "w-4/5",
  },
  {
    name: "php",
    level: "w-4/5",
  },
]

export const designSkills = [
  {
    name: "photoshop",
    level: "w-full",
  },
  {
    name: "figma",
    level: "w-4/5",
  },
  {
    name: "illustrator",
    level: "w-3/5",
  },
]

export const certifications = [
  {
    name: "open source",
    issuer: "ibm",
    issueDate: "02/2024",
    skillsLearnt: "open source / cloud computing / ai",
    issuerLogo: "/otherImages/ibm.png",
    linkToCertification:
      "https://www.credly.com/badges/199bb343-5f09-4915-b287-e7b4b81c2458/public_url",
  },
  {
    name: "web development",
    issuer: "ibm",
    issueDate: "11/2023",
    skillsLearnt: "js / react / sql / testing",
    issuerLogo: "/otherImages/ibm.png",
    linkToCertification:
      "https://www.credly.com/badges/cf037a67-4565-4ecb-a0d3-7addf95875b0/public_url",
  },

  {
    name: "the web developer bootcamp",
    issuer: "udemy",
    issueDate: "06/2023",
    skillsLearnt: "html / css / js / react / mongo / node",
    issuerLogo: "/otherImages/udemy.png",
    linkToCertification:
      "https://www.udemy.com/certificate/UC-3dfb06f6-a5e1-475a-9589-3c1864d72bab/",
  },
  {
    name: "the communication masterclass",
    issuer: "udemy",
    issueDate: "06/2023",
    skillsLearnt: "communication",
    issuerLogo: "/otherImages/udemy.png",
    linkToCertification:
      "https://www.udemy.com/certificate/UC-8ccfeb90-84ac-42b7-882a-113efcd8bd4c/",
  },
]

export const contactDetails = [
  {
    media: "e-mail",
    link: "lazarevkristijan@gmail.com",
  },
  {
    media: "github",
    link: "/lazarevkristijan",
  },
  {
    media: "linkedin",
    link: "/kristijanlazarev",
  },
]

export const flags = [
  {
    source: "/flags/us.svg",
    alt: "usa flag",
  },
  {
    source: "/flags/de.svg",
    alt: "germany flag",
  },
  {
    source: "/flags/mk.svg",
    alt: "macedonia flag",
  },
  {
    source: "/flags/bg.svg",
    alt: "bulgaria flag",
  },
  {
    source: "/flags/rs.svg",
    alt: "serbia flag",
  },
]

export const heroTags = [
  {
    name: "web engineering",
  },
  {
    name: "graphic design",
  },
  {
    name: "technical support",
  },
]

export const workExperiences = [
  {
    title: "MENTEE",
    imgSrc: "ibmC.png",
    company: "ibm",
    periodFrom: "nov 2023",
    periodTo: "present",
    employmentType: "part time",
    location: "bulgaria, sofia",
    locationType: "remote",
    skills: "business, communication, software, hardware, software development",
  },
  {
    title: "LEAD DEVELOPER",
    imgSrc: "alias.png",
    company: "alias",
    periodFrom: "oct 2023",
    periodTo: "present",
    employmentType: "full time",
    location: "bulgaria, sofia",
    locationType: "remote",
    skills:
      "react, typescript, node.js, postgresql, photoshop, illustrator, jest",
  },
  {
    title: "INFRASTRUCTURE ENGINEER",
    imgSrc: "kariox.png",
    company: "kariox",
    periodFrom: "oct 2023",
    periodTo: "jan 2024",
    employmentType: "full time",
    location: "bulgaria, sofia",
    locationType: "remote",
    skills: "html, css, js, web hosting, qa testing, infrastructure management",
  },
  {
    title: "UX/UI ANALYST",
    imgSrc: "cv-template.jfif",
    company: "cv-template",
    periodFrom: "may 2023",
    periodTo: "aug 2023",
    employmentType: "internship",
    location: "google meet",
    locationType: "remote",
    skills: "UX, UI, problem solving, communication",
  },
  {
    title: "SALES AGENT",
    imgSrc: "acetom.png",
    company: "acetom",
    periodFrom: "dec 2022",
    periodTo: "mar 2023",
    employmentType: "full time",
    location: "bulgaria, sofia",
    locationType: "on site",
    skills: "crm, communication, business, sales",
  },
  {
    title: "ELECTRICIAN",
    imgSrc: "electrician.jpg",
    company: "self employed",
    periodFrom: "jan 2019",
    periodTo: "aug 2022",
    employmentType: "full time",
    location: "macedonia, radovish",
    locationType: "on site",
    skills:
      "problem solving, communication, business, sales, electrical engineering",
  },
]

export const sectionMediaQueries =
  "w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] my-0 mx-auto xs:mt-[50px] xs:w-[90%]"

export const displayMediaQueries =
  "w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-full"

export const sectionTopDivStyles = "pb-[50px] mainBackgroundPattern shadow-2xl"

export const skillsSubHeaderStyles =
  "smallCaps text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-center"

export const aboutTextStyles =
  "smallCaps text-[20px] xl:text-[18px] sm:text-[16px]"

export const hoverStyles = "hover:scale-105 transition-all cursor-pointer"

export const contactLogoStyles = "w-1/3 md:w-fit mx-auto my-auto md:mt-[10px]"

export const aboutMoreText =
  "i am overfilled with enthusiasm plus craving for success and have had a deep attraction towards the world of computers since the age of 7, today it's the only thing i've devoted 20,000+ hours of my life to, unless sleeping counts of course."
