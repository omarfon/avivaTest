import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatRadioModule,
        MatCardModule,
        MatExpansionModule
        } from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
             MatTabsModule,
             MatInputModule,
             MatMenuModule,
             MatIconModule,
             MatDatepickerModule ,
             MatNativeDateModule,
             MatFormFieldModule,
            MatToolbarModule,
            MatSelectModule,
            MatSidenavModule,
            MatRadioModule,
            MatCardModule,
            MatButtonModule,
            MatExpansionModule
          ],

    exports: [MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule
      ],
})


export class MaterialModule { }
