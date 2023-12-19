import { Component, Input } from '@angular/core';
import { LibraryStock } from '../models/libraryStock';
import { LibraryStockService } from '../services/libraryStock.service';

@Component({
  selector: 'app-libraryStock-list',
  templateUrl: './libraryStock-list.component.html',
  styleUrls: ['./libraryStock-list.component.scss']
})
export class LibraryStockListComponent {

    // @Input() libraryStock!: libraryStock[];
    libraryStock!: LibraryStock[];
    searchQuery: string = ''

    constructor(
      private libraryStockService: LibraryStockService
    ) { }

    async ngOnInit(){
      this.libraryStock = await this.libraryStockService.loadLibraryStock();
      // this.libraryStockService.loadLibraryStock().subscribe(data => {
      //   this.libraryStock = data;
      // })
    }
    
    async search(){
      this.libraryStock = await this.libraryStockService.libraryStockFilter(this.searchQuery);
  
      // this.libraryStockService.libraryStockFilter(this.searchQuery).subscribe((d) => {
      //   this.libraryStock = d
      // });
    }

}
