import { Router} from 'express';
import { getProducts, createProduct, getOneProduct, deleteOneProduct, updateOneProduct, getProductByType } from '../controllers/producto.controller';
const router = Router();

// /api/productos
router.get('/', getProducts);
router.post('/', createProduct);

// /api/productos/:id
router.get('/:id', getOneProduct);
router.delete('/:id', deleteOneProduct);
router.put('/:id', updateOneProduct);


// /api/productos/tipo/:type
router.get('/tipo/:type', getProductByType);

export default router;