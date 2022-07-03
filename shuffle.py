import random
import os

# names = ["Ashley.jpg", "Kyle.jpg", "Lauren.jpg", "Thomas.jpg", "Michael.jpg", "Dominique.jpg"]
newNames = []

files = os.listdir("./images")
# discard = files.pop(0)
print(files)

old = "./images/"


# for z in files:
#    print(old + z)


counter = 0

"""while len(names) != 0:
    y = random.randint(0,len(names)-1) 
    print(names[y]+', '+str(counter))
    counter = counter+1
    names.pop(y)"""

# next rename each file using the counter

while len(files) != 0:
    y = random.randint(0, len(files) - 1)

    # print(names[y])

    os.rename(old + files[y], old + "00000" + str(counter) + ".jpg")

    # os.rename(old + files[y], new + str(counter) + ".jpg")
    # print(new + str(counter) + ".jpg")
    # os.rename( + files[y], old + str(counter) + ".jpg")
    # files[y] = str(counter)+'.jpg'
    newNames.append(files[y])
    counter = counter + 1
    files.pop(y)

print(newNames)
