import PySimpleGUI as sg
import tkinter as tk
# sg.Window(title="Hello World", layout=[[]], margins=(200, 150)).read()

layout = [[sg.Text("Hello from PySimpleGUI")], [sg.Button("OK")]]

# create window
window = sg.Window("Demo", layout)

# create an event loop
while True:
    event, values = window.read()
    # End program if user closes window or
    # presses the ok button
    if event == "OK" or event == sg.WIN_CLOSED:
        break

window.close()
