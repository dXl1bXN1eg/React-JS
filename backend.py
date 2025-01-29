from flask import Flask, jsonify, request
from flask_cors import CORS
import socket
import psutil
import os
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# SQLite veritabanı bağlantısı
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not password or not name or not email:
        return jsonify({"error": "Username, password, name, and email are required"}), 400

    hashed_password = generate_password_hash(password)

    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)", 
                       (username, hashed_password, name, email))
        conn.commit()
    except sqlite3.IntegrityError:
        return jsonify({"error": "Username or email already exists"}), 400
    finally:
        conn.close()

    return jsonify({"message": "User  registered successfully"}), 201


@app.route('/api/ip')
def get_ip():
    ip = socket.gethostbyname(socket.gethostname())
    return jsonify({"ip": ip})

@app.route('/api/disks')
def get_disks():
    disks = []
    for partition in psutil.disk_partitions():
        usage = psutil.disk_usage(partition.mountpoint)
        size_gb = usage.total // (2**30)  
        if size_gb > 0:  
            disks.append({"name": partition.device, "size": f"{size_gb}GB"})
    return jsonify(disks)

@app.route('/api/network')
def get_network():
    network_info = psutil.net_if_addrs()
    network = {}
    for interface, addresses in network_info.items():
        for address in addresses:
            if address.family == socket.AF_INET:
                network["interface"] = interface
                network["ip"] = address.address
                network["status"] = "up" if psutil.net_if_stats()[interface].isup else "down"
    return jsonify(network)

# Veritabanı oluşturma
def init_db():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/users')
def get_users():
    users = set()  
    for user in psutil.users():
        users.add(user.name)  
    return jsonify(list(users))  

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
