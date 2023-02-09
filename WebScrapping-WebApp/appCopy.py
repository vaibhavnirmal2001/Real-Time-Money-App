# import json
# from flask import Flask, jsonify, render_template

# import requests

# from bs4 import BeautifulSoup
# from flask_cors import CORS

# # URL to fetch data from
# url = "https://moneycontrol.com/"




# # commodity class
# class commodity:
#     def __init__(self, name, price, change, per_change):
#         self.name = name
#         self.price = price
#         self.change = change
#         self.per_change = per_change

#     def toJson(self):
#         return json.dumps(self, default=lambda o: o.__dict__)


# # function to get values from moneycontrol website
# def getItems():
#     r = requests.get(url)

#     htmlContent = r.content
#     soup = BeautifulSoup(htmlContent, 'html.parser')

#     div = soup.find('div', attrs={'class': 'PR tab-pane in active fade'})

#     table = div.find('table', attrs={'class': 'rhsglTbl'})
#     rows = table.find_all('tr')

#     i = 0

#     como = []
#     for row in rows:

#         if i == 0:
#             i += 1
#             continue
#         else:
#             # print(row)
#             data = row.find_all('td')
#             c = commodity(data[0].text.strip(), data[1].text.strip(), data[3].text.strip(), data[4].text.strip())
#             commodityJsonData = json.dumps(c.toJson(), indent=4)
#             commodityJson = json.loads(commodityJsonData)
#             commodityJson = json.loads(commodityJson)
#             como.append(commodityJson)

#     return como


# app = Flask(__name__)
# CORS(app)

# CORS(app, origins=["http://localhost:3000"])



# @app.route('/getData', methods=['GET'])
# def hello_world():
#     como = getItems()
#     return jsonify(como)


# if __name__ == "__main__":
#     app.run(debug=True)

