import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(17,GPIO.OUT)

def my_function(sate):
  f = open("../txt/light-kitchen.txt", "r")
  c = f.read()
  f.close()
 # print ("stato:" + c + state)
  print(state)
  
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
 else:
   state="notpushed"
   my_function(state)
