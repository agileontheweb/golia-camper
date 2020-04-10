#!/usr/bin/python

import RPi.GPIO as GPIO
import time
import sys
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(26,GPIO.OUT)
GPIO.setup(19,GPIO.OUT)

def power():
 print "Profumo on"
 GPIO.output(26,GPIO.HIGH)
 time.sleep(2)
 print "Profumo off"
 GPIO.output(26,GPIO.LOW)

def min():
 print "cambio durata"
 GPIO.output(26,GPIO.HIGH)
 time.sleep(0.5)
 GPIO.output(26,GPIO.LOW)


def light():
 print "cambio luce"
 GPIO.output(19,GPIO.HIGH)
 time.sleep(0.5)   
 GPIO.output(19,GPIO.LOW)

status = sys.argv[1]

if status == "power":
    power()
