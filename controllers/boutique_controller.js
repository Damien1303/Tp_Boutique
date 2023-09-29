import Model from "../models/Boutique.js";


export const addArticles = async (req, res, next) => {
    try {
      const articles = await Model.create(req.body);
      res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  };

export const allArticles = async (req, res, next) => {
    try {
      const articles = await Model.find();
      res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  };

  
  export const oneArticle = async (req, res, next) => {
    try {
      const { id } = req.params;
      const articles = await Model.findById(id);
      res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  };
  export const delArticle = async (req, res, next) => {
    try {
      const articles = await Model.findById(req.params.id);
      if (!articles) res.status(404).json("article not found.");
  
      await Model.findByIdAndDelete(req.params.id);
      res.status(200).json("The article has been delete.");
    } catch (error) {
      next(error);
    }
  };
  export const putArticle = async (req, res, next) => {
    try {
      // const {id} = req.params
  
      const articles = await Model.findByIdAndUpdate(req.params.id, req.body);
      if (!articles) res.status(404).json("article not found.");
  
      // await Model.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json("The article has been updated.");
    } catch (error) {
      next(error);
    }
  };
  