const Category = require("../models/category");

const createCategory = async (req, res) => {
    try {
        const { category, keyword } = req.body;
        if(!category || !keyword) {
            return res.status(400).send({ message: "Category and keyword are required" });
        }
        const existCategory = await Category.findById({ category });
        if(existCategory) {
            return res.status(400).send({ message: "Category already exist" });
        }
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).send(newCategory);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const findAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = {
    createCategory,
    findAllCategory
};
