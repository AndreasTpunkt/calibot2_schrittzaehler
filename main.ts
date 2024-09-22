calliBot2E.resetEncoder(C2eMotor.beide)
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
basic.forever(function () {
    _4digit.show(calliBot2E.encoderValue(C2eSensor.rechts))
    calliBot2E.rgbLed(C2eRgbLed.LV, 0, 16, 0)
    calliBot2E.rgbLed(C2eRgbLed.RV, 0, 16, 0)
    if (calliBot2E.distance(C2eEinheit.cm) < 10) {
        calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        basic.pause(2000)
        calliBot2E.rgbLed(C2eRgbLed.LH, 16, 16, 16)
        calliBot2E.rgbLed(C2eRgbLed.RH, 16, 16, 16)
        calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, 50)
        calliBot2E.motor(C2eMotor.rechts, C2eDir.rückwärts, 50)
        basic.pause(500)
        calliBot2E.resetEncoder(C2eMotor.rechts)
    } else {
        calliBot2E.rgbLed(C2eRgbLed.RH, 16, 0, 0)
        calliBot2E.rgbLed(C2eRgbLed.LH, 16, 0, 0)
        calliBot2E.motor(C2eMotor.beide, C2eDir.vorwärts, 50)
    }
})
