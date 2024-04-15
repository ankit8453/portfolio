import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Sandesh - Real Time Chat Application',
        description: "Led the development of ”Sandesh” a real-time chat application, utilizing Node.js, ReactJS, Socket.io, and MongoDB to enable seamless, instant messaging and data storage Implemented Socket.io for real-time communication, ensuring a responsive and interactive user experience",
        tools: ['Express', 'MongoDB', 'React', 'Redux', 'Socket.io', 'NodeJS', 'Chart.js', '6pp', 'axios', 'jsonwebtoken', 'cloudinary', 'multer'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'sandeshapp.vercel.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'Myntra Clone',
        description: 'Utilized React.js to create dynamic and responsive user interfaces, seamlessly integrating with a Node.js backend, and implementing Redux for efficient state management in the Myntra Clone project.Developed RESTful API endpoints to enable data exchange between the client and server in the Myntra Clone web application, optimizing performance and ensuring a smooth user experience.',
        tools: ['NodeJS', 'ReactJS', "Redux", "bootstrap", "express", "MySQL" ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Weather Application',
        description: '• Generated a Real-Time Weather Application using Node.js, EJS, CSS, and JavaScript, integrating a weather API to provide real-time and accurate weather information to users.',
        tools: ['NodeJS', 'CSS', 'EJS', 'BodyParser', 'Express','Openweather API'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: '',
        description: "",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },