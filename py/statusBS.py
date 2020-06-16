#!/usr/bin/env python
from ina219 import INA219
from ina219 import DeviceRangeError
import threading

SHUNT_OHMS = 0.1

def statusVoltage():
    ina = INA219(SHUNT_OHMS)
    ina.configure()

#    while True:
#    print("Bus Voltage: %.3f V" % ina.voltage())
    volt = ina.voltage()
    print(volt)
    f = open('../txt/statusBS.txt','w')
    f.write(str(ina.voltage()))
    f.close()

#if __name__ == "__main__":
 #   read()

def setInterval(func,time):
    e = threading.Event()
    while not e.wait(time):
        func()

setInterval(statusVoltage,2)
