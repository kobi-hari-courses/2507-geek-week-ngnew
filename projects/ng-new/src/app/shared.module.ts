import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const myFavoriteModule = [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule
]

@NgModule({
    imports: myFavoriteModule,
    exports: myFavoriteModule
})
export class SharedModule {}