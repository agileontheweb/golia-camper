import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(21,GPIO.OUT)

f = open("../txt/inverter.txt", "r")
c = f.read()
f.close()

if c=="on":
 print 'led on'
 GPIO.output(21, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(21,GPIO.LOW)
