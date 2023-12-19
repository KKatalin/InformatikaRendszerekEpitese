import { AppDataSource } from "../data-source";
import { LibraryStock } from "../entity/LibraryStock";
import { Controller } from "./base.controller";

export class LibraryStockController extends Controller {
    repository = AppDataSource.getRepository(LibraryStock);

    getAll = async (req, res) => {

        const search = req.query.search || '';

        try {
            const entities = await this.repository
            .createQueryBuilder('libraryStock')
            .where("libraryStock.title LIKE CONCAT('%', :search, '%')", {search: search})

            .leftJoinAndSelect('libraryStock.borrower','borrower')
            .leftJoinAndSelect('libraryStock.categories', 'category')
           
            .getMany();
            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };
}