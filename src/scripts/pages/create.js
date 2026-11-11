
import products from '../data/products.js';
import ProductModel from '../models/ProductModel.js';
import FormView from '../views/FormView.js';
import CreateController from '../controllers/CreateController.js';

const model = new ProductModel(products);
const view = new FormView();
const controller = new CreateController(model, view);

controller.init();
