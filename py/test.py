class AdventureDone(Exception): pass

def yn(x, f, g):
    if x == 'y':
         print(f)
    elif x == 'n':
         print(g)
         raise AdventureDone

name = raw_input('What is your name, adventurer? ')
print 'Nice to meet you, '+name+'. Are you ready for your adventure?'

try:
    while True:
        ready = raw_input('y/n ')
        yn(ready, "Good, let's start our adventure!",
           'That is a real shame.. Maybe next time')
except AdventureDone:
    pass
    # or print "Goodbye." if you want

