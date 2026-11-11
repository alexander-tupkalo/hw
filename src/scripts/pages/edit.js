
import products from '../data/products.js';
import ProductModel from '../models/ProductModel.js';
import FormView from '../views/FormView.js';
import EditController from '../controllers/EditController.js';

const model = new ProductModel(products);
const view = new FormView();
const controller = new EditController(model, view);

controller.init();
