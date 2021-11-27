const router = require('express').Router();

const users = [
    {
        id: 1,
        name: "john doe",
        age: 30,
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 10,
    },
    {
        id: 3,
        name: "Park Jin",
        age: 18,
    }
]

router.get("/", (req, res) => {
    res.status(200).json(users);
})

module.exports = router;