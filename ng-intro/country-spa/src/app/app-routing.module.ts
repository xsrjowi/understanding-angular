import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

const routes: Routes = [
    /*
        {
            path: '',
            component: HomePageComponent
        },
    */
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module')
            .then(mod => mod.CountriesModule)
    },
    // En caso de no introducir ninguna ruta, haremos una redirección al home
    {
        path: '**',
        redirectTo: 'countries'
    }
]
@NgModule({
    // Únicamente habrá un Router.forRoot() en toda la aplicación
    // Los demás serán 'childs'
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}