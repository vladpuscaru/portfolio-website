import pNoPicture from "./images/p_nopicture.png";
import p00 from "./images/p0_0.png";
import p01 from "./images/p0_1.gif";
import p02 from "./images/p0_2.gif";
import p10 from "./images/p1_0.png";
import p11 from "./images/p1_1.png";
import p12 from "./images/p1_2.png";
import p13 from "./images/p1_3.gif";
import p14 from "./images/p1_4.gif";
import p20 from "./images/p2_0.png";
import p21 from "./images/p2_1.png";
import p22 from "./images/p2_2.gif";
import p30 from "./images/p3_0.png";
import p31 from "./images/p3_1.png";
import p32 from "./images/p3_2.png";
import p33 from "./images/p3_3.png";
import p34 from "./images/p3_4.png";
import p35 from "./images/p3_5.png";
import p36 from "./images/p3_6.gif";
import p37 from "./images/p3_7.gif";
import p38 from "./images/p3_8.gif";
import p40 from "./images/p4_0.png";
import p50 from "./images/p5_0.png";
import p51 from "./images/p5_1.png";
import p52 from "./images/p5_2.png";
import p53 from "./images/p5_3.gif";
import p54 from "./images/p5_4.gif";
import p60 from "./images/p6_0.png";
import p61 from "./images/p6_1.png";
import p80 from "./images/p8_0.png";
import p81 from "./images/p8_1.png";
import p82 from "./images/p8_2.gif";
import p90 from "./images/p9_0.png";
import p91 from "./images/p9_1.gif";
import p92 from "./images/p9_2.gif";
import p93 from "./images/p9_3.gif";
import p100 from "./images/p10_0.png";
import p101 from "./images/p10_1.gif";
import p102 from "./images/p10_2.gif";
import p1010 from "./images/p101_0.png";
import p1011 from "./images/p101_1.png";
import p1012 from "./images/p101_2.png";
import p1013 from "./images/p101_3.png";
import p1020 from "./images/p102_0.png";
import p1021 from "./images/p102_1.png";
import p1022 from "./images/p102_2.png";
import p1023 from "./images/p102_3.png";
import p1024 from "./images/p102_4.png";
import p1025 from "./images/p102_5.png";
import p1030 from "./images/p103_0.png";
import p1031 from "./images/p103_1.png";
import p1032 from "./images/p103_2.png";
import p1033 from "./images/p103_3.png";
import p1034 from "./images/p103_4.png";
import p1035 from "./images/p103_5.png";
import p1036 from "./images/p103_6.png";
import p1037 from "./images/p103_7.png";
import p1038 from "./images/p103_8.png";
import p1039 from "./images/p103_9.png";
import p10310 from "./images/p103_10.png";
import p10311 from "./images/p103_11.png";
import p10312 from "./images/p103_12.png";
import p10313 from "./images/p103_13.png";
import p10314 from "./images/p103_14.png";
import p10315 from "./images/p103_15.png";
import p10316 from "./images/p103_16.png";
import p10317 from "./images/p103_17.png";
import p10318 from "./images/p103_18.png";
import p10319 from "./images/p103_19.png";


import iconAWS from "../../common/icons/icon-aws.svg";
import iconCPP from "../../common/icons/icon-cpp.svg";

const tags = {
    GAME: "Game",
    WEB: "Web"
}

