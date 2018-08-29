import RPi.GPIO as GPIO
import time
import subprocess
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pir_sensor = 23 
led = 24 

GPIO.setup(pir_sensor, GPIO.IN, GPIO.PUD_DOWN)

current_state = 0
GPIO.setup(led,GPIO.OUT)

try:
    while True:
    
        time.sleep(0.1)
        current_state = GPIO.input(pir_sensor)
        if current_state == 1:
          print("GPIO pin %s is %s" % (pir_sensor, current_state)) # motion detected
          GPIO.output(led,True) #Turn on LED
          print "capture picture"
          time.sleep(2) # leave LED on for 2 seconds
          GPIO.output(led,False) #turn off LED
          time.sleep(2) # wait 1 seconds for PIR to reset. 
except KeyboardInterrupt:
    GPIO.cleanup()
