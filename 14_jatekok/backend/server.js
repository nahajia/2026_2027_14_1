const express = require('express');
const mysql = require('mysql2/promise');
const cors=require('cors')

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jatek2026'
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/kepek",express.static("kepek"))
app.use("/kepek2",express.static("kepek2"))

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/platform', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM platform
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
//bemente: szam, kimenete platfrorm játékai
app.post('/platformSzur', async (req, res) => {
    const {szam}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM platform
            inner join jatek
            on jatek_platform_id=platform_id
            where platform_id=?
            `,[szam]);

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



