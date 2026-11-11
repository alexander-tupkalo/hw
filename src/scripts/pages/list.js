
import products from '../data/products.js';
import ProductModel from '../models/ProductModel.js';
import ListView from '../views/ListView.js';
import ListController from '../controllers/ListController.js';

const model = new ProductModel(products);
const view = new ListView();
const controller = new ListController(model, view);

controller.init();
