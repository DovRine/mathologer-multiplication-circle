export function drawCircle(ctx) {
    const { center_x, center_y, radius } = state;
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
