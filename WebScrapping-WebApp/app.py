import json
from flask import Flask,jsonify
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS

url = "https://www.moneycontrol.com/commodity/"

#commodity class
class commodity:
    def __init__(self,name,price,change,per_change,date):
        self.name = name
        self.price = price
        self.change = change
        self.per_change = per_change
        self.date = date

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)

def getItems():
    r = requests.get(url)

    htmlContent = r.content
    soup = BeautifulSoup(htmlContent,'html.parser')

    div = soup.find('div',attrs={'class':'commodity_container'})
    div_table = soup.find('div',attrs={'class':'table_container'})

    table = div_table.find_all('table',attrs={'class':'mctable1'})
    commodities_table = table[1]
    rows = commodities_table.find_all('tr')

    como = []
    for row in rows:
        data = row.find_all('td')
        
        n = data[0].text
        ind = -1
        for j in range(len(n)):
            if(n[j].isnumeric()):
                ind = j
                break
        
        c = commodity(n[1:ind],data[1].text,data[2].text,data[3].text,data[0].find('div').text)
        commodityJsonData = json.dumps(c.toJson(),indent = 4)
        commodityJson = json.loads(commodityJsonData)
        commodityJson = json.loads(commodityJson)
        como.append(commodityJson)
    return como

app = Flask(__name__)
# CORS(app)
CORS(app, origins=["http://localhost:3000", ])

@app.route('/getData', methods = ['GET'])
def hello_world():
    como = getItems()
    return jsonify(como)

if __name__ == "__main__":
    app.run(debug=True)




# for i in range(len(name)):
#     print(name[i]+"   " + price[i] + "    " + change[i] + "   " + per_change[i])