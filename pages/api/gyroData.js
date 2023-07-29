export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

    // Do something with the data received
    console.log(data);

    res.status(200).json({ message: 'POST request received successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}