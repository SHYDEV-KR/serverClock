from flask import Flask, render_template
from getServerTime import getServerTime

app = Flask(__name__)

@app.route("/")
def hello_world():
    hour, minute, second = getServerTime('https://naver.com/')
    return render_template('index.html', hour=hour, minute=minute, second=second)