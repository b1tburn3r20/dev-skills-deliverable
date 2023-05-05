const express = require('express')
const router = express.Router()
const skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)
router.post('/', skillsCtrl.create)



//dangerous
router.get('/skills/:id', skillsCtrl.show)


module.exports = router