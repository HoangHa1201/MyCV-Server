
const DataEdu = require('../models/dataEducation');

const getAllDataCtrl = async (req, res, next) => {
    try {
        const getAllData = await DataEdu.find();
        res.json(getAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const getDetailData = await DataEdu.findById(req.params.DataEduId);
        res.json(getDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try {
        const newData = new DataEdu({
            start: req.body.start,
            end: req.body.end,
            major: req.body.major,
            university: req.body.university,
            description: req.body.description,
        })
        const savedData = await newData.save()
        res.json(savedData);
    } catch (error) {
        throw error;
    }
}

const updateDataCtrl = async (req, res, next) => {
    try {
        const updatedData = await DataEdu.updateOne(
            { _id: req.params.DataEduId },
            {
                $set: {
                    start: req.body.start,
                    end: req.body.end,
                    major: req.body.major,
                    university: req.body.university,
                    description: req.body.description,
                }
            }
        )
        res.json(updatedData);
    } catch (error) {
        throw error;
    }
}

const deleteDataCtrl = async (req, res, next) => {
    try {
        const deletedData = await DataEdu.remove({ _id: req.params.DataEduId })
        res.json(deletedData);
    } catch (error) {
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