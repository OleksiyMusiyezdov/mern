const { Router } = require('express');
const router = Router();

// redirect to "Create new note"
router.get("/addNewNote", async (req, res) => {

})

router.post("/addNewNote", async (req, res) => {
    try {
        const { title, content, picture } = req.body;
    } catch (e) {
        res.status(500);
    }


});

module.exports = router;