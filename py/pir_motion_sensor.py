import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(24, GPIO.OUT) #BUzzer

pirPin = 23
GPIO.setup(pirPin, GPIO.IN)


while True:
    if GPIO.input(pirPin) == GPIO.LOW
         print "Motion detected!"
    else:
         print "No motion"
    time.sleep(0.2)
except KeyboardInterrupt:
    GPIO.cleanup()
