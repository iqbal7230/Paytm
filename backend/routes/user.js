// backend/routes/user.js
const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../config");
const  { authMiddleware } = require("../Middleware");
const bcrypt = require('bcrypt');

const JWT_SECRET =  '1234567';
const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})
// router.get('/test', (req, res) => {
//     res.send('User router is working');
// });

router.post("/signup", async (req, res) => {
    console.log("Received request:", req.body); 
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
            
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    try {
      // Validate the request body
      signinBody.parse(req.body);
  
      // Find the user by username (email)
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }
  
      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
      });
  
      // Send the token to the client
      res.json({ token });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors from Zod
        return res.status(400).json({
          message: error.errors.map(err => err.message).join(", "),
        });
      }
  
      console.error("Server error:", error);
      res.status(500).json({
        message: "Server configuration error: " + error.message,
      });
    }
  });

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;