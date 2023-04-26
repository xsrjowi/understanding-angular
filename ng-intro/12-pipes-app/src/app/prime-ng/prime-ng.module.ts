import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
// import { MenuModule  } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule  } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})

export class PrimeNgModule { }
