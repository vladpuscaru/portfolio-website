import profileImg from "./images/Profile_Image.png";
import profileBg from "./images/Profile_BG.png";

import icLinkedin from "./images/ic_social_24px/ic_linkedin.svg";
import icGithub from "./images/ic_social_24px/ic_github.svg";
// import icInstagram from "./images/ic_social_24px/ic_instagram.svg";
import icEmail from "./images/ic_social_24px/ic_mail.svg";
import cv from "./files/cv.pdf";

export const data = {
    backgroundContent: [0, 1],
    pace: "Loading...",
    headline: {
        title: {
            superscript: "HELLO, I'M",
            firstName: "Vlad",
            lastName: "PUSCARU",
        },
        info: "I am a Software Engineer from Romania, specialized in web and cloud technologies. I am currently working as a Backend Developer @ Deloitte Digital Romania.",
        counts: [
            {
                name: ["YEARS", "OF EXPERIENCE"],
                number: 2,
            },
            {
                name: ["PROGRAMMING", "LANGUAGES"],
                number: 5,
            },
            {
                name: ["FREELANCE", "PROJECTS"],
                number: 3,
            },
            {
                name: ["CERTIFICATIONS"],
                number: 5
            }
        ],
        contact: {
            text: "GET IN TOUCH",
            ctabuttons: [
                {
                    icon: icLinkedin,
                    hover: "/vladpuscaru",
                    link: "https://www.linkedin.com/in/vlad-cristian-puscaru-2399b6123/",
                },
                {
                    icon: icGithub,
                    hover: "/vladpuscaru",
                    link: "https://github.com/vladpuscaru",
                },
                // {
                //     icon: icInstagram,
                //     hover: "/vladpuscaru",
                //     link: "",
                // },
                {
                    icon: icEmail,
                    hover: "vlad.cpuscaru@gmail.com",
                    link: "mailto: vlad.cpuscaru@gmail.com",
                },
            ],
        }
    },
    profile: {
        btn: {
            sup: "Check out my",
            txt: "RESUME",
            link: cv,
        },
        profileImg: profileImg,
        profileBg: profileBg,
    },
    folders: [
        {
            link: "",
            path: "/work",
            sub: "under construction...",
            active: false,
        },
        {
            link: "",
            path: "/blog",
            sub: "under construction...",
            active: false,
        },
        {
            link: "",
            path: "/play",
            sub: "under construction...",
            active: false,
        },
        {
            link: "",
            path: "/learn",
            sub: "under construction...",
            active: false,
        },
    ],
};
