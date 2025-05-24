from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample inventory data
inventory = [
    {'id': 1, 'name': 'Product A', 'quantity': 100},
    {'id': 2, 'name': 'Product B', 'quantity': 200},
]
# Sample orders data
orders = [
    {'id': 1, 'product_name': 'Product A', 'status': 'Delivered'},
    {'id': 2, 'product_name': 'Product B', 'status': 'Processing'},
]

@app.route('/inventory')
def get_inventory():
    return jsonify(inventory)

@app.route('/orders')
def get_orders():
    return jsonify(orders)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
