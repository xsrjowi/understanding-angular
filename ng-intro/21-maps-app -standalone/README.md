# MapsApp

En este proyecto, hemos contado en el paquete **dotenv** el cual hemos instalado en el entorno local via `npm install dotenv --save-dev`.

Este, nos permitirá generar de forma automática un archivo de configuración `.env`, añadiendo en la parte superior del archivo correspondiente, el import correspondiente [ `require('dotenv').config` ].
Posteriormente, acceder a sus correspondientes propiedades mediante `pocess.env.PROPERTY_KEY`.

Podemos instanciar una nueva carpeta en la raíz del proyecto, la cual llamaremos **scripts**. En ella, podemos ubicar un nuevo fichero al que llamaremos `set-envs.js`, de esta manera, automatizaremos el uso de las variables de entorno. 
El código correspondiente a este **script** será semejante a:
```
  const { writeFileSync, mkdirSync } = require('fs');
  require('dotenv').config();

  const targetPath = './src/environments/environment.ts';
  const envFileContent = `
  export const environment = {
      mapbox_key: "${ process.env['MAPBOX_KEY'] }",
      other: "PROPERTY",
  };
  `

  mkdirSync('./src/environments', { recursive: true });
  writeFileSync(targetPath, envFileContent);
```

Posteriormente a la creación del script y por tal de poder utilizarlo, deberemos añadirlo a la configuración presente en `package.json`:
```
  "scripts" {
    "envs": "node ./scripts/set-env.js",
  }
```

Hay que **tener en cuenta** que este script únicamentes se ejecutará cuando nosotros manualmente utilicemos el designado comando (`npm run envs`), y **no se ejecutará** cuando utilicemos el comando (`ng serve`).

Aun que no sea habitual, podemos observar que nosotros, en el archivo `package.json`, hemos sobreescrito el script **start**, para que en caso de no haber realizado el paso anterior, se genere automáticamente.
Para ello, hemos *concatenado dos instrucciones* en el mismo comando, mediante `"start": "npm run envs && ng serve"`.

## Instalando MapBox:

Podemos dirigirnos a la página de la documentación oficial [MapBox](https://docs.mapbox.com/mapbox-gl-js/guides/install/). Dentro de esta, nos dirigiremos al apartado `QuickStart` y seleccionaremos la opción `Module bundler` la cual nos ofrecerá la posibilidad de instalar el paquete mediante **npm** gracias al comando `npm install --save mapbox-gl`.

Posteriormente a esto, podemos seguir el tutorial de la misma página para instanciar los estilos de nuestro mapa.


# AloneComponent

En versiones superiores a **Angular 12**, disponemos de *standalone component*. Este, un componente reutilizable, puede ser activado desde la definición de cada componente mediante la oportuna llamada, tal y como se muestra a continuación:
```
  @Component({
    standalone: true,
    selector: 'photo-gallery',
    imports: [ImageGridComponent],
    templateUrl: './photo-gallery-page.component.html',
  })

  export class PhotoGalleryComponent {
    // component logic
  }
```

StandAlone pese a ser un componente, podemos considerarlo también un módulo. Es por ello por lo que para instanciarlo, en vez de ser llamado como un componente habitual, deberá ser iniciado mediante **lazyload** en nuestro archivo de rutas.

Aunque eso si, será de forma no convencional ya que como hemos mencionado no es al 100% ni un módulo ni un componente:
```
  {
    path: 'alone',
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component')
      .then(m => m.AlonePageComponent),
  },
```

Únicamente con la definición anterior ya nos será possible acceder a dicha ruta sin problema. Es decir, que *no es necesario importar* ningún componente adicional en ningún módulo de nuestra aplicación.





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
