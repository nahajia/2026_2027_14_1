const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors')

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'milliomosadatb'
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/tema', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM tema`);

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

app.get('/jatekos', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM jatekos`);

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

app.get('/kerdesTema', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM kerdes
            inner join tema
            on tema.tema_id=kerdes.kerdes_temaid
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

//POST végpont -SELECT
app.post('/keresKerdes', async (req, res) => {
    const {szo}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM kerdes
            inner join tema
            on tema.tema_id=kerdes.kerdes_temaid
            where kerdes.kerdes_szoveg like ?
            `,[`%${szo}%`]);

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
//POST-os végpont - INSERT
app.post('/temaFelvitel', async (req, res) => {
    const {tema_nev}=req.body
    try {
        const [result] = await pool.query(`
            insert into tema values (null,?)
            `,[tema_nev]);

        res.status(200).json({message:"Sikeres felvitel"});

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//POST-os végpont - INSERT
app.post('/kerdesFelvitel', async (req, res) => {
    const {kerdes_szoveg, kerdes_jo, kerdes_rossz1, kerdes_rossz2, kerdes_rossz3, kerdes_temaid}=req.body
    try {
        const [result] = await pool.query(`
            insert into kerdes values (null,?,?,?,?,?,?)
            `,[kerdes_szoveg, kerdes_jo, kerdes_rossz1, kerdes_rossz2, kerdes_rossz3, kerdes_temaid]);

        res.status(200).json({message:"Sikeres felvitel"});

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