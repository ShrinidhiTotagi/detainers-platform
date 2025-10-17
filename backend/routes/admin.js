const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

// Verify users/providers
router.put("/verify/:id", auth, async (req, res) => {
    if (req.user.userType !== "admin") return res.status(403).json({ msg: "Access denied" });

    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ msg: "User not found" });

        user.verified = true;
        await user.save();
        res.json({ msg: "User verified" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
