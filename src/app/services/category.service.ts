import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  async getAll() {
    return  await lastValueFrom(this.http.get<Category[]>('/api/categories'));
  }

  async create(category: Category) {
    return  await lastValueFrom(this.http.post<Category>('/api/categories', category));
  }

  async delete(id: number) {
    return  await lastValueFrom(this.http.delete('/api/categories/' + id));
  }
}
