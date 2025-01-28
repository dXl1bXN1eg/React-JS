import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaHdd, FaNetworkWired, FaUser, FaServer } from "react-icons/fa";
import '../css/system.css';

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({
    disks: [],
    network: {},
    users: [],
    ip: "",
  });

  useEffect(() => {
    const getSystemInfo = async () => {
      try {
        const [disks, network, users, ip] = await Promise.all([
          axios.get("http://localhost:5000/api/disks"),
          axios.get("http://localhost:5000/api/network"),
          axios.get("http://localhost:5000/api/users"),
          axios.get("http://localhost:5000/api/ip")
        ]);

        setSystemInfo({
          disks: disks.data,
          network: network.data,
          users: users.data,
          ip: ip.data.ip,
        });
      } catch (error) {
        console.error("Error getting system info:", error);
      }
    };

    getSystemInfo();
  }, []);

  return (
    <div className="system-info-container">
      <motion.div
        className="system-info-grid"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Disk Card */}
        <Card className="custom-card">
          <CardContent className="custom-card-content">
            <div className="card-header">
              <div className="icon-container disk-icon">
                <FaHdd className="icon" />
              </div>
              <h3 className="card-title">Diskler</h3>
            </div>
            <div className="card-body">
              {systemInfo.disks.map((disk, index) => (
                <div key={index} className="disk-item">
                  <span className="disk-name">{disk.name}</span>
                  <span className="disk-size">{disk.size}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Network Card */}
        <Card className="custom-card">
          <CardContent className="custom-card-content">
            <div className="card-header">
              <div className="icon-container network-icon">
                <FaNetworkWired className="icon" />
              </div>
              <h3 className="card-title">Ağ</h3>
            </div>
            <div className="card-body">
              {Object.entries(systemInfo.network).map(([key, value], index) => (
                <div key={index} className="network-item">
                  <span className="network-key">{key}</span>
                  <span className="network-value">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Users Card */}
        <Card className="custom-card">
          <CardContent className="custom-card-content">
            <div className="card-header">
              <div className="icon-container user-icon">
                <FaUser className="icon" />
              </div>
              <h3 className="card-title">Kullanıcılar</h3>
            </div>
            <div className="card-body">
              {systemInfo.users.map((user, index) => (
                <div key={index} className="user-item">
                  <span className="user-name">{user}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* IP Card */}
        <Card className="custom-card">
          <CardContent className="custom-card-content">
            <div className="card-header">
              <div className="icon-container ip-icon">
                <FaServer className="icon" />
              </div>
              <h3 className="card-title">IP Adresi</h3>
            </div>
            <div className="ip-address">
              <span className="ip-value">{systemInfo.ip}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SystemInfo;