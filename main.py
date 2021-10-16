klic1 = False
klic2 = False
x = 0
y = 0
z = False
def dotyk():
    if input.logo_is_pressed():
        global z
        global x 
        global y
        if z == False:
            z = True
            x = 0
            y = 0
            animace_deset()
        elif z == True:
            z = False
            x = 0
            y = 0
            animace_sest()
basic.forever(dotyk)
def tlacitkoA():
    if z == False:
        global klic1
        klic1 = True
        animace_ano()
    else:
        global klic2
        klic2 = True
        animace_ano()
input.on_button_pressed(Button.A, tlacitkoA)
def trepani1():
    global klic2
    global klic1
    if klic1:
        global x
        x = randint(1,6)
        if x == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
            for i in range(1):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif x == 2:
            basic.show_leds("""
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                """)
            for i in range(2):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif x == 3:
            basic.show_leds("""
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                """)
            for i in range(3):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif x == 4:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                """)
            for i in range(4):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif x == 5:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                """)
            for i in range(5):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif x == 6:
            basic.show_leds("""
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                """)
            for i in range(6):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        klic1 = False
    elif klic2:
        global y
        y = randint(1,10)
        if y == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
            for i in range(1):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 2:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                """)
            for i in range(2):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 3:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                """)
            for i in range(3):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 4:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                """)
            for i in range(4):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 5:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                """)
            for i in range(5):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 6:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                """)
            for i in range(6):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 7:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . # . #
                . . . . .
                # . . . #
                """)
            for i in range(7):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 8:
            basic.show_leds("""
                # . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #
                """)
            for i in range(8):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 9:
            basic.show_leds("""
                # . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #
                """)
            for i in range(9):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        elif y == 10:
            basic.show_leds("""
                # . . . #
                . . # . .
                # # . # #
                . . # . .
                # . . . #
                """)
            for i in range(10):
                music.play_tone(Note.C, music.beat())
                music.rest(music.beat(100))
        klic2 = False
    else:
        animace_ne()
        if z == False:
            if x == 1:
                        basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """)
            elif x == 2:
                        basic.show_leds("""
                            . . . . .
                            . . . # .
                            . . . . .
                            . # . . .
                            . . . . .
                            """)
            elif x == 3:
                        basic.show_leds("""
                            . . . . .
                            . . . # .
                            . . # . .
                            . # . . .
                            . . . . .
                            """)
            elif x == 4:
                        basic.show_leds("""
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            """)
            elif x == 5:
                        basic.show_leds("""
                            . . . . .
                            . # . # .
                            . . # . .
                            . # . # .
                            . . . . .
                            """)
            elif x == 6:
                        basic.show_leds("""
                            . . . . .
                            . # . # .
                            . # . # .
                            . # . # .
                            . . . . .
                            """)
        elif z:
            if y == 1:
                        basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """)
            elif y == 2:
                        basic.show_leds("""
                            . . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . .
                            """)
            elif y == 3:
                        basic.show_leds("""
                            . . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . .
                            """)
            elif y == 4:
                        basic.show_leds("""
                            # . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . #
                            """)
            elif y == 5:
                        basic.show_leds("""
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            """)
            elif y == 6:
                        basic.show_leds("""
                            # . . . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . . . #
                            """)
            elif y == 7:
                        basic.show_leds("""
                            # . . . #
                            . . . . .
                            # . # . #
                            . . . . .
                            # . . . #
                            """)
            elif y == 8:
                        basic.show_leds("""
                            # . # . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . # . #
                            """)
            elif y == 9:
                        basic.show_leds("""
                            # . # . #
                            . . . . .
                            # . # . #
                            . . . . .
                            # . # . #
                            """)
            elif y == 10:
                        basic.show_leds("""
                            # . . . #
                            . . # . .
                            # # . # #
                            . . # . .
                            # . . . #
                            """)
input.on_gesture(Gesture.SHAKE, trepani1)
def animace_deset():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
        . . . . .
        # . # . #
        # . # . #
        # . # . #
        # . . # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        # . # . #
        # . # . #
        # . . # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        # . . # .
        """)
    basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . # .
            """)
    basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
def animace_sest():
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . # .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
def animace_ano():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . # .
    # . # . .
    . # . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    """)
def animace_ne():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
    basic.show_leds("""
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    """)
    basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
    basic.show_leds("""
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
