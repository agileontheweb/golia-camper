import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(20,GPIO.OUT)

f = open("../txt/camera-front.txt", "r")
c = f.read()

if c=="on":
 print 'led on'
 GPIO.output(20, GPIO.HIGH)
else:
 print "led off"
 GPIO.output(20,GPIO.LOW)
