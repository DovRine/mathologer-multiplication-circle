export function getPoint(state, angle, distance) {
    const { center_x, center_y, radius } = state;
    const x = center_x + radius * Math.cos((-angle * Math.PI) / 180) * distance;
    const y = center_y + radius * Math.sin((-angle * Math.PI) / 180) * distance;
    return { x, y };
}

export function drawPoint(ctx, state, angle, distance, label = "") {
    const { pointSize, font_size, showLabels } = state;
    const { x, y } = getPoint(state, angle, distance);
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
    ctx.fill();

    if (showLabels) {
        ctx.font = font_size;
        // TODO: fix label positions better
        let offset_x = x > 180 ? x + 10 : x - 10;
        let offset_y = y;
        ctx.fillText(label, offset_x, offset_y);
    }
    return { x, y };
}

export function drawCenterPoint(ctx, state) {
    const { center_x, center_y } = state;
    ctx.beginPath();
    ctx.arc(center_x, center_y, 1, 0, 2 * Math.PI, true);
    ctx.fill();
}