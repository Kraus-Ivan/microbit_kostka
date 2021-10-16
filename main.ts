let klic1 = false
let klic2 = false
let x = 0
let y = 0
let z = false
basic.forever(function dotyk() {
    if (input.logoIsPressed()) {
        
        if (z == false) {
            z = true
            animace_deset()
        } else if (z == true) {
            z = false
            animace_sest()
        }
        
    }
    
})
input.onButtonPressed(Button.A, function tlacitkoA() {
    if (z == false) {
        
        klic1 = true
        animace_ano()
    } else {
        
        klic2 = true
        animace_ano()
    }
    
})
input.onGesture(Gesture.Shake, function trepani1() {
    let i: number;
    
    
    if (klic1) {
        
        x = randint(1, 6)
        if (x == 1) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
            for (i = 0; i < 1; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (x == 2) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
            for (i = 0; i < 2; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (x == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
            for (i = 0; i < 3; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (x == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
            for (i = 0; i < 4; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (x == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            for (i = 0; i < 5; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (x == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
            for (i = 0; i < 6; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        }
        
        klic1 = false
    } else if (klic2) {
        
        y = randint(1, 10)
        if (y == 1) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
            for (i = 0; i < 1; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
            for (i = 0; i < 2; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 3) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
            for (i = 0; i < 3; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            for (i = 0; i < 4; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            for (i = 0; i < 5; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            for (i = 0; i < 6; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 7) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . # . #
                . . . . .
                # . . . #
                `)
            for (i = 0; i < 7; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 8) {
            basic.showLeds(`
                # . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #
                `)
            for (i = 0; i < 8; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 9) {
            basic.showLeds(`
                # . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #
                `)
            for (i = 0; i < 9; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        } else if (y == 10) {
            basic.showLeds(`
                # . . . #
                . . # . .
                # # . # #
                . . # . .
                # . . . #
                `)
            for (i = 0; i < 10; i++) {
                music.playTone(Note.C, music.beat())
                music.rest(music.beat(100))
            }
        }
        
        klic2 = false
    } else {
        animace_ne()
        if (z == false) {
            if (x == 1) {
                basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
            } else if (x == 2) {
                basic.showLeds(`
                            . . . . .
                            . . . # .
                            . . . . .
                            . # . . .
                            . . . . .
                            `)
            } else if (x == 3) {
                basic.showLeds(`
                            . . . . .
                            . . . # .
                            . . # . .
                            . # . . .
                            . . . . .
                            `)
            } else if (x == 4) {
                basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
            } else if (x == 5) {
                basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . # . .
                            . # . # .
                            . . . . .
                            `)
            } else if (x == 6) {
                basic.showLeds(`
                            . . . . .
                            . # . # .
                            . # . # .
                            . # . # .
                            . . . . .
                            `)
            }
            
        } else if (z) {
            if (y == 1) {
                basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
            } else if (y == 2) {
                basic.showLeds(`
                            . . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . .
                            `)
            } else if (y == 3) {
                basic.showLeds(`
                            . . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . .
                            `)
            } else if (y == 4) {
                basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . #
                            `)
            } else if (y == 5) {
                basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
            } else if (y == 6) {
                basic.showLeds(`
                            # . . . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . . . #
                            `)
            } else if (y == 7) {
                basic.showLeds(`
                            # . . . #
                            . . . . .
                            # . # . #
                            . . . . .
                            # . . . #
                            `)
            } else if (y == 8) {
                basic.showLeds(`
                            # . # . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . # . #
                            `)
            } else if (y == 9) {
                basic.showLeds(`
                            # . # . #
                            . . . . .
                            # . # . #
                            . . . . .
                            # . # . #
                            `)
            } else if (y == 10) {
                basic.showLeds(`
                            # . . . #
                            . . # . .
                            # # . # #
                            . . # . .
                            # . . . #
                            `)
            }
            
        }
        
    }
    
})
function animace_deset() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
        . . . . .
        # . # . #
        # . # . #
        # . # . #
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        # . # . #
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        # . . # .
        `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . # .
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
}

function animace_sest() {
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . # .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
}

function animace_ano() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    # . # . .
    . # . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
}

function animace_ne() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
    basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
}

