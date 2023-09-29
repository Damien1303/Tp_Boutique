import express from "express";

import { addArticles, allArticles, oneArticle, delArticle, putArticle ,  } from '../controllers/boutique_controller.js';



const router = express.Router();

// router.post("/signup", signup);

// router.post("/sign", sign)
router.post("/add", addArticles)

router.get("/all", allArticles);

router.get("/findById/:id", oneArticle);

router.delete("/delete/:id",  delArticle);

router.put("/put/:id",  putArticle);


export default router;