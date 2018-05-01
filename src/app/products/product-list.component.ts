import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../../api/products/product.service';
@Component({
    // tslint:disable-next-line:component-selector
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    errorMessage: string;
    // tslint:disable:no-inferrable-types
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    // tslint:disable:no-trailing-whitespace
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    _productService: ProductService;
    constructor(service: ProductService) {
        this._productService = service;
        
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
        console.log(`event`);
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('On Init');
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = products; 
            },
            error => this.errorMessage = <any> error);            
    }
}
