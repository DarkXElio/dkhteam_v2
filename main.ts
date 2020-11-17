input.onButtonPressed(Button.A, function () {
    trueorfalse += randint(0, 1)
    basic.showString("Processing!!")
    basic.pause(1000)
    if (trueorfalse == 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    trueorfalse += 0
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Processing!!")
    basic.pause(1000)
    Lidhja += randint(1, 100)
    basic.showString("" + (Lidhja))
    basic.pause(200)
    basic.showString("%")
    basic.pause(2000)
    if (Lidhja < 50) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
    Lidhja = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
let Lidhja = 0
let trueorfalse = 0
basic.showString("Pershendetje!")
basic.showIcon(IconNames.Happy)
