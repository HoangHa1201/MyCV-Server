const DataColor = require("../models/dataColor");

const getAllDataCtrl = async (req, res, next) => {
    try {
        const data = await DataColor.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
}

const getDetailDataCtrl = async (req, res, next) => {
    try {
        const dataDetail = await DataColor.findById(req.params.dataColorId);
        res.json(dataDetail);
    } catch (error) {
        res.json({ message: error });
    }
}

const postDataCtrl = async (req, res, next) => {

    const data = new DataColor({
        title: req.body.title,
        method: req.body.method,
    });
    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch (error) {
        res.send(error);
    }
}

const updateDataCtrl = async (req, res, next) => {
    try {
        const updatedData = await DataColor.updateOne(
            { _id: req.params.dataColorId },
            {
                $set: {
                    title: req.body.title,
                    method: req.body.method,
                },
            }
        );
        res.json(updatedData);
    } catch (error) {
        res.json({ message: error });
    }
}

const deleteDataCtrl = async (req, res, next) => {
    try {
        const removedData = await DataColor.remove({ _id: req.params.dataColorId });
        res.json(removedData);
    } catch (error) {
        res.json({message: error})
    }
}

module.exports = {
    getAllDataCtrl,
    getDetailDataCtrl,
    postDataCtrl,
    updateDataCtrl,
    deleteDataCtrl
};