export const technologies = {
    ASM: {text: "Assembly", color: "#607274"},
    C: {text: "C", color: "#31304D"},
    CSHARP: {text: "C#", color: "#1f8677", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
    CPP: {text: "C++", color: "#65B741", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
    SFML: {text: "SFML", color: "#EAD7BB"},
    OPENGL: {text: "OpenGL", color: "#495E57", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg"},
    REACTJS: {text: "ReactJs", color: "#86A789", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    AWS: {text: "AWS", color: "#FF9800", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"},
    JAVASCRIPT: {text: "Javascript", color: "#FFC436", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    TYPESCRIPT: {text: "TypeScript", color: "#0174BE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
    NODEJS: {text: "NodeJs", color: "#00337C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},
    JAVA: {text: "Java", color: "#BF3131", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
    HTML: {text: "HTML", color: "#B31312", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
    CSS: {text: "CSS", color: "#E7BCDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    UNITY: {text: "Unity", color: "#1F4172", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"},
    SPRINGBOOT: {text: "Spring Boot", color: "#2a721f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"},
    DOCKER: {text: "Docker", color: "#007b6f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"},
    WORDPRESS: {text: "WordPress", color: "#a23d79", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"},
    PHP: {text: "PHP", color: "#273814", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},
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
        "id": 101,
        "title": "OpenGL Raytracer",
        "technologies": [technologies.OPENGL, technologies.CSHARP],
        "github": "https://github.com/vladpuscaru/showcase.raytracer",
        "description": "" +
            "" +
            "",
        "slug": "OpenTK C# program implementing the ray tracing rendering algorithm",
        "thumbnail": p1010,
        "images": [p1010, p1011, p1012, p1013],
        "tags": [tags.GAME]
    },
    {
        "id": 102,
        "title": "OpenGL Rasterizer",
        "technologies": [technologies.OPENGL, technologies.CSHARP],
        "github": "https://github.com/vladpuscaru/showcase.rasterizer",
        "description": "" +
            "" +
            "",
        "slug": "OpenTK C# program implementing the rendering through rasterization.",
        "thumbnail": p1020,
        "images": [p1020, p1021, p1022, p1023, p1024, p1025],
        "tags": [tags.GAME]
    },
    {
        "id": 103,
        "title": "Betting web application",
        "technologies": [technologies.NODEJS, technologies.REACTJS],
        "github": "",
        "description": "" +
            "" +
            "",
        "slug": "Custom betting website. Client commission",
        "thumbnail": p1030,
        "images": [p1030, p1031, p1032, p1033, p1034, p1035, p1036, p1037, p1038, p1039, p10310, p10311, p10312, p10313, p10314, p10315, p10316, p10317, p10318, p10319],
        "tags": [tags.WEB]
    },
    {
        "id": 0,
        "title": "Super Mario Bros. (Clone)",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/showcase.mario",
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
        "github": "https://github.com/vladpuscaru/showcase.shapes",
        "description": "" +
            "" +
            "",
        "slug": "Top down shooter style of game, mimicking a popular game.",
        "thumbnail": p20,
        "images": [p22, p21, p20],
        "tags": [tags.GAME]
    },
    {
        "id": 3,
        "title": "Airplanes",
        "technologies": [technologies.NODEJS, technologies.JAVASCRIPT, technologies.HTML, technologies.CSS],
        "github": "https://github.com/vladpuscaru/showcase.airplanes",
        "description": "" +
            "" +
            "",
        "slug": "Multiplayer, online game over websockets",
        "thumbnail": p30,
        "images": [p36, p37, p38, p31, p32, p30, p33, p34, p35],
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 10,
        "title": "Robot Arm Kinematics",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/showcase.2dkinematics",
        "description": "" +
            "" +
            "",
        "slug": "Forward and inverse kinematics on a robot arm.",
        "thumbnail": p100,
        "images": [p101, p100, p102],
        "tags": [tags.GAME]
    },
    {
        "id": 2,
        "title": "Arkanoid (Clone) - Work in progress",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/showcase.shapes",
        "description": "" +
            "" +
            "",
        "slug": "My take on the classic arkanoid/breakout game.",
        "thumbnail": p00,
        "images": [p01, p00, p02],
        "tags": [tags.GAME, tags.WEB]
    },
    {
        "id": 8,
        "title": "Algorithms Visualized - Web version",
        "technologies": [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
        "github": "https://github.com/vladpuscaru/showcase.algorithms-web",
        "description": "" +
            "" +
            "",
        "slug": "Pathfinding algorithm visualized, with animation.",
        "thumbnail": p80,
        "images": [p82, p81, p80],
        "tags": [tags.WEB]
    },
    {
        "id": 9,
        "title": "Algorithms Visualized - C++ version",
        "technologies": [technologies.CPP, technologies.SFML],
        "github": "https://github.com/vladpuscaru/showcase.algorithms-cpp",
        "description": "" +
            "" +
            "",
        "slug": "Pathfinding algorithm visualized, C++ version.",
        "thumbnail": p90,
        "images": [p91, p92, p93, p90],
        "tags": [tags.GAME]
    },
    {
        "id": 4,
        "title": "Maze Game",
        "technologies": [technologies.REACTJS, technologies.HTML, technologies.CSS],
        "github": "https://github.com/vladpuscaru/showcase.mazegame",
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
        "github": "https://github.com/vladpuscaru/showcase.svg-editor",
        "description": "" +
            "" +
            "",
        "slug": "Web SVG editor. Complete with svg code generation",
        "thumbnail": p50,
        "images": [p53, p52, p51, p50, p54],
        "tags": [tags.WEB]
    },
    {
        "id": 6,
        "title": "WF Snake",
        "technologies": [technologies.CSHARP, technologies.WFORMS],
        "github": "https://github.com/vladpuscaru/showcase.wf-snake",
        "description": "" +
            "" +
            "",
        "slug": "Snake made using Windows Forms. (First time exploring graphics outside of terminal).",
        "thumbnail": p60,
        "images": [p61, p60],
        "tags": [tags.GAME]
    }
];