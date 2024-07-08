def on_sound_loud():
    music.play(music.tone_playable(698, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.YES)
    basic.show_string("ON")
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.clear_screen()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_a():
    music.play(music.tone_playable(698, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.YES)
    basic.show_string("ON")
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.play(music.tone_playable(147, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.NO)
    basic.show_string("OFF")
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("Self Test")
pins.digital_write_pin(DigitalPin.P2, 1)
basic.pause(2000)
pins.digital_write_pin(DigitalPin.P2, 0)
basic.pause(1000)
basic.show_string("Ready")