const Payment = require("../models/Payment");
exports.paymentPostController = async (req, res, next) => {
    try {
        const newPayment = new Payment(req.body);
        const res = await newPayment.save();
        console.log({ res });
        res.status(201).json({
            error: false,
            message: "Payment successfully done",
        });
    } catch (error) {
        next(error);
    }

}

exports.paymentGetController = async (req, res, next) => {
    try {
        const newPayment = new Payment(req.body);
        const res = await newPayment.save();
        console.log({ res });
        res.status(201).json({
            error: false,
            message: "Payment successfully done",
        });
    } catch (error) {
        next(error);
    }

}