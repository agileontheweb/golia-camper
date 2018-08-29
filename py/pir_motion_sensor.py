import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

GPIO.setup(23, GPIO.IN) #PIR
GPIO.setup(24, GPIO.OUT) #BUzzer

try:
    time.sleep(2) # to stabilize sensor
    while True:
        if GPIO.input(23):
            GPIO.output(24, True)

            print("Motion Detected...")
            time.sleep(5) #to avoid multiple detection
        time.sleep(0.1) #loop delay, should be less than detection delay
        print("Stop Motion...")
        GPIO.output(24, False)

except:
    GPIO.cleanup()


