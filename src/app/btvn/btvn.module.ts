import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtvnComponent } from './btvn.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [BtvnComponent, HeaderComponent, CarouselComponent, SmartphoneComponent, LaptopComponent, PromotionComponent],
  exports: [BtvnComponent],
  imports: [
    CommonModule
  ]
})
export class BtvnModule { }
