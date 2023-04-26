import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
// import { MenuModule  } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule  } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule,
  ]
})

export class PrimeNgModule { }
