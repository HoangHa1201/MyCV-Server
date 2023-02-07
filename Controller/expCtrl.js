
const DataExp = require('../models/dataExp');

const getAllDataCtrl = async (req, res, next) => {
    try {
        const getAllData = await DataExp.find();
        res.json(getAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const getDetailData = await DataExp.findById(req.params.DataExpId);
        res.json(getDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try {
        const newData = new DataExp({
            major: req.body.major,
            company: req.body.company,
            start: req.body.start,
            end: req.body.end,
            content: req.body.content,
            projectName: req.body.projectName,
            projectDemo: req.body.projectDemo,
            product: req.body.product
        })
        const savedData = await newData.save()
        res.json(savedData);
    } catch (error) {
        throw error;
    }
}

const updateDataCtrl = async (req, res, next) => {
    try {
        const updatedData = await DataExp.updateOne(
            { _id: req.params.DataExpId },
            {
                $set: {
                    major: req.body.major,
                    company: req.body.company,
                    start: req.body.start,
                    end: req.body.end,
                    content: req.body.content,
                    projectName: req.body.projectName,
                    projectDemo: req.body.projectDemo,
                    product: req.body.product
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
        const deletedData = await DataExp.remove({ _id: req.params.DataExpId })
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