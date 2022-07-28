import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {CrudOperations} from './crud-operations.component';
import {ProductListing} from './product-listing/product-listing.component';
import {ProductDetail} from './product-detail/product-detail.component';

const routes: Routes = [{
    path: '',
    component: CrudOperations
    },
    {
    path: 'productDetail',
    component: ProductDetail
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CRUDRoutingModule { }