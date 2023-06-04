import User from "../models/user";

export const getAll = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json({
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        });

    }
}

export const remove = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        return res.status(200).json({
            message: "xoa thanh cong"
        })

    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

export const getByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.status(200).json({
            data: user,
            message: "san pham"
        })

    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}
export const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json({
            message: "sua thanh cong"
        })

    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}