// Index file used to reduce code repetition and keep all the repeating info in one place

export const navText = [
  {
    name: 'about me',
    url: '#aboutMe',
  },
  {
    name: 'projects',
    url: '#projects',
  },
  {
    name: 'skills',
    url: '#skills',
  },
  {
    name: 'contact',
    url: '#contact',
  },
]

export const navIcons = [
  {
    name: 'aboutMe',
    url: '#aboutMe',
    fileUrl: '/aboutMeIcon.svg',
  },
  {
    name: 'projects',
    url: '#projects',
    fileUrl: '/projectsIcon.svg',
  },
  {
    name: 'skills',
    url: '#skills',
    fileUrl: '/skillsIcon.svg',
  },
  {
    name: 'contact',
    url: '#contact',
    fileUrl: '/contactIcon.svg',
  },
]

export const projects = [
  {
    name: 'calculator',
    description: 'calc app with dark mode',
    tools: 'html / css / js',
    imgUrl: '/calculatorProjectImage.png',
    liveUrl: 'https://calculator-app-mq64.onrender.com/',
    githubUrl: 'https://github.com/lazarevkristijan/Calculator-App',
  },
  {
    name: 'exotic exposure',
    description: 'luxury car website ~ pintrest',
    tools: 'html / css / js',
    imgUrl: '/exoticProjectImage.png',
    liveUrl: 'https://exotic-exposure.onrender.com/',
    githubUrl: 'https://github.com/lazarevkristijan/Exotic-Exposure',
  },
  {
    name: 'portfolio website',
    description: `the one you're looking at now`,
    tools: 'html / tailwind / react / next / ts / figma',
    imgUrl: '/thisProjectImage.png',
    liveUrl: '',
    githubUrl: 'https://github.com/lazarevkristijan/personal-next-js-portfolio',
  },
]

export const frontEndSkills = [
  {
    name: 'html',
    level: 'w-full',
  },
  {
    name: 'css',
    level: 'w-full',
  },
  {
    name: 'javascript',
    level: 'w-4/5',
  },
  {
    name: 'react',
    level: 'w-3/5',
  },
  {
    name: 'next.js',
    level: 'w-3/5',
  },
  {
    name: 'typescript',
    level: 'w-4/5',
  },
  {
    name: 'tailwind',
    level: 'w-4/5',
  },
]

export const backEndSkills = [
  {
    name: 'node.js',
    level: 'w-1/2',
  },
  {
    name: 'mongodb',
    level: 'w-1/2',
  },
  {
    name: 'express.js',
    level: 'w-1/2',
  },
]

export const designSkills = [
  {
    name: 'photoshop',
    level: 'w-full',
  },
  {
    name: 'illustrator',
    level: 'w-3/5',
  },
  {
    name: 'figma',
    level: 'w-4/5',
  },
]

export const certifications = [
  {
    name: 'the web developer bootcamp',
    issuer: 'udemy',
    issueDate: '06/2023',
    skillsLearnt: 'html/css/js/react/mongo/express',
    issuerLogo: '/udemy.png',
    linkToCertification:
      'https://www.udemy.com/certificate/UC-3dfb06f6-a5e1-475a-9589-3c1864d72bab/',
  },
  {
    name: 'the communication masterclass',
    issuer: 'udemy',
    issueDate: '06/2023',
    skillsLearnt: 'communication',
    issuerLogo: '/udemy.png',
    linkToCertification:
      'https://www.udemy.com/certificate/UC-8ccfeb90-84ac-42b7-882a-113efcd8bd4c/',
  },
  {
    name: 'management skills',
    issuer: 'udemy',
    issueDate: '05/2023',
    skillsLearnt: 'problem solving',
    issuerLogo: '/udemy.png',
    linkToCertification:
      'https://www.udemy.com/certificate/UC-e103957c-c162-4f32-90c5-f8ff86b00b94/',
  },
]

export const contactDetails = [
  {
    media: 'e-mail',
    link: 'lazarevkristijan@gmail.com',
  },
  {
    media: 'github',
    link: '/lazarevkristijan',
  },
  {
    media: 'linkedin',
    link: '/kristijanlazarev',
  },
]

export const flags = [
  {
    source: 'us.svg',
    alt: 'usa flag',
    width: 20,
    height: 20,
    className: 'inline ml-1 w-[20px] h-[20px]',
  },
  {
    source: 'de.svg',
    alt: 'germany flag',
    width: 20,
    height: 20,
    className: 'inline ml-1 w-[20px] h-[20px]',
  },
  {
    source: 'mk.svg',
    alt: 'macedonia flag',
    width: 20,
    height: 20,
    className: 'inline ml-1 w-[20px] h-[20px]',
  },
  {
    source: 'bg.svg',
    alt: 'bulgaria flag',
    width: 20,
    height: 20,
    className: 'inline ml-1 w-[20px] h-[20px]',
  },
  {
    source: 'rs.svg',
    alt: 'serbia flag',
    width: 20,
    height: 20,
    className: 'inline ml-1 w-[20px] h-[20px]',
  },
]
export const sectionMediaQueries =
  'w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] my-0 mx-auto xs:mt-[50px] xs:w-[90%]'

export const displayMediaQueries =
  'w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-full'

export const sectionTopDivStyles = 'pb-[50px] mainBackgroundPattern shadow-2xl'

export const skillsSubHeaderStyles =
  'smallCaps text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-center'

export const aboutTextStyles =
  'smallCaps text-[20px] xl:text-[18px] md:text-[18px] sm:text-[16px]'

export const hoverStyles = 'hover:scale-105 transition-all cursor-pointer'

export const contactLogoStyles = 'w-1/3 md:w-fit mx-auto my-auto md:mt-[10px]'
