# Proyecto MapBox

## Crear proyecto:

Genera un nuevo proyecto Angular, con *routing* y *css*

```
ng new mapgl-app --routing --style=css
```

## Instalaciones:

Instalar `MapBox`

```
npm install mapbox-gl
```

Instalar `MapBox` y sus dependencias *DataTypes*

```
npm install @types/mapbox-gl -D
```

## Cuenta MapBox:

Crear cuenta [MapBox](https://account.mapbox.com/auth/signup/)

Al inciar sesión, en la parte inferior, `generamos` un *token* de acceso
    (principalmente, con las opciones predeterminadas)

## Angular:

Generamos un nuevo archivo, relativo a las *variables de entorno*, el cual se ubicará en:
```
/src/environments/environment.ts
```

### Recordatorio de uso:

No es conveniente, disponer de unos *imports* excesivamente complejos como:
```
import { RoundPipe } from '../../../../../@core/pipes/round/round.pipe';
```

Es por ello, por lo cual podemos simplificarlo mediante: 
```
import { RoundPipe } from '@core/pipes/round/round.pipe';
```

Para que esto surta efecto, deberemoos modificar el siguiente tramo dentro del archivo *tsconfig.ts*, por el posterior:
```
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        ...
    },
    "angularCompilerOptions": {
        "fullTemplateTypeCheck": true,
        "strictInjectionParameters": true
    }
}
```

Nuevo tramos:
```
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@env/*": ["src/environments/*"],
            "@core/*": ["src/app/@core/*"]
        },
        
        },
    "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
    }
}
```

De este modo, al querer realizar un *import* o simplemente referirnos a las variables de entorno, podremos hacerlo mediante:
    `@env/...` en lugar de `../../../../environments/environments.ts`


## Componente Mapa:

Para crear el mapa, nos dirigiremos al fichero `.html` *principal*, es decir `index.html` y allí, introduciremos el link correspondiente:
```
<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css" rel="stylesheet" />
```

Dentro de las opciones de *estilos*, podemos incorporar las que deseemos. En el link siguiente, 
podremos observar todas las possibilidades existentes [MapBoxCSS](https://docs.mapbox.com/mapbox-gl-js/example/setstyle/)

Una vez dispongamos de la *referencia* pertinente, generaremos un nuevo componente, que actúe como *controlador* del mapa
```
ng g c @core/components/map --skipTests=true
```

Dentro del archivo correspondiente, es decir `map.component.html`, añadiremos el fragmento que nos mostrará el mapa
```
<div id="map" class="map-container"> </div>
```

Para mostrarlo al máximo tamaño possible, añadiremos al archivo correspondiente a `map.component.css` el siguiente fragmento *css*
```
.map-container {
    width: 100%;
    height: 100%;
    position: absolute;
}
```

## Servicio Mapa:

En primera instancia, deberemos generar el *servicio* y para ello lo haremos mediante la *angular cli*
```
ng g s @core/services/map --skipTests=true
```

La primera función que crearemos, es la que nos permitirá construir el mapa. Esta, se ubicará dentro del *servicio* que acabamos de crear:
```
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})

export class MapService {
    mapbox = (mapboxgl as typeof mapboxgl);
    map: mapboxgl.Map;
    style = `mapbox://styles/mapbox/streets-v11`;

    // Coordenadas de la localización donde queremos centrar el mapa
    lat = 43.1746;
    lng = -2.4125;
    zoom = 15;

    constructor() {
        // Asignamos el token desde las variables de entorno
        this.mapbox.accessToken = environment.mapBoxToken;
    }

    buildMap() {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat]
        });

        this.map.addControl(new mapboxgl.NavigationControl());
    }
}
```

Posteriormente a generar la definición de *buildMap*, podemos inyectar el servicio dentro de nuestro `map.component.ts` y declarar el mapa de parámetro de privado,
con el tipaje *MapService*, tal y como se muestra a continuación:
```
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    constructor(
        private map: MapService
    ) { }

    ngOnInit() {
        this.map.buildMap();
    }
}
```

## Visualización del mapa:

Agregamos la llamada al selector html al *componente* correspondiente. En este caso, en `app.component.html`
```
<app-map></app-map>
```

# Ejecución:

Como cualquier otro proyecto, inicaremos nuestra aplicación, mediante el *comando predeterminado* de Angular:
```
ng serve
```

Una vez ejecutado, podemos ver el resultado en nuestro *navegador web* mediante el [link](http://localhost:4200/) correspondiente

# Links de interés

Documentación de interés: [API](https://docs.mapbox.com/mapbox-gl-js/api/), [Ejemplos](https://docs.mapbox.com/mapbox-gl-js/examples/), [Plugins](https://docs.mapbox.com/mapbox-gl-js/plugins/)
