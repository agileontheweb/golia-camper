import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

while True:
    if GPIO.input(16) == GPIO.HIGH:
     print("Porta chiusa!")
    else:
     print("porta aperta")
