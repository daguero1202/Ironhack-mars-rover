// Rover Object Goes Here
// ======================
rover = {direction: "N", x: 0, y: 0}
// ======================
function turnLeft(rover){
  if (rover.direction == "N"){
    rover.direction = "W";
  } else if(rover.direction == "W"){
    rover.direction = "S";
  } else if(rover.direction == "S"){
    rover.direciton = "E";
  } else if(rover.direction == "E"){
    rover.direciton = "N";
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (rover.direction == "N"){
    rover.direction = "E";
  } else if(rover.direction == "E"){
    rover.direction = "S";
  } else if(rover.direction == "S"){
    rover.direciton = "W";
  } else if(rover.direction == "W"){
    rover.direciton = "N";
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if (rover.direction == "N"){
    rover.y = rover.y + 1;
  } else if(rover.direction == "W"){
    rover.x = rover.x - 1;
  } else if(rover.direction == "S"){
    rover.y = rover.y - 1;
  } else if(rover.direction == "E"){
    rover.x = rover.x + 1;
  }
  console.log("moveForward was called")
}
function moving(){

}