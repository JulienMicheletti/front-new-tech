import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import { entityConfig } from './entity/entity-metadata';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTreeModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DialogCategoryComponent } from './dialog-category/dialog-category.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import {Sidenav} from './sideNavBar/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {defaultDataServiceConfig } from './config/configDataService';
import { FormQuestionnaireComponent } from './form-questionnaire/form-questionnaire.component';
import { DialogQuestionnaireComponent } from './dialog-questionnaire/dialog-questionnaire.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    FormCategoryComponent,
    HomeComponent,
    DialogCategoryComponent,
    QuestionnairesComponent,
    Sidenav,
    FormQuestionnaireComponent,
    DialogQuestionnaireComponent,
  ],
  entryComponents: [ DialogCategoryComponent, Sidenav, DialogQuestionnaireComponent ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    MatSidenavModule,
    NgbModule,


  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
