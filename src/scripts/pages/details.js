
import products from '../data/products.js';
import ProductModel from '../models/ProductModel.js';
import DetailsView from '../views/DetailsView.js';
import DetailsController from '../controllers/DetailsController.js';

const model = new ProductModel(products);
const view = new DetailsView();
const controller = new DetailsController(model, view);

controller.init();
