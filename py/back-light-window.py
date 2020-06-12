import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(23,GPIO.OUT)

f = open("../txt/back-light-window.txt", "r")
c = f.read()
f.close()

if c=="on":
 print 'led on'
 GPIO.output(23, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(23,GPIO.LOW)
