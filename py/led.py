import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)

if $data=="acceso":
    print "led on"
    GPIO.output(18, GPIO.HIGH)
else:
    print "led off"
    GPIO.output(18,GPIO.LOW)
