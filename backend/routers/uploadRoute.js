const express = require('express')
const { dataController } = require('../controllers')
const router = express.Router()

router.post('/post', dataController.uploadData)
router.get('/get/:offset', dataController.getData)
router.get('/getSearch', dataController.getSearchData)
router.get('/getAllData', dataController.getAllData)
router.put('/put', dataController.updateData)
router.delete('/delete', dataController.deleteData)

module.exports = router