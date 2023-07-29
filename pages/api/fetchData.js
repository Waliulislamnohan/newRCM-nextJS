// pages/api/fetchData.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://trackio-prototype.000webhostapp.com/read.php');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}

