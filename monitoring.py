from flask import Flask, jsonify
from flask_cors import CORS
import socket
import psutil
import os

app = Flask(__name__)
CORS(app)  

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

@app.route('/api/users')
def get_users():
    users = set()  
    for user in psutil.users():
        users.add(user.name)  
    return jsonify(list(users))  

if __name__ == '__main__':
    app.run(debug=True)
