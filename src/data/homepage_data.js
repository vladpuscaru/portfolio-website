const data = {
	backgroundContent: [0, 1],
	pace: "Monkeys are coding...",
	headline: {
		title: {
			superscript: "HELLO, I'M",
			firstName: "Vlad",
			lastName: "PUSCARU",
		},
		info:
			"I am a Software Engineer from Romania, specialized in web and cloud technologies. I am currently working as a Backend Developer @ Deloitte Digital Romania.",
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
				name: ["PROJECTS"],
				number: 2,
			},
		],
		ctabuttons: [
			{
				text: "linkedin",
				hover: "/vladpuscaru",
				link: "https://www.linkedin.com/in/vlad-cristian-puscaru-2399b6123/",
			},
			{
				text: "github",
				hover: "/vladpuscaru",
				link: "https://github.com/vladpuscaru",
			},
			{
				text: "e-mail",
				hover: "vlad.cpuscaru@gmail.com",
				link: "mailto: vlad.cpuscaru@gmail.com",
			},
			{
				text: "mobile",
				hover: "+40 736 167 606",
				link: "tel: +40736167606",
			},
		],
	},
	profile: {
		btn: {
			sup: "Check out my",
			txt: "RESUME",
			link: "",
		},
		img: "",
	},
	folders: [
		{
			link: "",
			path: "/blog",
			sub: "125 posts",
			active: true,
		},
		{
			link: "",
			path: "/store",
			sub: "23 apps",
			active: true,
		},
		{
			link: "",
			path: "/play",
			sub: "under construction...",
			active: true,
		},
		{
			link: "",
			path: "/watch",
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

module.exports = {
	data,
};
