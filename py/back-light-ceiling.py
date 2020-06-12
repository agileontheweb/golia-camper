import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)

f = open("../txt/back-window-celling.txt", "r")
c = f.read()
f.close()

if c=="on":
 print 'led on'
 GPIO.output(18, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(18,GPIO.LOW)
