import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JourneyPage } from './journey.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JourneyPageRoutingModule } from './journey-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    JourneyPageRoutingModule
  ],
  declarations: [JourneyPage]
})
export class JourneyPageModule {}
