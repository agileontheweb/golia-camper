import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17,GPIO.OUT)

f = open("../txt/light-left.txt", "r")
c = f.read()
f.close()

if c=="on":
 print 'led on'
 GPIO.output(17, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(17,GPIO.LOW)
