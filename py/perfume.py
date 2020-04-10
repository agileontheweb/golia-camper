import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(12,GPIO.OUT)

GPIO.output(12, GPIO.HIGH)

# f = open("../txt/perfume.txt", "r")
# c = f.read()
# f.close()
#
# if c=="on":
#  print 'led on'
#  GPIO.output(12, GPIO.HIGH)
# else:
#  print "led off"
#  GPIO.output(12,GPIO.LOW)
