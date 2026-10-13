const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'konyvtar2026'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/konyv', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM konyv`);

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
//Ki,mikor,milyen könyvet kölcsönzött
app.get('/kolcsonzok', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT olvaso.olvaso_nev,kolcsonzes.kolcsonzes_datumki,kolcsonzes.kolcsonzes_datumbe,konyv.konyv_cim
            FROM konyv
            INNER JOIN kolcsonzes
            ON konyv.konyv_id = kolcsonzes.kolcsonzes_konyv
            INNER JOIN olvaso
            ON olvaso.olvaso_id = kolcsonzes.kolcsonzes_olvaso
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

//egy köny id alapján
app.post('/konyv/:id', async (req, res) => {
    const {id}=req.params
    try {
        const [result] = await pool.query(`
            Select *
            from konyv 
            where konyv_id=?
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

//keresés adott évben kivitt könyvek, bemenet az év, kimenet, hogy ki, mikor, mit vitt ki
app.post('/keresettEv', async (req, res) => {
    const {ev}=req.body
    try {
        const [result] = await pool.query(`
            SELECT olvaso.olvaso_nev,kolcsonzes.kolcsonzes_datumki,kolcsonzes.kolcsonzes_datumbe,konyv.konyv_cim
            FROM konyv
            INNER JOIN kolcsonzes
            ON konyv.konyv_id = kolcsonzes.kolcsonzes_konyv
            INNER JOIN olvaso
            ON olvaso.olvaso_id = kolcsonzes.kolcsonzes_olvaso
            WHERE YEAR(kolcsonzes.kolcsonzes_datumki)=?

            `,[ev]);

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

//visszahoztak egy könyvet
app.patch('/visszahoz_konyv/:id', async (req, res) => {
    const {id} = req.params
    const {datum}=req.body
    try {
        const [result] = await pool.query(`
            UPDATE kolcsonzes
            SET kolcsonzes.kolcsonzes_datumbe = ?
            WHERE kolcsonzes.kolcsonzes_id = ?

            `,[datum,id]);
        
        

        res.status(200).json({
            message: 'Frissítés sikeres!'
        });

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//Könyv felvitele
app.post('/konyvBevitel', async (req, res) => {
    const {konyv_cim,konyv_ev}=req.body
    try {
        const [result] = await pool.query(`
            INSERT INTO konyv VALUES (NULL,?,?)
            `,[konyv_cim,konyv_ev]);
        
        

        res.status(200).json({
            message: 'A bevitel megtörtént!'
        });

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

//kolcsonzéstörlés
app.delete('/kolcsonzesTorol/:id', async (req, res) => {
    const {id} = req.params
    
    try {
        const [result] = await pool.query(`
            delete from kolcsonzes 
            where kolcsonzes_id=?
            `,[id]);
        res.status(200).json({
            message: 'sikeres torles'
        });
    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

//egy olvaso osszes kolcsonzesenek a torlese bmenet olvaso neve kiment sikeres torles
app.delete('/kolcsonzoTorol', async (req, res) => {
    const {nev} = req.body
    try {
        const [result] = await pool.query(`
           DELETE FROM kolcsonzes
            WHERE kolcsonzes_olvaso=
            (SELECT olvaso.olvaso_id 
            FROM olvaso 
            WHERE olvaso.olvaso_nev=?)
            `,[nev]);
        res.status(200).json({
            message: 'sikeres torles'
        });
    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

//Modositsd a visszahozatal dátumát, adott dárumrol egy adott dátumra bemenet: régi dátum, új dátum
app.patch('/datumBeModosit', async (req, res) => {
    
    const {datumRegi,datumUj}=req.body

    try {
        const [result] = await pool.query(`
            UPDATE kolcsonzes
            SET kolcsonzes.kolcsonzes_datumbe = ?
            WHERE kolcsonzes.kolcsonzes_datumbe = ?

            `,[datumUj,datumRegi]);
        
        

        res.status(200).json({
            message: 'Frissítés sikeres!'
        });

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});

//Olvasó adatainak modósítása
app.put('/olvasoModosit/:id', async (req, res) => {
    const {id} = req.params
    const {olvaso_nev,olvaso_email}=req.body
    try {
        const [result] = await pool.query(`
            UPDATE olvaso
            SET olvaso_nev = ?, olvaso_email=?
            WHERE olvaso_id = ?

            `,[olvaso_nev,olvaso_email,id]);
        
        

        res.status(200).json({
            message: 'Frissítés sikeres!'
        });

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