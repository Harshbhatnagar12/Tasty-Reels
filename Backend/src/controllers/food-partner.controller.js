const foodPartnerModel = require("../models/foodpartner.model");
const foodModel = require("../models/food.model");
const { authUserMiddleware } = require("../middlewares/auth.middlewares");
const authController = require("../controllers/auth.controller");
async function getFoodPartnerById(req, res) {
  try {
    const foodPartnerId = req.params.id;

    // 1. Pehle check karein ki Food Partner exist karta hai ya nahi
    const foodPartner = await foodPartnerModel.findById(foodPartnerId);

    if (!foodPartner) {
      return res.status(404).json({
        message: "Food partner not found",
      });
    }

    // 2. Agar partner mil gaya, tabhi uske food items ko fetch karein
    const foodItemsByFoodPartner = await foodModel.find({
      foodPartner: foodPartnerId,
    });

    // 3. Success response bhejein
    return res.status(200).json({
      message: "Food partner retrieved successfully",
      foodPartner: {
        ...foodPartner.toObject(),
        foodItems: foodItemsByFoodPartner,
      },
    });

  } catch (error) {
    // Agar koi database error ya invalid ObjectId aati hai toh server crash nahi hoga
    console.error("Error in getFoodPartnerById:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

module.exports = {
  getFoodPartnerById,
};