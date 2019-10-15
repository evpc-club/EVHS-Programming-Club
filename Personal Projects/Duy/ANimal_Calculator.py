import time

def speed(legs, length):
    speed = legs * length
    return(speed)
input("THis is a speed calculator, press anything to continue and enter")

moi = speed(int(input("How many legs do you have ")),int(input("How long are your legs ")))
dog = speed(int(input("How many legs does your dog have ")), int(input("How long are your dogs' legs ")))

print("Calculating")
time.sleep(2)
print("-_-_-_-_-_-_-_-_-_-_-Results-_-_-_-_-_-_-_-_-_-_-\n")

if moi >= dog:
    print("You can eat your dog ez pz")
elif moi <= dog:
    print("You need to do a lot more training like me to get the dog")
elif moi == dog:
    print("Just run faster idiot to get dog")



