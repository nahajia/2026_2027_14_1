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
//kereses, bemenete : szó, jatek nevében és leirasaban keres
app.post('/jatekKeresSzo', async (req, res) => {
    const {szo}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM platform
            inner join jatek
            on jatek_platform_id=platform_id
            where jatek_nev like ? or jatek_leiras like ?
            `,[`%${szo}%`,`%${szo}%`]);

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
//keresés max árig keres
app.post('/jatekKeresAr', async (req, res) => {
    const {ar}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM platform
            inner join jatek
            on jatek_platform_id=platform_id
            where jatek_ar<=?
            `,[ar]);

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
//játék felvitele
app.post('/jatekFelvitel', async (req, res) => {
    const { jatek_nev, jatek_ev, jatek_ertekeles, jatek_ar, jatek_leiras, jatek_kep, jatek_platform_id}=req.body
    try {
        const [result] = await pool.query(`
            insert into jatek values (null,?,?,?,?,?,?,? )
            `,[ jatek_nev, jatek_ev, jatek_ertekeles, jatek_ar, jatek_leiras, jatek_kep, jatek_platform_id]);

        res.status(200).json({message:"Sikeres felvitel!"});

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//játék törlése
app.delete('/jatekTorles/:id', async (req, res) => {
    const {id}=req.params
    try {
        const [result] = await pool.query(`
            delete from jatek where jatek_id=?
            `,[ id ]);

        res.status(200).json({message:"Sikeres törlés!"});

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//jatek
app.get('/jatek', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM jatek
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
//egy játék id alapján
app.post('/jatek/:id', async (req, res) => {
    const {id}=req.params
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM jatek
            where jatek_id=?
            `,[id]);

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
//játék módositása
app.put('/jatekModosit/:jatek_id', async (req, res) => {
    const {jatek_id}=req.params
    const { jatek_nev, jatek_ev, jatek_ertekeles, jatek_ar, jatek_leiras, jatek_kep, jatek_platform_id}=req.body
    try {
        const [result] = await pool.query(`
            update jatek set 
                jatek_nev=?, 
                jatek_ev=?, 
                jatek_ertekeles=?, 
                jatek_ar=?, 
                jatek_leiras=?, 
                jatek_kep=?, 
                jatek_platform_id=?
            where jatek_id=?
            `,[ jatek_nev, jatek_ev, jatek_ertekeles, jatek_ar, jatek_leiras, jatek_kep, jatek_platform_id, jatek_id ]);

        res.status(200).json({message:"Sikeres módosítás!"});

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



