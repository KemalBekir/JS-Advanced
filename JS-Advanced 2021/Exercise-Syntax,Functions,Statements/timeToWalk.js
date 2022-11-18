function solve(steps, footLength, speed) {
    let numSteps = Number(steps);
    let stepsLength = Number(footLength);
    let studentSpeed = Number(speed);

    let distanceMeters = numSteps * stepsLength;
    let speedMeterSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMeterSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

solve(4000, 0.60, 5)
console.log('--------');
solve(2564, 0.70, 5.5)