const express = require('express')
const { getHomePage, getVietz, PostUser, getCreate, GetEditUser, PostEditUser, GetDeleteUser, DeleteUser, findScoreStudent } = require('../controllers/homeController');
const { handeDeleteUser } = require('../sevices/CRUDservice');
const router = express.Router();

//router.method('/Route',handler)
router.get('/vietz', getVietz)

router.get('/', getHomePage)

router.post('/create-user', PostUser)
router.get('/Create', getCreate)
router.get("/Edituser/:id", GetEditUser)
router.post('/Edit-user', PostEditUser)
router.get('/deleteUser/:id', GetDeleteUser)
router.post('/Delete-user', DeleteUser)

//
router.get('/findScore-sutdent', findScoreStudent)
module.exports = router; // export default