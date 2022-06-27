const express = require('express');
const router = express.Router();

// import From Controller
const articleController = require('../controllers/articleController')

// Path Start With "/all-articles"

router.get("/",articleController.article_index_get)

router.post("/",articleController.article_post)

router.get("/:id",articleController.article_details_get )

router.delete("/:id",articleController.article_delete)


module.exports = router
