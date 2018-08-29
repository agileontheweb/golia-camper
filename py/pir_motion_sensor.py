import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.IN) #PIR
GPIO.setup(24, GPIO.OUT) #BUzzer

last_motion = 0
while True:
    try:
        if pir.motion_detected:
            last_motion = time.time()

        if time.time() - last_motion <= 7:
            GPIO.output(24, GPIO.LOW)
            print("On")
        else:
            GPIO.output(24, GPIO.HIGH)
            print("Off")

        time.sleep(1)
    except KeyboardInterrupt:
        break
#try:
 #   time.sleep(1) # to stabilize sensor
  #  while True:
   #     if GPIO.input(23):
    #        GPIO.output(24, True)
     #       print("Motion Detected...")
      #      time.sleep(0.1) #Buzzer turns on for 0.5 sec
       # time.sleep(0) #loop delay, should be less than detection delay
        #print("Stop Motion...")
        #GPIO.output(24, False)

#except:
 #   GPIO.cleanup()


