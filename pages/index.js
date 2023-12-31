import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [gpsData, setGpsData] = useState({});
 const [gyroData, setGyroData] = useState({});
  useEffect(() => {
    fetchData();
    fetchgyroData();
  }, []);

  const fetchData = () => {
    fetch('/api/fetchData')
      .then((response) => response.json())
      .then((data) => setGpsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };
  const fetchgyroData = () => {
    fetch('/api/gyroData')
    .then((data) => setGyroData(data))
    .catch((error) => console.error('Error fetching data:', error));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Road Condition Mapping</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.condition}>
          <h1>Road Condition</h1>
          <div className={styles.gps}>
            <h2>GPS Data:</h2>
            <p>Time: {gpsData.time}</p>
            <p>Latitude: {gpsData.lat}</p>
            <p>Longitude: {gpsData.long}</p>
            
            <h2>Gyro Data:</h2>
            <p>Good / Bad</p>
          </div>
        </div>

        <div>
        <iframe src="https://trackio-prototype.000webhostapp.com/" className={styles.web}></iframe>
        </div>
      </main>


    </div>
  );
}
