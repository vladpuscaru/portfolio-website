import MarioCloneImg from "../../images/p1.gif";
import ProjectTestImg from "../../images/p2.gif";

const tags = {
    GAME: "Game",
    WEB: "Web"
}

export const technologies = {
    ASM: {text: "Assembly", color: "#607274"},
    C: {text: "C", color: "#31304D"},
    CSHARP: {text: "C#", color: "#1f8677"},
    CPP: {text: "C++", color: "#65B741"},
    SFML: {text: "SFML", color: "#EAD7BB"},
    OPENGL: {text: "OpenGL", color: "#495E57"},
    REACTJS: {text: "ReactJs", color: "#86A789"},
    AWS: {text: "AWS", color: "#FF9800"},
    JAVASCRIPT: {text: "Javascript", color: "#FFC436"},
    TYPESCRIPT: {text: "TypeScript", color: "#0174BE"},
    NODEJS: {text: "NodeJs", color: "#00337C"},
    JAVA: {text: "Java", color: "#BF3131"},
    HTML: {text: "HTML", color: "#B31312"},
    CSS: {text: "CSS", color: "#E7BCDE"},
    UNITY: {text: "Unity", color: "#1F4172"},
    SPRINGBOOT: {text: "Spring Boot", color: "#2a721f"},
    DOCKER: {text: "Docker", color: "#007b6f"},
    WORDPRESS: {text: "WordPress", color: "#a23d79"},
    PHP: {text: "PHP", color: "#273814"}
}

export const getTags = () => Object.keys(tags).map(k => tags[k]);

export const getProjectTitle = (id) => projects.find(p => p.id === id).title;

export const getProjects = (filterText, filterTags) => {
    if (!filterText && !filterTags) {
        return projects;
    }

    if (!filterTags || filterTags.length === 0) {
        filterTags = getTags();
    }

    return projects
        .filter(project => project.title.toLowerCase().includes(filterText.toLowerCase()))
        .filter(project => filterTags.some(fTag => project.tags.includes(fTag)));
};


const projects = [
    {
        "id": 0,
        "title": "Mario Clone",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "thumbnail": MarioCloneImg,
        "tags": [tags.GAME]
    },
    {
        "id": 1,
        "title": "This is It",
        "technologies": [technologies.C, technologies.ASM, technologies.JAVA],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "thumbnail": ProjectTestImg,
        "tags": [tags.WEB]
    },
    {
        "id": 2,
        "title": "Test Proj",
        "technologies": [technologies.TYPESCRIPT, technologies.AWS],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        "thumbnail": ProjectTestImg,
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 2,
        "title": "Test Proj",
        "technologies": [technologies.TYPESCRIPT, technologies.AWS],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        "thumbnail": ProjectTestImg,
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 2,
        "title": "Test Proj",
        "technologies": [technologies.TYPESCRIPT, technologies.AWS],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        "thumbnail": ProjectTestImg,
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 2,
        "title": "Test Proj",
        "technologies": [technologies.TYPESCRIPT, technologies.AWS],
        "github": "google.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        "thumbnail": ProjectTestImg,
        "tags": [tags.GAME, tags.WEB]
    }
];