import p1010 from "../assets/data/projects/images/p101_0.png";
import p1011 from "../assets/data/projects/images/p101_1.png";
import p1012 from "../assets/data/projects/images/p101_2.png";
import p1013 from "../assets/data/projects/images/p101_3.png";
import { technologies } from "../assets/data/projects";

export interface Project {
	id: number;
	title: string;
	description: string;
	slug: string;
	github: string;
	technologies: {
		color: string;
		text: string;
		icon?: any;
	}[];
	images: any[];
	thumbnail: any;
	tags: string[];
	link?: string;
}
