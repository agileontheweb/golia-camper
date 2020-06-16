import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(25,GPIO.OUT)

f = open("../txt/dinette-light-window.txt", "r")
c = f.read()
f.close()

if c=="on":
 print ("led on")
 GPIO.output(25, GPIO.HIGH)
else:
 print ("led off")
 GPIO.output(25,GPIO.LOW)

