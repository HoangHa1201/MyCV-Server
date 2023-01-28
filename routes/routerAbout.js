const express = require("express");
const routerAbout = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/aboutCtrl')

//! ============Create Router API ================
// get all the posts
routerAbout.get('/getAllDataAbout', getAllDataCtrl);

// get details data
routerAbout.get('/getDetailDataAbout/:DataAboutId', getDetailDataCtrl)

// submit a post
routerAbout.post('/postDataAbout', postDataCtrl)

// update a post
routerAbout.patch('/updateDataAbout/:DataAboutId', updateDataCtrl)

// delete a post
routerAbout.delete('/deleteDataAbout/:DataAboutId', deleteDataCtrl)


module.exports = routerAbout;