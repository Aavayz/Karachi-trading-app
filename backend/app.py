from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="Karachi Trading",
        user="postgres",
        password=os.getenv('DB_PASSWORD')
    )
    return conn

@app.route('/')
def home():
    return "Karachi Trading Co API is working!"

@app.route('/inventory', methods=['GET'])
def get_inventory():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM inventory;')
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)

@app.route('/orders', methods=['GET'])
def get_orders():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM orders;')
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
