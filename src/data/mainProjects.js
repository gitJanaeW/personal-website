import poachd from "../assets/poachd.jpg";
import rescueChow from "../assets/rescue-chow.jpg";
import showgo from "../assets/showgo.jpg";

const mainProjects = [
    {
        key: "poachd",
        name: "Poachd",
        link: "https://github.com/gitJanaeW/poach",
        img: poachd,
        imgAlt: "The recipe page of Poachd",
        technologies: "MERN | Reddis | Stripe",
        status: "In Development"
    },
    {
        key: "rescue-chow",
        name: "Rescue Chow",
        link: "/",
        img: rescueChow,
        imgAlt: "The landing page of Rescue Chow",
        technologies: "Mongoose | Express | React",
        status: "Deployed"
    },
    {
        key: "upgrad",
        name: "upGrad",
        link: "/",
        // Image sourced from: cdn.lifehack.org
        img: "../images/rescue-chow.png",
        imgAlt: "The landing page of upGrad",
        technologies: "Express | Sequelize | Handlebars",
        status: "Deployed"
    },
    {
        key: "showgo",
        name: "ShowGo",
        link: "/",
        img: showgo,
        imgAlt: "The landing page of ShowGo",
        technologies: "HTML | CSS | JavaScript",
        status: "Downloadable"
    },
];
export default mainProjects;