import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurando a conexão com PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projetobdd',
  password: '05122007',
  port: '5432',
});

// Rota para buscar os dados da agenda
app.get('/agenda', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM agenda');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar a agenda');
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
