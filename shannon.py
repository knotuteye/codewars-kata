 
import math


def greeter():
    print("-- S H A N N O N I Z E R --")
    print("This program calculates the amount of information of an event or series of events in bits based on the probability")


def selfInformation(prob):
    return math.log2(1/prob)


def entropy(prob_list):
    info_list = []
    for prob in prob_list:
        try:
            info_list.append(prob*math.log2(1/prob))
        except:
            info_list.append(0)
            print("Zero probability detected: 0 used instead of infinity quotient")

    sum = 0
    for info in info_list:
        sum += info
    return sum


if __name__ == "__main__":
    greeter()
    toggle = True
    while toggle:
        choice = input(
            "\nEnter 1 for a single event or 2 for a series of events or X to quit: ")
        if  hasattr(choice,'capitalize') and choice.capitalize() == "X":
            toggle = False
        if choice == "1":
            print("\nSingle Event")
            prob = input("Enter the probability of the event: ")
            info = str(selfInformation(float(prob))) + " bits"
            print("\nThe total information is ", info)
        if choice == "2":
            print("\nSeries of Events")
            n_events = int(input("\nEnter the number of events: "))
            print("\nEnter the probabilities consecutively")
            i = 0
            probabilities = []
            while i < n_events:
                probabilities.append(float(input()))
                i += 1
            info = str(entropy(probabilities)) + " bits"
            print("\nThe total information is ", info)