
const DataSkill = require('../models/dataSkill');

const getAllDataCtrl = async (req, res, next) => {
    try {
        const getAllData = await DataSkill.find()
        res.json(getAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const getDetailData = await DataSkill.findById(req.params.DataSkillId);
        res.json(getDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try {
        const newData = new DataSkill({
            title: req.body.title,
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
        const updatedData = await DataSkill.updateOne(
            { _id: req.params.DataSkillId },
            {
                $set: {
                    title: req.body.title,
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
        const deletedData = await DataSkill.remove({ _id: req.params.DataSkillId })
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