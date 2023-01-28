const DataImg = require("../models/dataImg");

const getAllDataCtrl = async (req, res, next) => {
    try {
        const getAllData = await DataImg.find();
        res.json(getAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const getDetailData = await DataImg.findById(req.params.DataImgId);
        res.json(getDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try{
        const newData = new DataImg({
            title: req.body.title,
            linkImg: req.body.linkImg,
        })
        const savedData = await newData.save()
        res.json(savedData);
    } catch (error) {
        throw error;
    }
}

const updateDataCtrl = async (req, res, next) => {
    try{
        const updatedData = await DataImg.updateOne(
            { _id: req.params.DataImgId},
            {
                $set:{
                    title: req.body.title,
                    linkImg: req.body.linkImg,
                }
            }
        );
        res.json(updatedData);
    } catch (error) {
        throw error;
    }
}

const deleteDataCtrl = async (req, res, next) => {
    try{
        const removedData = await DataImg.remove({
            _id: req.params.DataImgId,
        })
        res.json(removedData);
    } catch (error){
        throw error;
    }
}
module.exports = {
    getAllDataCtrl,
    getDetailDataCtrl,
    postDataCtrl,
    updateDataCtrl,
    deleteDataCtrl,
}