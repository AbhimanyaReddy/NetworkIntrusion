import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__,template_folder='templates')
model = pickle.load(open('pipeline.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    features = [x for x in request.form.values()]
    final_features = [np.array(features)]
    prediction=model.predict(final_features)
    result="None"
    if(prediction=='Normal'):
        result="Normal Attack"
    elif(prediction=='DoS'):
        result="Dos Attack"
    elif(prediction=='Probe'):
        result="Probe Attack"
    elif(prediction=='U2R'):
        result="U2R Attack"
    elif(prediction=='R2L'):
        result="R2L Attack"
    return result


if __name__ == '__main__':
	app.run(port = 3000, debug=True)
