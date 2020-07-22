//begin the fun for user
const router = require("express").Router();
const path = require("path");


// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


// If no matching route is found default to home
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;