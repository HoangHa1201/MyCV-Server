const express = require("express");
const routerColor = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/colorCtrl');

//! ============Create Router API ================
// get all the posts
routerColor.get('/getAllDataColor', getAllDataCtrl);

// get details data
routerColor.get('/getDetailDataColor/:dataColorId', getDetailDataCtrl);

// submit a post
routerColor.post('/postDataColor', postDataCtrl);

// update a post
routerColor.patch('/updateDataColor/:dataColorId', updateDataCtrl);

// delete a post
routerColor.delete('/deleteDataColor/:dataColorId', deleteDataCtrl);


module.exports = routerColor;