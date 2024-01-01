export const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

const generate21 = () => {
    const topOffset = -random(15, 35);

    // Example: clip-path: polygon(0 16%, 28% 21%, 62% 14%, 100% 0, 100% 100%, 0 100%)
    const coords = [];
    const noPoints = 6;
    let count = 0;
    let x, y;
    while (count < noPoints) {
        if (count === 0) {
            // Boundary Top Left
            x = 0;
            y = random(5, topOffset);
        } else if (count === noPoints - 3) {
            // Boundary Top Right
            x = 100;
        } else if (count === noPoints - 2) {
            // Boundary Bottom Left
            x = 100;
            y = 100;
        } else if (count === noPoints - 1) {
            // Boundary Bottom Right
            x = 0;
            y = 100;
        } else {
            const lastX = coords[count - 1].x;
            const maxXDiff = 100 / (noPoints - 4);
            const xDiff = random(5, maxXDiff);
            x = lastX + xDiff;

            const lastY = coords[count - 1] ? coords[count - 1].y : null;
            const lastLastY = coords[count - 2] ? coords[count - 2].y : null;
            let maxY = topOffset;
            if (lastLastY) {
                maxY = lastY > lastLastY ? (lastY > maxY ? maxY : lastY) : maxY;
            }

            y = random(5, maxY);
        }

        count++;
        coords.push({x, y});
    }

    const clipPath = `polygon(${coords.map(coord => `${coord.x}% ${coord.y}%`).join(",")})`;

    return {
        clipPath,
        top: `${topOffset}%`
    };
}

const generate31 = () => {
    const topOffset = -random(15, 35);

    // Example: clip-path: polygon(0 16%, 28% 21%, 62% 14%, 100% 0, 100% 100%, 0 100%)
    const coords = [];
    const noPoints = 6;
    let count = 0;
    let x, y;
    while (count < noPoints) {
        if (count === 0) {
            // Boundary Top Left
            x = 0;
            y = random(5, topOffset);
        } else if (count === noPoints - 3) {
            // Boundary Top Right
            x = 100;
        } else if (count === noPoints - 2) {
            // Boundary Bottom Left
            x = 100;
            y = 100;
        } else if (count === noPoints - 1) {
            // Boundary Bottom Right
            x = 0;
            y = 100;
        } else {
            const lastX = coords[count - 1].x;
            const maxXDiff = 100 / (noPoints - 4);
            const xDiff = random(5, maxXDiff);
            x = lastX + xDiff;

            const lastY = coords[count - 1] ? coords[count - 1].y : null;
            const lastLastY = coords[count - 2] ? coords[count - 2].y : null;
            let maxY = topOffset;
            if (lastLastY) {
                maxY = lastY > lastLastY ? (lastY > maxY ? maxY : lastY) : maxY;
            }

            y = random(5, maxY);
        }

        count++;
        coords.push({x, y});
    }

    const clipPath = `polygon(${coords.map(coord => `${coord.x}% ${coord.y}%`).join(",")})`;

    return {
        clipPath,
        top: `${topOffset}%`
    };
}

const generate43 = () => {
    const topOffset = -random(15, 35);

    // Example: clip-path: polygon(0 16%, 28% 21%, 62% 14%, 100% 0, 100% 100%, 0 100%)
    const coords = [];
    const noPoints = 6;
    let count = 0;
    let x, y;
    while (count < noPoints) {
        if (count === 0) {
            // Boundary Top Left
            x = 0;
            y = random(5, topOffset);
        } else if (count === noPoints - 3) {
            // Boundary Top Right
            x = 100;
        } else if (count === noPoints - 2) {
            // Boundary Bottom Left
            x = 100;
            y = 100;
        } else if (count === noPoints - 1) {
            // Boundary Bottom Right
            x = 0;
            y = 100;
        } else {
            const lastX = coords[count - 1].x;
            const maxXDiff = 100 / (noPoints - 4);
            const xDiff = random(5, maxXDiff);
            x = lastX + xDiff;

            const lastY = coords[count - 1] ? coords[count - 1].y : null;
            const lastLastY = coords[count - 2] ? coords[count - 2].y : null;
            let maxY = topOffset;
            if (lastLastY) {
                maxY = lastY > lastLastY ? (lastY > maxY ? maxY : lastY) : maxY;
            }

            y = random(5, maxY);
        }

        count++;
        coords.push({x, y});
    }

    const clipPath = `polygon(${coords.map(coord => `${coord.x}% ${coord.y}%`).join(",")})`;

    return {
        clipPath,
        top: `${topOffset}%`
    };
}

const generate42 = () => {
    const topOffset = -random(15, 35);

    // Example: clip-path: polygon(0 16%, 28% 21%, 62% 14%, 100% 0, 100% 100%, 0 100%)
    const coords = [];
    const noPoints = 6;
    let count = 0;
    let x, y;
    while (count < noPoints) {
        if (count === 0) {
            // Boundary Top Left
            x = 0;
            y = random(5, topOffset);
        } else if (count === noPoints - 3) {
            // Boundary Top Right
            x = 100;
        } else if (count === noPoints - 2) {
            // Boundary Bottom Left
            x = 100;
            y = 100;
        } else if (count === noPoints - 1) {
            // Boundary Bottom Right
            x = 0;
            y = 100;
        } else {
            const lastX = coords[count - 1].x;
            const maxXDiff = 100 / (noPoints - 4);
            const xDiff = random(5, maxXDiff);
            x = lastX + xDiff;

            const lastY = coords[count - 1] ? coords[count - 1].y : null;
            const lastLastY = coords[count - 2] ? coords[count - 2].y : null;
            let maxY = topOffset;
            if (lastLastY) {
                maxY = lastY > lastLastY ? (lastY > maxY ? maxY : lastY) : maxY;
            }

            y = random(5, maxY);
        }

        count++;
        coords.push({x, y});
    }

    const clipPath = `polygon(${coords.map(coord => `${coord.x}% ${coord.y}%`).join(",")})`;

    return {
        clipPath,
        top: `${topOffset}%`
    };
}

export const generateMenuShapesStyles = () => {
    const styles = [];
    /**
     * cell_1 cell_2
     * cell_3 cell_4
     *
     * styles[0] - between 2 and 1
     * styles[1] - between 3 and 1
     * styles[2] - between 4 and 3
     * styles[3] - between 4 and 2
     */
    return [
        generate21(),
        generate31(),
        generate43(),
        generate42()
    ];
}