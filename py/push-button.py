import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(17,GPIO.OUT)

def my_function(sate):
  f = open("../txt/light-kitchen.txt", "r")
  c = f.read()
  f.close()
  if state=="pushed":
    print("SI SONO PUSHED")
    if c=="on":
     f = open("../txt/light-kitchen.txt", "w") 
     f.write("off")
     f.close()
     GPIO.output(17, GPIO.LOW)
    else:
     f = open("../txt/light-kitchen.txt", "w")
     f.write("on")
     f.close()
     GPIO.output(17, GPIO.HIGH)
  else:
    print("NON SONO PUSHED")

while True:

  if GPIO.input(23) == GPIO.HIGH:
   print("Button pushed!")
   state="pushed"
   my_function(state)
   time.sleep(1)
  else:
   state="notpushed"
   my_function(state)
   time.sleep(1)


x = [1,2,3,4,5,6]
restart = True

def checkButtonPushed(restart):
 while restart:
    for i in x:
        # add any exit condition!
        # if foo == bar:
        #   restart = False
        #   break
        # if GPIO.input(23) == GPIO.HIGH:
        # print("Button pushed!")
        # state="pushed"
        # my_function(state)
        # restart = False
        # break

        if i == 4:
	  print("se sono pushed setto restart a false lancio my_function")
          restart = False
          state="pushed"
          my_function(state)
          break
        else:
            print i


#checkButtonPushed(restart)

