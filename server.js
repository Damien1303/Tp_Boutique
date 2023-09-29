import express from 'express'
import mongoose from 'mongoose';
import { env } from './config/index.js';

import articles from'./routes/boutique_router.js'

const app = express();
const PORT = process.env.PORT || 1000;
app.use(express.json());
mongoose
    .connect(env.mongoURL)
    .then(() => console.log("Connexion à MongoDB réussie!!"))
    .catch(error=> console.log(error))


app.use("/api/article", articles)

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})
