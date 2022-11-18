function solve(speed, area) {
    let userSpeed = Number(speed);
    let drivingArea = area;
    let status = '';
    let result = 0;
    let speeding = false;
    let zone = 0;

    if (drivingArea == 'motorway') {
        zone = 130;
        if (userSpeed > 130) {
            result = userSpeed - 130;
            speeding = true;
        }
    } else if (drivingArea == 'interstate') {
        zone = 90;
        if (userSpeed > 90) {
            result = userSpeed - 90;
            speeding = true;
        }
    } else if (drivingArea == 'city') {
        zone = 50;
        if (userSpeed > 50) {
            result = userSpeed - 50;
            speeding = true;
        }
    } else if (drivingArea == 'residential') {
        zone = 20;
        if (userSpeed > 20) {
            result = userSpeed - 20;
            speeding = true;
        }
    }

    if (speeding) {
        if (result <= 20) {
            status = 'speeding';
        } else if (result > 20 && result <= 40) {
            status = 'excessive speeding';
        } else if (result > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${result} km/h faster than the allowed speed of ${zone} - ${status}`);
    } else {
        console.log(`Driving ${userSpeed} km/h in a ${zone} zone`);
    }
}


solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(171, 'motorway')