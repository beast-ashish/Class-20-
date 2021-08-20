function setup() {
  createCanvas(800, 400);
  fixRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(300, 400, 60, 40)

}

function draw() {
  background("yellow");
  MovingRect.x = mouseX
  MovingRect.y = mouseY
  if (MovingRect.x - fixRect.x <= (fixRect.width / 2 + MovingRect.width / 2) &&
    fixRect.x - MovingRect.x <= (fixRect.width / 2 + MovingRect.width / 2) &&
    MovingRect.y - fixRect.y <= (fixRect.height / 2 + MovingRect.height / 2) &&
    fixRect.y - MovingRect.y <= (fixRect.height / 2 + MovingRect.height / 2)) {
    MovingRect.shapeColor = "green"
    fixRect.shapeColor = "Blue"
  }
  else {
    MovingRect.shapeColor = "grey"
    fixRect.shapeColor = "grey"

  }
  drawSprites();
}