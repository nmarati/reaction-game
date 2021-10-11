basic.forever(function () {
    basic.pause(randint(0, 4000))
    basic.showIcon(IconNames.Heart)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(20)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
