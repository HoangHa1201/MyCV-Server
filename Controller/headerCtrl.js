const DataHeader = require("../models/dataHeader");

const getAllDataCtrl = async (req, res, next) => {
    try {
        const GetAllData = await DataHeader.find();
        res.json(GetAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const GetDetailData = await DataHeader.findById(req.params.DataHeaderId);
        res.json(GetDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try {
        const newData = new DataHeader({
            title: req.body.title,
            name: req.body.name,
            description: req.body.description,
        })
        const savedData = await newData.save();
        res.json(savedData);
    } catch (error) {
        throw error;
    }
}

const updateDataCtrl = async (req, res, next) => {
    try {
        const updatedData = await DataHeader.updateOne(
            { _id: req.params.DataHeaderId },
            {
                $set: {
                    title: req.body.title,
                    name: req.body.name,
                    description: req.body.description,
                }
            }
        );
        res.json(updatedData);
    } catch (error){
        throw error;
    }
}

const deleteDataCtrl = async (req, res, next) => {
    try{
        const removedData = await DataHeader.remove({
            _id: req.params.DataHeaderId,

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
    deleteDataCtrl
}
