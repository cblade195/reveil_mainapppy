let second = 0
let reveilh = 0
let reveilm = 0
let heure = 0
let minute = 0
//  debut des reglage
basic.showString("salut, Appuie sur A pour ajouter 1 et sur B pour valider")
//  reglage minute
basic.showString("minute")
basic.showString("" + ("" + minute))
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        minute += 1
        basic.pause(100)
        basic.showString("" + ("" + minute))
    }
    
    if (input.buttonIsPressed(Button.B)) {
        break
    }
    
}
//  reglage heure
basic.showString("heure")
basic.showString("" + ("" + heure))
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        heure += 1
        basic.pause(100)
        basic.showString("" + ("" + heure))
    }
    
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        break
    }
    
}
/** variable */
//  reveil
basic.forever(function on_forever() {
    
    //  reglage reveil
    if (input.buttonIsPressed(Button.AB)) {
        reveilm = 0
        reveilh = 0
        basic.showString("reglage reveil, A = +1, B = valider")
        basic.showString("minute")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.pause(50)
                reveilm += 1
                basic.showString("" + ("" + reveilm))
            }
            
            if (input.buttonIsPressed(Button.B)) {
                break
            }
            
        }
        basic.showString("heure")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.pause(50)
                reveilh += 1
                basic.showString("" + ("" + reveilh))
            }
            
            if (input.buttonIsPressed(Button.B)) {
                break
            }
            
        }
    }
    
    //  sonerie
    if (heure == reveilh && minute == reveilm) {
        while (input.buttonIsPressed(Button.A)) {
            music.playMelody("G B A G C5 B A B ", 120)
            music.playMelody("E D G F B A C5 B ", 120)
            music.playMelody("C5 G B A F A C5 B ", 120)
        }
    }
    
})
//  montré l'heure et temperature
basic.forever(function on_forever2() {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + ("" + heure))
        basic.showString("-" + ("" + ("" + minute)))
        basic.showString("-" + ("" + ("" + second)))
    }
    
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + input.temperature())
    }
    
})
//  horloge
basic.forever(function on_forever3() {
    
    if (second >= 60) {
        second = 0
        minute += 1
    } else if (minute >= 60) {
        heure += 1
        minute = 0
    } else if (heure >= 24) {
        heure = 0
        minute = 0
        second = 0
    } else {
        basic.pause(1000)
        second += 1
    }
    
})
