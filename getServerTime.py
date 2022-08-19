import requests

def getServerTime(URL):
    response = requests.get(URL)
    time = response.headers['Date'][-12:-4]

    hh, mm, ss = map(int, time.split(':'))
    hh += 9
    if hh >= 24:
        hh -= 24

    return str(hh).zfill(2), str(mm).zfill(2), str(ss).zfill(2)
