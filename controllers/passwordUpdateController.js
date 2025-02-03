const usermodel = require("../Models/usermodels");
const bcrypt = require('bcryptjs');

const passwordUpdateController = async (req, res) => {
    try {
        const { email, password, Answer } = req.body;

        if (!email || !password || !Answer) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await usermodel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Optional: Validate old answer before updating password (security check)
        if (user.Answer !== Answer) {
            return res.status(401).json({ message: "Incorrect security answer" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({ message: "Password updated successfully" });

    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = passwordUpdateController;
