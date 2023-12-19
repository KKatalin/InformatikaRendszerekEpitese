
import express from 'express';
import { LibraryStockController } from './controller/libraryStock.controller';
import { UserController } from './controller/user.controller';
import { CategoryController } from './controller/category.controller';

export function getRoutes() {
    const router = express.Router();

    const userController = new UserController();
    const libraryStockController = new LibraryStockController();
    const categoryController = new CategoryController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    router.get('/libraryStock', libraryStockController.getAll);
    router.get('/libraryStock/:id', libraryStockController.getOne);
    router.post('/libraryStock', libraryStockController.create);
    router.put('/libraryStock', libraryStockController.update);
    router.delete('/libraryStock/:id', libraryStockController.delete);

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
