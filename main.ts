function moveball () {
    sv = ball.get(LedSpriteProperty.Direction)
    pause2 = 100
    for (let index = 0; index < 10; index++) {
        ball.move(1)
        ball.ifOnEdgeBounce()
        if (ball.isTouching(blocks[0])) {
            ball.turn(Direction.Right, 180)
            blocks[0].delete()
            game.addScore(1)
        }
        if (ball.isTouching(blocks[1])) {
            ball.turn(Direction.Right, 180)
            blocks[1].delete()
            game.addScore(1)
        }
        if (ball.isTouching(blocks[2])) {
            ball.turn(Direction.Right, 180)
            blocks[2].delete()
            game.addScore(1)
            if (ball.isTouching(blocks[3])) {
                ball.turn(Direction.Right, 180)
                blocks[3].delete()
                game.addScore(1)
            }
            if (ball.isTouching(blocks[4])) {
                ball.turn(Direction.Right, 180)
                blocks[4].delete()
                game.addScore(1)
            }
        }
        basic.pause(pause2)
        pause2 += 50
    }
    ball.delete()
    ball = game.createSprite(2, 4)
    ball.set(LedSpriteProperty.Direction, sv)
}
input.onButtonPressed(Button.A, function () {
    ball.turn(Direction.Left, 15)
})
function makerow (level: number) {
    blocks = []
    for (let index = 0; index <= 4; index++) {
        brick = game.createSprite(index, level)
        blocks.push(brick)
    }
}
input.onButtonPressed(Button.AB, function () {
    moveball()
})
input.onButtonPressed(Button.B, function () {
    ball.turn(Direction.Left, 345)
})
let brick: game.LedSprite = null
let blocks: game.LedSprite[] = []
let pause2 = 0
let sv = 0
let ball: game.LedSprite = null
makerow(1)
ball = game.createSprite(2, 4)
ball.turn(Direction.Left, 90)
