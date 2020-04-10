#!/usr/bin/python

import RPi.GPIO as GPIO
import time
import sys
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(26,GPIO.OUT)
GPIO.setup(19,GPIO.OUT)

status = sys.argv[1]

def power():
 print "Profumo on"
 GPIO.output(26,GPIO.HIGH)
 time.sleep(2)
 print "Profumo off"
 GPIO.output(26,GPIO.LOW)

def time():
 print "cambio durata"
 GPIO.output(26,GPIO.HIGH)
 time.sleep(0.5)
 GPIO.output(26,GPIO.LOW)


def light():
 print "cambio luce"
 GPIO.output(19,GPIO.HIGH)
 time.sleep(0.5)
 GPIO.output(19,GPIO.LOW)

if status == "power":
    power()
if status == "time":
    time()
if status == "light":
    light()
