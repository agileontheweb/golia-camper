# import RPi.GPIO as GPIO
# import time
# import os
# GPIO.setmode(GPIO.BCM)
# GPIO.setup(17, GPIO.IN, pull_up_down = GPIO.PUD_UP)
# while True:
#     print GPIO.input(17)
#     if (GPIO.input(17) == False):
#         os.system("sudo shutdown -h now")
#         break
#     time.sleep(1)

import RPi.GPIO as GPIO # Import Raspberry Pi GPIO library
GPIO.setwarnings(False) # Ignore warning for now
GPIO.setmode(GPIO.BOARD) # Use physical pin numbering
GPIO.setup(10, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) # Set pin 10 to be an input pin and set initial value to be pulled low (off)

while True: # Run forever
    if GPIO.input(10) == GPIO.HIGH:
        print("Button was pushed!")
