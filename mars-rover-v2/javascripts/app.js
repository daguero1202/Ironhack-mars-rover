// Rover Object Goes Here
// ======================
let rover = { direction: "N", x: 0, y: 0,  travelLog: []}
// ======================
function turnLeft(rover) {
  if (rover.direction == "N") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "N";
  }
  console.log("turnLeft was called!");
}

function turnRight(rover) {
  if (rover.direction == "N") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "N";
  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  if (rover.direction == "N") {
    rover.y = rover.y + 1;
  } else if (rover.direction == "W") {
    rover.x = rover.x - 1;
  } else if (rover.direction == "S") {
    rover.y = rover.y - 1;
  } else if (rover.direction == "E") {
    rover.x = rover.x + 1;
  }
  console.log("moveForward was called")
}

let commands = ["r", "r", "f","r","l","f", "r", "f", "f", "l"]

function moving(drive) {
  drive.forEach( ( eachletter ) => {
    if (eachletter == "f") {
      moveForward(rover);
    } else if (eachletter == "r") {
      turnRight(rover);
    } else if (eachletter == "l") {
      turnLeft(rover);
    }
    rover.travelLog.push(`Coordinates: ${rover.x}, ${rover.y}`);
  })
}




