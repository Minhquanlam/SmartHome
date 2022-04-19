The code belows show the connection between adafruit sever and how to control the device in real life
import serial.tools.list_ports
import random
import time
import  sys
from  Adafruit_IO import  MQTTClient

AIO_FEED_IDS = ["bbc-led", "bbc-pump","bbc-light-sensor-act","bbc-temp-switch","bbc-humi-switch",\
                "bbc-sound-switch","bbc-gas-switch"]
AIO_USERNAME = "tung_tran2401"
AIO_KEY = "aio_fHLz47g1iXpl1kjm9nndyYajWbXt"

def  connected(client):
    print("Ket noi thanh cong...")
    for feed in AIO_FEED_IDS:
        client.subscribe(feed)

def  subscribe(client , userdata , mid , granted_qos):
    print("Subcribe thanh cong...")

def  disconnected(client):
    print("Ngat ket noi...")
    sys.exit (1)

def  message(client , feed_id , payload):
    print("Nhan du lieu: " + payload)
    if isMicrobitConnected:
        ser.write((str(payload) + "#").encode())

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB Serial Device" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort

isMicrobitConnected = False
if getPort() != "None":
    ser = serial.Serial( port=getPort(), baudrate=115200)
    isMicrobitConnected = True


def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    try:
        if splitData[1] == "TEMP":
            client.publish("BBC_TEMPERATURE", splitData[2])  #splitData[2] is the value brought from the sever to the source code
        elif splitData[1] == "HUMI":
            client.publish("BBC_HUMI", splitData[2])
        elif splitData[1] == "LIGHT":
            client.publish("BBC_LIGHT", splitData[2])
        elif splitData[1] == "SOUND":
            client.publish("BBC_SOUND", splitData[2]) 
        elif splitData[1] == "GAS":
            client.publish("BBC_GAS", splitData[2])
    except:
        pass




mess = ""
def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]

while True:
    if isMicrobitConnected:
        readSerial()

    time.sleep(1)
