const express = require('express');
const { Airport, City, Country } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/airport', async (req, res) => {
  const { iata_code } = req.query;
  try {
    const airport = await Airport.findOne({
      where: { iata_code },
      include: {
        model: City,
        include: Country
      }
    });

    if (!airport) {
      return res.status(404).json({ error: 'Airport not found' });
    }

    const result = {
      iata_code: airport.iata_code,
      name: airport.name,
      city: airport.City.name,
      country: airport.City.Country ? airport.City.Country.name : null
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
