import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CRUDRoutingModule} from './crud-operations-routing.module';

import {CrudOperations} from './crud-operations.component';
import {ProductListing} from './product-listing/product-listing.component';
import {ProductDetail} from './product-detail/product-detail.component';

@NgModule({
    imports: [CommonModule, CRUDRoutingModule],
    declarations: [CrudOperations, ProductListing, ProductDetail]
})

export class CrudOperationsModule{
    
}