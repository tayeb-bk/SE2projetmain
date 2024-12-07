import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ajuste en fonction de tes composants
import { ProductComponent } from './product/product.component'; // Ajuste en fonction de tes composants
import { ResidencesComponent } from './residences/residences.component'; // Ajuste en fonction de tes composants
import { RegistreComponent } from './registre/registre.component'; // Assure-toi que tu as ce composant

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'register', component: RegistreComponent },  // Assure-toi d'avoir ce composant
  // Ajoute d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }