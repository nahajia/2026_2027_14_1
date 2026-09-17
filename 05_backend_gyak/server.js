const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'varosok'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// megye tábla lekérdezése
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
//város és megye lekérdezés
app.get('/varosTeljes', async (req, res) => {
    try {
        const [result] = await pool.query(`
            select *
            from varos
            inner join megye
            on varos.megyeid=megye.id;
            
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
//értéktől kisebb népességet keresünk
app.post('/nepessegKisebb', async (req, res) => {
    const {szam}=req.body
    try {
        const [result] = await pool.query(`
            select *
            from varos
            inner join megye
            on varos.megyeid=megye.id
            where varos.nepesseg<?
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

//paraméteres lekérdezés
//megyét id alapján lekérdezünk
app.post('/megye/:id', async (req, res) => {
    const {id}=req.params
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM megye
            where megye.id=?
            
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

//egy város lekérdezése id alapján
//bemenet: id -parameteres
app.post('/varos/:id', async (req, res) => {
    const {id}=req.params
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM varos
            where varos.id=?
            
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
//adott id-jú megye és adott népességek között 
//bemenet: megyeid - parameter, 2 népesség:also,felso-body
//1 megye, 1000 és 2000 közötti
app.post('/megyeKozott/:id', async (req, res) => {
    const {id}=req.params
    const {also,felso}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM varos
            where varos.megyeid=? and (varos.nepesseg BETWEEN ? and ?);
            
            `,[id,also,felso]);

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