const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'varos141'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/megye', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM megye 
            
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

//egy szót keresünk
app.post('/megyeKeres', async (req, res) => {
    const {szo}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM megye 
            where megye.mnev like ? 
            `,[`"%${szo}%"`]);

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