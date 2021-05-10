const data = {
	backgroundContent: [0, 1],
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
				name: "CERTIFICATES",
				number: 2,
			},
			{
				name: "YEARS OF EXPERIENCE",
				number: 5,
			},
			{
				name: "PROGRAMMING LANGUAGES",
				number: 4,
			},
			{
				name: "WIVES",
				number: 15,
			},
		],
		ctabuttons: [
			{
				text: "facebook",
				hover: "/vladpuscaru",
				link: "",
			},
			{
				text: "twitter",
				hover: "/vladpuscaru",
				link: "",
			},
			{
				text: "github",
				hover: "/vladpuscaru",
				link: "",
			},
			{
				text: "youtube",
				hover: "/vladpuscaru",
				link: "",
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
