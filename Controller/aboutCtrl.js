
const DataAbout = require('../models/dataAbout');

const getAllDataCtrl = async (req, res, next) => {
    try {
        const getAllData = await DataAbout.find()
        res.json(getAllData);
    } catch (error) {
        throw error;
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const getDetailData = await DataAbout.findById(req.params.DataAboutId);
        res.json(getDetailData);
    } catch (error) {
        throw error;
    }
}

const postDataCtrl = async (req, res, next) => {
    try {
        const newData = new DataAbout({
            title: req.body.title,
            linkImg: req.body.linkImg,
            content: req.body.content,
            linkCV: req.body.linkCV,
            address: req.body.address,
            phone: req.body.phone,
            faceBook: req.body.faceBook,
            linkedin: req.body.linkedin,
            email: req.body.email,
            website: req.body.website,
        })
        const savedData = await newData.save()
        res.json(savedData);
    } catch (error) {
        throw error;
    }
}

const updateDataCtrl = async (req, res, next) => {
    try {
        const updatedData = await DataAbout.updateOne(
            { _id: req.params.DataAboutId },
            {
                $set: {
                    title: req.body.title,
                    linkImg: req.body.linkImg,
                    content: req.body.content,
                    linkCV: req.body.linkCV,
                    address: req.body.address,
                    phone: req.body.phone,
                    faceBook: req.body.faceBook,
                    linkedin: req.body.linkedin,
                    email: req.body.email,
                    website: req.body.website,
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
        const deletedData = await DataAbout.remove({ _id: req.params.DataAboutId })
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