import {multiply} from './modules/multiply.mjs';
import {updateDisplay} from './modules/updateDisplay.mjs';


const viewport = {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.9,
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.9,
    center: {},
};
viewport.center.x = viewport.width / 2;
viewport.center.y = viewport.height / 2;

const radius =
    viewport.width > viewport.height
        ? (viewport.height / 2) * 0.9
        : (viewport.width / 2) * 0.9;

const state = {
    viewport,
    radius: radius,
    pointSize: 2,
    points: 200,
    center_x: viewport.center.x,
    center_y: viewport.center.y,
    font_size: "12px",
    multiplier: 2,
    stepSize: 1, // not working yet...
    showLabels: false,
};

const canvas = document.createElement("canvas");
canvas.id = "mainCanvas";
canvas.width = viewport.width;
canvas.height = viewport.height;
canvas.style.zIndex = 8;

document.getElementsByTagName("body")[0].appendChild(canvas);

const toolbarInputs = [
    { id: "inputPoints", stateKey: "points", valueKey: "value" },
    { id: "inputPointSize", stateKey: "pointSize", valueKey: "value" },
    { id: "inputMultiplier", stateKey: "multiplier", valueKey: "value" },
    { id: "checkShowLabels", stateKey: "showLabels", valueKey: "checked" },
];
toolbarInputs.forEach(input => {
    document.getElementById(input.id).addEventListener("change", e => {
        const value = input.valueKey === "value"
            ? e.currentTarget.value
            : !!e.currentTarget.checked;

        updateDisplay(state, input.stateKey, value);
    });
});

multiply(state);
