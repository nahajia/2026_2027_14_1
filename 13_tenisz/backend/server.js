const express = require('express');
const mysql = require('mysql2/promise');
const cors=require("cors")

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tenisz2026'
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/jatekos', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM jatekos`);

        if (result.length === 0) {
            return res.status(400).json({
                error: 'Nem található'
            });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

app.get('/bejegyzes', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM bejegyzes
            inner join jatekos
            on jatekos.jatekos_id=bejegyzes.bejegyzes_jatekos_id
            `);

        if (result.length === 0) {
            return res.status(400).json({
                error: 'Nem található'
            });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//csökkenően
app.get('/bejegyzesCsokkeno', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM bejegyzes
            inner join jatekos
            on jatekos.jatekos_id=bejegyzes.bejegyzes_jatekos_id
            order by bejegyzes_id desc
            `);

        if (result.length === 0) {
            return res.status(400).json({
                error: 'Nem található'
            });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

// Szerver indítása
app.listen(port, () => {
    console.log(`Szerver fut: http://localhost:${port}`);
});