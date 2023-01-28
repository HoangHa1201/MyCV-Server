const express = require("express");
const routerHeader = express.Router();

//! ============Import API Controller================
const {getAllDataCtrl, getDetailDataCtrl, postDataCtrl, updateDataCtrl, deleteDataCtrl} = require('../Controller/headerCtrl');

//! ============Create Router API ================

// get all the data header
routerHeader.get('/getAllDataHeader', getAllDataCtrl);

// get detail data header
routerHeader.get('/getDetailDataHeader/:DataHeaderId', getDetailDataCtrl);

// create new data header
routerHeader.post('/createDataHeader', postDataCtrl);

// update data header by id
routerHeader.patch('/updateDataHeader/:DataHeaderId', updateDataCtrl);

// Delete data header by id
routerHeader.delete("/deleteDataHeader/:DataHeaderId", deleteDataCtrl);
module.exports = routerHeader;