import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryStock } from 'src/app/models/libraryStock';
import { LibraryStockService } from 'src/app/services/libraryStock.service';

@Component({
  selector: 'app-libraryStock',
  templateUrl: './libraryStock.component.html',
  styleUrls: ['./libraryStock.component.scss']
})
export class LibraryStockComponent {
  @Input() libraryStock!: LibraryStock;

  constructor(private router: Router,
    private libraryStockService: LibraryStockService) { }

  ngOnInit(): void {
   
  }

  navigateToLibraryStockForm(id: string) {
    this.router.navigate([ '/libraryStock-form' ], {
      queryParams: {
        id: id
      }
    });
  }

  async deleteLibraryStock(libraryStock: string) {
    await this.libraryStockService.deleteLibraryStock(libraryStock);
  }
}
