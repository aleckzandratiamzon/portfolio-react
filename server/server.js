import express from 'express';
import cors from 'cors';
import Users from './models/Users.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const port = 3002;

app.use(express.json());

app.use(cors());

Users.sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});