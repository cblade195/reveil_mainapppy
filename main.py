second = 0
reveilh = 0
reveilm = 0
heure = 0
minute = 0
# debut des reglage
basic.show_string("salut, Appuie sur A pour ajouter 1 et sur B pour valider")
# reglage minute
basic.show_string("minute")
basic.show_string("" + str(minute))
while True:
    if input.button_is_pressed(Button.A):
        minute += 1
        basic.pause(100)
        basic.show_string("" + str(minute))
    if input.button_is_pressed(Button.B):
        break
# reglage heure
basic.show_string("heure")
basic.show_string("" + str(heure))
while True:
    if input.button_is_pressed(Button.A):
        heure += 1
        basic.pause(100)
        basic.show_string("" + str(heure))
    if input.button_is_pressed(Button.B):
        basic.clear_screen()
        break
"""

variable

"""
# reveil

def on_forever():
    global reveilm, reveilh
    # reglage reveil
    if input.button_is_pressed(Button.AB):
        reveilm = 0
        reveilh = 0
        basic.show_string("reglage reveil, A = +1, B = valider")
        basic.show_string("minute")
        while True:
            if input.button_is_pressed(Button.A):
                basic.pause(50)
                reveilm += 1
                basic.show_string("" + str((reveilm)))
            if input.button_is_pressed(Button.B):
                break
        basic.show_string("heure")
        while True:
            if input.button_is_pressed(Button.A):
                basic.pause(50)
                reveilh += 1
                basic.show_string("" + str((reveilh)))
            if input.button_is_pressed(Button.B):
                break
# sonerie
    if heure == reveilh and minute == reveilm:
        while input.button_is_pressed(Button.A):
            music.play_melody("G B A G C5 B A B ", 120)
            music.play_melody("E D G F B A C5 B ", 120)
            music.play_melody("C5 G B A F A C5 B ", 120)
basic.forever(on_forever)

# montré l'heure et temperature

def on_forever2():
    if input.button_is_pressed(Button.A):
        basic.show_string("" + str(heure))
        basic.show_string("-" + ("" + str(minute)))
        basic.show_string("-" + ("" + str(second)))
    if input.button_is_pressed(Button.B):
        basic.show_string(str(input.temperature()))
basic.forever(on_forever2)

# horloge

def on_forever3():
    global second, minute, heure
    if second >= 60:
        second = 0
        minute += 1
    elif minute >= 60:
        heure += 1
        minute = 0
    elif heure >= 24:
        heure = 0
        minute = 0
        second = 0
    else:
        basic.pause(1000)
        second += 1
basic.forever(on_forever3)
