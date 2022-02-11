import subprocess
import multiprocessing
import tkinter

m = tkinter.Tk(className="Istana bangunan")
m.geometry("400x400")

# membuat fungsi menjalankan program


def run_program():
    # p1 = subprocess.Popen('')
    p1 = subprocess.Popen('calc', shell=True)
    p1.wait()


# membuat tombol
run_button = tkinter.Button(m, text="Running", command=run_program)
run_button.place(x=50, y=50)


m.mainloop()
