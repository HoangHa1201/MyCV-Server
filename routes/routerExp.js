const express = require('express');

const routerExp = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/expCtrl');

//! ============Create Router API ================

// get all the posts
routerExp.get('/getAllDataExp', getAllDataCtrl);

// get details data
routerExp.get('/getDetailDataExp/:DataExpId', getDetailDataCtrl)

// submit a post
routerExp.post('/postDataExp', postDataCtrl)

// update a post
routerExp.patch('/updateDataExp/:DataExpId', updateDataCtrl)

// delete a post
routerExp.delete('/deleteDataExp/:DataExpId', deleteDataCtrl)


module.exports = routerExp;