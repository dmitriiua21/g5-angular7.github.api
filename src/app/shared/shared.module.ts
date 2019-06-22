import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [NavbarComponent, CardComponent]
})
export class SharedModule { }
