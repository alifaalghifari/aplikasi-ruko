import tkinter
from tkinter import messagebox
import os
import subprocess
import shutil
from tkinter.constants import S

m = tkinter.Tk(className="Aplikasi Istana bangunan")
m.geometry("400x400")


def run_server():
    # path = "D:\Project\Ruko\\backend/"
    # os.chdir(path)
    # os.system('npm start')
    # subprocess.run("npm start", cwd="D:\Project\Ruko\\backend", shell=True)
    subprocess.Popen(
        ["D:\Project\Ruko\istana-bangunan", "npm start"], shell=True)
    subprocess.Popen.wait()

# subprocess.Popen(["D:\Project\Ruko\istana-bangunan", "npm start"], shell=True)

# subprocess.run(['npm', 'start'],
#                cwd="D:\Project\Ruko\istana-bangunan", shell=True)
# subprocess.run('calc', shell=True)


# subprocess.run('cd D:\Project\Ruko\istana-bangunan')
# subprocess.call(['cmd', '/c', 'npm start'], cwd="D:\Project\Ruko\\backend")
# os.system('ls')

# subprocess.call(["cd", "D:\Project", "npm", "start"], shell=True)


# B_apps = tkinter.Button(m, text="Hello", command=run_apps)
B_server = tkinter.Button(m, text="Server", command=run_server)
# B_apps.place(x=50, y=50)
B_server.place(x=150, y=150)


m.mainloop()
