import { useEffect, useRef } from "react";

/**
 * Animated network / connecting-lines procedural background.
 * Smooth, geometric, non-noisy aesthetic. No dependencies.
 *
 * Props:
 *  - color: string — base line color (default "#ffcb00")
 *  - accent: string — secondary line color (default "#00b3e6")
 *  - density: number — node count per 10k px² (default 0.012)
 *  - speed: number — node motion speed multiplier (default 0.25)
 *  - linkDist: number — distance threshold for connecting lines (default 140)
 *  - opacity: number — line opacity (default 0.4)
 */
type Props = {
	color?: string;
	accent?: string;
	density?: number;
	speed?: number;
	linkDist?: number;
	opacity?: number;
};

export default function NetworkBackground({
											  color = "#ffcb00",
											  accent = "#00b3e6",
											  density = 0.012,
											  speed = 0.25,
											  linkDist = 140,
											  opacity = 0.4,
										  }: Props) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext("2d")!;
		let w = 0,
			h = 0,
			dpr = Math.min(2, window.devicePixelRatio || 1);
		let nodes: Node[] = [];
		let running = true;

		interface Node {
			x: number;
			y: number;
			vx: number;
			vy: number;
		}

		const resize = () => {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			initNodes();
		};

		const initNodes = () => {
			const area = w * h;
			const count = Math.floor(area / 10000 * density);
			nodes = new Array(count).fill(0).map(() => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * speed,
				vy: (Math.random() - 0.5) * speed,
			}));
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			ctx.lineWidth = 1;
			ctx.lineCap = "round";

			// move
			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < 0 || n.x > w) n.vx *= -1;
				if (n.y < 0 || n.y > h) n.vy *= -1;
			}

			// draw connections
			for (let i = 0; i < nodes.length; i++) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length; j++) {
					const b = nodes[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < linkDist) {
						const alpha = (1 - dist / linkDist) * opacity;
						const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
						grad.addColorStop(0, withAlpha(color, alpha));
						grad.addColorStop(1, withAlpha(accent, alpha));
						ctx.strokeStyle = grad;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}

			// draw nodes
			ctx.fillStyle = withAlpha("#ffffff", 0.7);
			for (const n of nodes) {
				ctx.beginPath();
				ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
				ctx.fill();
			}

			if (running) rafRef.current = requestAnimationFrame(draw);
		};

		const withAlpha = (hex: string, a: number) => {
			const h = hex.replace("#", "");
			const r = parseInt(h.substring(0, 2), 16);
			const g = parseInt(h.substring(2, 4), 16);
			const b = parseInt(h.substring(4, 6), 16);
			return `rgba(${r},${g},${b},${a})`;
		};

		resize();
		window.addEventListener("resize", resize);
		draw();

		return () => {
			running = false;
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			window.removeEventListener("resize", resize);
		};
	}, [color, accent, density, speed, linkDist, opacity]);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				inset: 0,
				width: "100%",
				height: "100%",
				background: "radial-gradient(circle at center, #0d0d10, #09090b 80%)",
				pointerEvents: "none",
			}}
		/>
	);
}
