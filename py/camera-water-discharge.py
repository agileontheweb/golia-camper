import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(27,GPIO.OUT)

f = open("../txt/camera-water-discharge.txt", "r")
c = f.read()

if c=="on":
 print 'led on'
 GPIO.output(27, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(27,GPIO.LOW)
