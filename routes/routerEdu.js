const express = require("express");
const routerEdu = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/eduCtrl');

//! ============Create Router API ================
// get all the posts
routerEdu.get('/getAllDataEdu', getAllDataCtrl);

// get details data
routerEdu.get('/getDetailDataEdu/:DataEduId', getDetailDataCtrl);

// submit a post
routerEdu.post('/postDataEdu', postDataCtrl);

// update a post
routerEdu.patch('/updateDataEdu/:DataEduId', updateDataCtrl);

// delete a post
routerEdu.delete('/deleteDataEdu/:DataEduId', deleteDataCtrl);


module.exports = routerEdu;