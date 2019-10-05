import {drawCenterPoint, drawPoint} from './points.mjs';
import {drawLine} from './lines.mjs';

export function multiply(state) {
    // draw a line from each point to an endpoint determined by start * multiplier
    // to create a representation of the multiplication tables
    const pointsTable = {};
    const { points, multiplier, stepSize } = state;
    // console.log(points);
    const c = document.getElementById("mainCanvas");
    const ctx = c.getContext("2d");

    // clear the canvas before starting
    ctx.clearRect(0, 0, c.width, c.height);

    drawCenterPoint(ctx, state); // draw center point (for debugging radius size and position)

    // identify all of the starting points
    // and store them for later
    const spacingDegrees = points > 0 ? 360 / points : 0;
    for (let i = 1; i <= points; i += stepSize) {
        pointsTable[i] = pointsTable[i]
            ? pointsTable[i]
            : drawPoint(ctx, state, spacingDegrees * i, 1, i);
    }

    // draw the lines between the multiplied points
    // using the pointsTable
    // console.log({...pointsTable});
    for (let i = 1; i <= points; i += stepSize) {
        const startPoint = pointsTable[i];

        // when nextPoint > points then we wrap around again
        const nextPointValue = i * multiplier;
        const nextPointRemainder = nextPointValue % points;
        const nextPointIndex = nextPointValue > points
            ? nextPointRemainder === 0
                ? points
                : nextPointRemainder
            : nextPointValue;
        
        const endPoint = pointsTable[nextPointIndex];
        
        drawLine(ctx, startPoint, endPoint);
    }
}
