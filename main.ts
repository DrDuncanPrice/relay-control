input.onButtonPressed(Button.A, function () {
    state = 0
    music.playTone(880, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    auto = !(auto)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    state = 1
    music.playTone(247, music.beat(BeatFraction.Whole))
})
let state = 0
let auto = false
auto = false
let delay = 60
state = 0
automationbit.setRelay(state)
basic.forever(function () {
    if (auto) {
        basic.showString("A")
        basic.pause(1000 * delay)
        if (state == 0) {
            state = 1
            music.playTone(247, music.beat(BeatFraction.Whole))
        } else {
            state = 0
            music.playTone(880, music.beat(BeatFraction.Whole))
        }
    }
    automationbit.setRelay(state)
    if (state == 0) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
})
