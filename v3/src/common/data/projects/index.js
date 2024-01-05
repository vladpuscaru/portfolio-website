import pNoPicture from "../../images/p_nopicture.png";
import p10 from "../../images/p1_0.png";
import p11 from "../../images/p1_1.png";
import p12 from "../../images/p1_2.png";
import p13 from "../../images/p1_3.gif";
import p14 from "../../images/p1_4.gif";
import p20 from "../../images/p2_0.png";
import p21 from "../../images/p2_1.png";
import p22 from "../../images/p2_2.gif";
import p40 from "../../images/p4_0.png";
import p60 from "../../images/p6_0.png";
import p61 from "../../images/p6_1.png";
import p80 from "../../images/p8_0.png";
import p81 from "../../images/p8_1.png";
import p82 from "../../images/p8_2.gif";

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
    PHP: {text: "PHP", color: "#273814"},
    WFORMS: {text: "Window Forms", color: "#6d8dff"}
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
        "title": "Super Mario Bros. (Clone)",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/comp_4300/tree/main/ass3",
        "description": "" +
            "" +
            "",
        "slug": "A classic NES game programmed in C++, using the SFML library and a custom-built engine based on ECS.",
        "thumbnail": p10,
        "images": [p13, p11, p12, p10, p14],
        "tags": [tags.GAME]
    },
    {
        "id": 1,
        "title": "Shape Wars (Clone)",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/comp_4300/tree/main/ass2",
        "description": "" +
            "" +
            "",
        "slug": "Top down shooter style of game, mimicking a popular game.",
        "thumbnail": p20,
        "images": [p22, p21, p20],
        "tags": [tags.GAME]
    },
    {
        "id": 2,
        "title": "Arkanoid (Clone)",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/sfml.arkanoid",
        "description": "" +
            "" +
            "",
        "slug": "My take on the classic arkanoid/breakout game, with custom made sprites.",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 10,
        "title": "Robot Arm Kinematics",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/algorithms-visualized",
        "description": "" +
            "" +
            "",
        "slug": "Forward and inverse kinematics on a robot arm.",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.GAME]
    },
    {
        "id": 8,
        "title": "Algorithms Visualized - Web version",
        "technologies": [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
        "github": "https://github.com/vladpuscaru/algorithms-visualized",
        "description": "" +
            "" +
            "",
        "slug": "Pathfinding algorithm visualized, with animation.",
        "thumbnail": p80,
        "images": [p82, p81, p82],
        "tags": [tags.WEB]
    },
    {
        "id": 9,
        "title": "Algorithms Visualized - C++ version",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/algorithms-visualized",
        "description": "" +
            "" +
            "",
        "slug": "Pathfinding algorithm visualized, C++ version.",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.GAME]
    },
    {
        "id": 3,
        "title": "Airplanes",
        "technologies": [technologies.NODEJS, technologies.JAVASCRIPT, technologies.HTML, technologies.CSS],
        "github": "https://github.com/vladpuscaru/airplanes-game",
        "description": "" +
            "" +
            "",
        "slug": "Multiplayer, online game over websockets",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 4,
        "title": "Maze Game",
        "technologies": [technologies.REACTJS, technologies.HTML, technologies.CSS],
        "github": "https://github.com/vladpuscaru/-react--hidden-maze-game",
        "description": "" +
            "" +
            "",
        "slug": "Find your way through the maze (static or randomly generated)",
        "thumbnail": p40,
        "images": [p40],
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 5,
        "title": "SVG Editor",
        "technologies": [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
        "github": "https://github.com/vladpuscaru/svg-editor",
        "description": "" +
            "" +
            "",
        "slug": "Web SVG editor. Complete with svg code generation",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.WEB]
    },
    {
        "id": 6,
        "title": "WF Snake",
        "technologies": [technologies.CSHARP, technologies.WFORMS],
        "github": "https://github.com/vladpuscaru/-WF-Snake",
        "description": "" +
            "" +
            "",
        "slug": "Snake made using Windows Forms. (First time exploring graphics outside of terminal).",
        "thumbnail": p60,
        "images": [p61, p60],
        "tags": [tags.GAME]
    },
    {
        "id": 7,
        "title": "Chess",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/chess",
        "description": "" +
            "" +
            "",
        "slug": "My take on the classic chess game, with custom-made graphics.",
        "thumbnail": pNoPicture,
        "images": [pNoPicture],
        "tags": [tags.GAME]
    },
];