const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const diagramRoutes = require('./routes/diagramRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// API Routes
app.use('/api/diagrams', diagramRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
