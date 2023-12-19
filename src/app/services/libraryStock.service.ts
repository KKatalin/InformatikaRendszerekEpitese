import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibraryStock } from '../models/libraryStock';
import { Observable, lastValueFrom, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryStockService {

  // storage!: LibraryStock[];

  constructor(private http: HttpClient) { }

  // private async loadStorageIfEmpty(): Promise<void> {
  //   if (!this.storage || this.storage.length === 0) {
  //     this.storage = await lastValueFrom(this.http.get<LibraryStock[]>('assets/libraryStock.json'));
  //   }
  // }

  async loadLibraryStock(): Promise<LibraryStock[]> {
    // await this.loadStorageIfEmpty();
    // return this.storage;
    return await lastValueFrom(this.http.get<LibraryStock[]>('api/libraryStock'));
  }

  async getLibraryStock(id: string) {
    return await lastValueFrom(this.http.get<LibraryStock>('api/libraryStock/'+ id));
  }

  async libraryStockFilter(search: string) {
    return await lastValueFrom(this.http.get<LibraryStock[]>('api/libraryStock',
      {
        params: { search }
      })
    );
    // await this.loadStorageIfEmpty();
    //   return this.storage.filter((libraryStock) => {
    //     if(!libraryStock.title || libraryStock.title.length === 0){
    //       return false;
    //     }
    //     return libraryStock.title.toLowerCase().includes(query.toLowerCase());
    //   })
  }

  async addLibraryStock(libraryStock: LibraryStock) {
    // await this.loadStorageIfEmpty();
    // this.storage.unshift(libraryStock);

    //api/libraryStock?search=wood
    return await lastValueFrom(this.http.post<LibraryStock>('api/libraryStock', libraryStock));
  }

  async updateLibraryStock(libraryStock: LibraryStock) {
    return await lastValueFrom(this.http.put<LibraryStock>('api/libraryStock/', libraryStock));
  }

  async deleteLibraryStock(libraryStock:string){
    return await lastValueFrom(this.http.delete<LibraryStock>('api/libraryStock/' + libraryStock));
  }


  // ezzel kezdtük, ez is egy jó megoldás
  // loadLibraryStock(): Observable<LibraryStock[]> {
  //   return this.http.get<LibraryStock[]>('assets/libraryStock.json');
  // }

  // libraryStockFilter(query: string): Observable<LibraryStock[]> {
  //   
  //   return this.loadLibraryStock().pipe(
  //     map((libraryStock: any[]) => {
  //       return libraryStock.filter(libraryStock => {
  //         if (!libraryStock.title || libraryStock.title.length === 0) {
  //           return false;
  //         }
  //         return libraryStock.title.includes(query);
  //       });
  //     })
  //   );
  // }

}
