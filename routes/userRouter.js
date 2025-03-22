// require express in this file
const express = require('express')
const { handleGetAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    handleCreateNewUser
} = require("../controllers/user")
// router
const router = express.Router()

// Route to return all users as JSON
// router.get('/api/users', async (req, res) => {
//     const allUserdb = await User.find({})
//     const html =
//         `
//     <ul>
//         ${allUserdb.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')}
//     </ul>
//     `
//     res.json(User)
//     return res.send(html);
// });

// this router methid used for get all user data and post method for create new user
router
    .route("/").get(handleGetAllUser).post(handleCreateNewUser)

// in this router we have update, delete and find item by id
router
    .route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)

// export module
module.exports = router