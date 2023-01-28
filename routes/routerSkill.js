const express = require('express');

const routerSkill = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/skillCtrl');

//! ============Create Router API ================

// get all the posts
routerSkill.get('/getAllDataSkill', getAllDataCtrl);

// get details data
routerSkill.get('/getDetailDataSkill/:DataSkillId', getDetailDataCtrl)

// submit a post
routerSkill.post('/postDataSkill', postDataCtrl)

// update a post
routerSkill.patch('/updateDataSkill/:DataSkillId', updateDataCtrl)

// delete a post
routerSkill.delete('/deleteDataSkill/:DataSkillId', deleteDataCtrl)


module.exports = routerSkill;