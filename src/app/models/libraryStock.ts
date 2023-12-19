import { Category } from "./category";
import { User } from "./user";

export interface LibraryStock{
    id: string;
    title: string;
    author: string;
    serialNumber: number;
    imgUrl: string;
    status: string;

    borrower: User;
    categories: Category[]
}