const User = require('../models/user');

exports.addUser = async (req, res, next) => {
    try {

        console.log(req.body);
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;

        const data = await User.create({ name: name, name, description: description, price: price, quantity: quantity });
        res.status(201).json({ newUserDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    }
    catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const uId = req.params.id;
        await User.destroy({ where: { id: uId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
exports.editUser = async (req, res) => {
    try {
        const uId = req.params.id;

        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;

        await User.update({ name: name, name, description: description, price: price, quantity: quantity }, { where: { id: uId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log('err, control, edit');
        res.status(500).json(err);
    }
}
