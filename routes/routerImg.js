const express = require('express');
const routerImg = express.Router();

//! ============Import API Controller================
const { getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl } = require('../Controller/imgCtrl');

//! ============Create Router API ================
// get all the posts
routerImg.get('/getAllDataImg', getAllDataCtrl);

// get details data
routerImg.get('/getDetailDataImg/:DataImgId', getDetailDataCtrl);

// submit a post
routerImg.post('/postDataImg', postDataCtrl);

// update a post
routerImg.patch('/updateDataImg/:DataImgId', updateDataCtrl);

// delete a post
routerImg.delete('/deleteDataImg/:DataImgId', deleteDataCtrl);

module.exports = routerImg;