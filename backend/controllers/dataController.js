const {db} = require('../database')

module.exports = {
    uploadData: (req,res) => {
        // menangkap data dari user
        // console.log(req.body)
        const {
            nama,
            harga_beli,
            harga_jual,
            stok,
            keterangan,
            database
        } = req.body

        // insert data
        let insestQuery = `INSERT INTO ${database} (nama_barang,harga_beli,harga_jual,stok,keterangan) VALUES(${db.escape(nama)},${db.escape(harga_beli)},${db.escape(harga_jual)},${db.escape(stok)},${db.escape(keterangan)});`
        db.query(insestQuery, (err,result) => {
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send({messages: `Data berhasil di tambahkan`})
        })
    },
    getAllData : (req, res) => {
        console.log('masuk all data')
        let getQuery = `SELECT * FROM alat_bangunan UNION ALL SELECT * FROM alat_motor;`
        
        db.query(getQuery, (err, result) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })

    },
    getData : (req,res) => {
        // get data
        // console.log(req.params.offset)
        let getQuery = `SELECT * FROM ${req.query.database} LIMIT 10 OFFSET ${req.params.offset};`
        let countQuery = `SELECT COUNT(*) as jumlah FROM ${req.query.database};`

        db.query(countQuery, (err,result1) => {
            if(err){
                return err;
            }
            db.query(getQuery, (err,result2) => {
                if(err){
                    return res.status(500).send(err)
                }
                res.status(200).send({rows: result1, data: result2})
            })
        })
    },
    getSearchData: (req,res) => {
        // console.log(req.query.word)
        const word = req.query.word
        const database = req.query.database
        let searchQuery = `SELECT * FROM ${database} WHERE nama_barang LIKE '${word}%';`;

        db.query(searchQuery, (err,result) => {
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    updateData: (req, res) => {
        const {
            id,
            nama,
            harga_beli,
            harga_jual,
            stok,
            keterangan,
            database
        } = req.body 

        let updateQuery = `UPDATE ${database} SET nama_barang=${db.escape(nama)}, harga_beli=${db.escape(harga_beli)}, harga_jual=${db.escape(harga_jual)}, harga_beli=${db.escape(harga_beli)}, stok=${db.escape(stok)}, keterangan=${db.escape(keterangan)} WHERE id=${id};`

        db.query(updateQuery, (err, result) => {
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    deleteData: (req, res) => {
        // console.log(req.body)
        const {
            id,
            database
        } = req.body
        let deleteQuery = `DELETE FROM ${database} WHERE id=${db.escape(id)}`

        db.query(deleteQuery, (err, result) => {
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    }
}