import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryStockService } from '../services/libraryStock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-libraryStock-form',
  templateUrl: './libraryStock-form.component.html',
  styleUrls: ['./libraryStock-form.component.scss']
})
export class LibraryStockFormComponent {
  libraryStockForm: FormGroup = this.fb.group({
    id: [],
    title: ['', Validators.required],
    author: [''],
    serialNumber: [0, Validators.max(9999999999999)],
    imgUrl: ['https://cdn1.iconfinder.com/data/icons/borrow-book-outline/340/borrow_book_library_booking_period_online-512.png', Validators.pattern(/^(http|https):\/\/.*/)],
    status: [''],
    borrower: [null],
    categories: [[]]
  })

  errorMessage: string = ''
  users!: User[];
  categories!: Category[];
  constructor(
    private libraryStockService: LibraryStockService,
    private fb: FormBuilder,
    private router: Router,

    private userService: UserService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  get id() {
    return this.libraryStockForm.get('id');
  }

  get title() {
    return this.libraryStockForm.get('title');
  }

  get serialNumber() {
    return this.libraryStockForm.get('serialNumber');
  }

  get imgUrl() {
    return this.libraryStockForm.get('imgUrl');
  }

  get borrower() {
    return this.libraryStockForm.get('borrower');
  }

  async ngOnInit() {
    this.users = await this.userService.getAll();
    this.categories = await this.categoryService.getAll();

    const id = this.activatedRoute.snapshot.queryParams['id'];
    
    if(id){
      const libraryStock = await this.libraryStockService.getLibraryStock(id);
      this.libraryStockForm.setValue(libraryStock);
    } 
  }

  async addLibraryStock() {
    const libraryStock = this.libraryStockForm.value
    if(libraryStock.id){
      this.libraryStockService.updateLibraryStock(libraryStock);
    }else{
      this.libraryStockService.addLibraryStock(libraryStock);
    }
    
    this.router.navigateByUrl("/");

  }

  compareUsers(user1: User, user2: User): boolean {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(category1: Category, category2: Category): boolean {
    return category1 && category2 && category1.id === category2.id;
  }
}
