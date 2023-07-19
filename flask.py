# Flask Imports
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

#import pythonTranslater

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/translate', methods = ['POST'])
def translate():
  try:
    data = request.get_json()
    print(data)
    if "desc" in data:

      src = data['desc']
      output = pythonTranslater.eng_to_python(src)
      return jsonify({"results" : output})
      
    else:
      print('missing description')
      return jsonify({"results" : "missing description"})

  except:
    print('Error')
    return jsonify({"results" : "Server Error"})




#src = "program to sort a list of dictionaries by key"
#pythonTranslater.eng_to_python(src)
  
app.run(host='0.0.0.0', port=81)