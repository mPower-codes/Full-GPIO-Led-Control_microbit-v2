input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showString("OFF")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Yes)
    basic.showString("ON")
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.TShirt)
    for (let index = 0; index < 50; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Yes)
    basic.showString("ON")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
    basic.showString("ON")
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.clearScreen()
})
basic.showString("Self Test")
music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(1000)
music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showString("Ready")
basic.pause(1000)
basic.clearScreen()
