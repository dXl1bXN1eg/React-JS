import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaHdd, FaNetworkWired, FaUser, FaServer } from "react-icons/fa";
import '../css/system.css';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SystemInfo = () => {
    const [systemInfo, setSystemInfo] = useState({
        disks: [],
        network: {},
        users: [],
        ip: "",
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [requestChartData, setRequestChartData] = useState({
        labels: ['GET', 'POST', 'PUT'], // İstek türleri
        datasets: [
            {
                label: 'Request Counts',
                data: [0, 0, 0], // Başlangıçta tüm değerler 0
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    });

    const [userChartData, setUserChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Users',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    });

    useEffect(() => {
        const getSystemInfo = async () => {
            setLoading(true);
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

                const userLabels = users.data;
                const userData = users.data.map((_, index) => index + 1);

                setUserChartData({
                    labels: userLabels,
                    datasets: [
                        {
                            label: "Kullanıcılar",
                            data: userData,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                });
            } catch (error) {
                console.error("Error getting system info:", error);
                setError("Veri alınırken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };

        getSystemInfo();
    }, []);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/requests');
                const data = await response.json();

                // Son 3 isteği al
                const lastThreeRequests = data.slice(-3);

                // İstek türlerini say
                const requestCounts = {
                    GET: 0,
                    POST: 0,
                    PUT: 0,
                };

                data.forEach(req => {
                    if (req.method in requestCounts) {
                        requestCounts[req.method]++;
                    }
                });

                // Chart verisini güncelle
                setRequestChartData(prevState => ({
                    ...prevState,
                    datasets: [{
                        ...prevState.datasets[0],
                        data: [
                            requestCounts.GET,
                            requestCounts.POST,
                            requestCounts.PUT,
                        ],
                    }],
                }));
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []);


    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    const doughnutChartData = {
        labels: ['Type 1', 'Type 2', 'Type 3'],
        datasets: [
            {
                label: 'İstek Türleri',
                data: [30, 50, 20],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

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

            {/* Grafiklerin yerleştirileceği alan */}
            <div className="chart-row">
                {/* Kullanıcı Grafiği */}
                <div className="chart-container">
                    <h3 className="chart-title">Kullanıcı Grafiği</h3>
                    <Bar data={userChartData} options={{ responsive: true }} />
                </div>

                {/* Atılan Requestler Grafiği */}
                <div className="chart-container">
                    <h3 className="chart-title">Atılan Requestler Grafiği</h3>
                    <Bar data={requestChartData} options={{ responsive: true }} />
                </div>

                {/* Dairesel Grafik */}
                <div className="chart-container">
                    <h3 className="chart-title">İstek Türleri Grafiği</h3>
                    <Doughnut data={doughnutChartData} options={{ responsive: true }} />
                </div>
            </div>
        </div>
    );
};

export default SystemInfo;
