import User from "../models/user";
import bcrypt from "bcryptjs";

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
        const { password, ...rest } = req.body;

        // Kiểm tra xem người dùng đã cung cấp mật khẩu mới hay không
        if (password) {
            // Mã hoá mật khẩu mới
            const hashedPassword = await bcrypt.hash(password, 10);

            // Thay đổi giá trị của trường password trong req.body thành mật khẩu đã mã hoá
            req.body.password = hashedPassword;
        }

        // Thực hiện cập nhật và trả về kết quả
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({
            message: "Cập nhật thành công",
            ...user._doc,
            password: undefined,
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
};