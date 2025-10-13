import React, { useEffect, useRef, useState } from "react";
import styles from "./GOLBackground.module.sass";

/**
 * Full-screen Conway's Game of Life background.
 *
 * Usage:
 * <GameOfLifeBackground />
 *
 * Props allow customization of colors, speed, density, etc.
 */
export default function GameOfLifeBackground({
												 cellSize = 8,               // Size of each cell in CSS pixels
												 aliveColor = "#22d3ee",    // Teal-400 by default
												 bgFade = 0.08,              // 0=no trails, 0.05-0.15 subtle motion blur
												 density = 0.22,             // Initial population density 0..1
												 speed = 12,                 // Generations per second
												 wrap = true,                // Wrap edges (toroidal)
												 paused = false,             // Start paused (respects prefers-reduced-motion)
											 }: {
	cellSize?: number;
	aliveColor?: string;
	bgFade?: number;
	density?: number;
	speed?: number;
	wrap?: boolean;
	paused?: boolean;
	className?: string;
	zIndex?: number;
}) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rafRef = useRef<number | null>(null);
	const runningRef = useRef<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(paused);

	// Respect reduced motion
	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (media.matches) setIsPaused(true);
	}, []);

	// Resize canvas to full-screen with device pixel ratio scaling
	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
		const width = Math.floor(window.innerWidth);
		const height = Math.floor(window.innerHeight);
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.reset?.();
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
	};

	useEffect(() => {
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		return () => window.removeEventListener("resize", resizeCanvas);
	}, []);

	// Simulation state kept in closure to avoid rerenders
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", {alpha: true});
		if (!ctx) return;

		let cols = 0, rows = 0;
		let grid: Uint8Array;
		let next: Uint8Array;

		const seed = () => {
			cols = Math.ceil(canvas.clientWidth / cellSize);
			rows = Math.ceil(canvas.clientHeight / cellSize);
			grid = new Uint8Array(cols * rows);
			next = new Uint8Array(cols * rows);
			for (let i = 0; i < grid.length; i++) {
				grid[i] = Math.random() < density ? 1 : 0;
			}
			// Clear to transparent before drawing
			ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
		};

		const idx = (x: number, y: number) => y * cols + x;

		const neighbors = (x: number, y: number) => {
			let n = 0;
			for (let yy = -1; yy <= 1; yy++) {
				for (let xx = -1; xx <= 1; xx++) {
					if (xx === 0 && yy === 0) continue;
					let nx = x + xx;
					let ny = y + yy;
					if (wrap) {
						if (nx < 0) nx = cols - 1; else if (nx >= cols) nx = 0;
						if (ny < 0) ny = rows - 1; else if (ny >= rows) ny = 0;
						n += grid[idx(nx, ny)];
					} else {
						if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
						n += grid[idx(nx, ny)];
					}
				}
			}
			return n;
		};

		const stepInterval = 1000 / Math.max(1, speed);
		let last = performance.now();

		const draw = () => {
			// Subtle fade for trails
			if (bgFade > 0) {
				ctx.fillStyle = `rgba(0,0,0,${bgFade})`;
				ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
			} else {
				ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
			}

			ctx.fillStyle = aliveColor;
			for (let y = 0; y < rows; y++) {
				const py = y * cellSize;
				for (let x = 0; x < cols; x++) {
					if (grid[idx(x, y)]) {
						ctx.fillRect(x * cellSize, py, cellSize, cellSize);
					}
				}
			}
		};

		const tick = () => {
			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < cols; x++) {
					const alive = grid[idx(x, y)];
					const n = neighbors(x, y);
					// Conway's rules
					if (alive) {
						next[idx(x, y)] = n === 2 || n === 3 ? 1 : 0;
					} else {
						next[idx(x, y)] = n === 3 ? 1 : 0;
					}
				}
			}
			// Swap
			const tmp = grid;
			grid = next;
			next = tmp;
		};

		const animate = (t: number) => {
			if (!runningRef.current) return;
			const elapsed = t - last;
			if (elapsed >= stepInterval) {
				last = t;
				tick();
				draw();
			}
			rafRef.current = requestAnimationFrame(animate);
		};

		const handleVisibility = () => {
			const hidden = document.hidden;
			if (hidden) stop(); else start();
		};

		const start = () => {
			if (runningRef.current || isPaused) return;
			runningRef.current = true;
			last = performance.now();
			rafRef.current = requestAnimationFrame(animate);
		};

		const stop = () => {
			runningRef.current = false;
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
				rafRef.current = null;
			}
		};

		// Re-seed on size changes
		const onResize = () => {
			seed();
		};

		seed();

		document.addEventListener("visibilitychange", handleVisibility);
		window.addEventListener("resize", onResize);

		if (!isPaused) start();

		return () => {
			stop();
			document.removeEventListener("visibilitychange", handleVisibility);
			window.removeEventListener("resize", onResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cellSize, aliveColor, bgFade, density, speed, wrap, isPaused]);

	// Toggle via imperative keypress when this component is mounted
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key.toLowerCase() === "p") setIsPaused(v => !v);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	return (
		<div
			className={styles.bg}
			aria-hidden
		>
			<canvas ref={canvasRef}/>
		</div>
	);
}
