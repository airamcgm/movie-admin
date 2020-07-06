# Movies Admin
Movies Admin es un organizador de títulos de películas, los títulos se encuentran organizados en una tabla la cual contiene:
* ID de la película
* Nombre de la película
* Fecha de publicación de la película
* Hora de la película
* Status de activo o inactivo

Por cada película se pueden realizar las acciones de editar alguno de los campos, o eliminar la película.
También se permite agregar una nueva película

## Installation
Movies Admin requiere npm
Proyecto generado con [Angular CLI](https://cli.angular.io/) version 10.0.1.
Ng-Bootstrap components for Angular [Bootstrap widgets](https://ng-bootstrap.github.io/)
Para instalar las dependencias del entorno del proyecto:
```sh
npm install
```
### Fake REST API 
Se utiliza Fake REST API como API provisional por medio de un json, nos da la funcionalidad de usar un json como base de datos.
Para instalar esta API se requiere:
```sh
npm install -g json-server
```
Para inicializar el servicio es necesario ejecutar:
```sh
npm run mock:server
```
es decir, se realiza la ejecución del comando:
```sh
json-server --watch db.json
```
El archivo db.json se encuentra en el directorio src/db.json.
Movies Admin guarda todos los cambios realizados generados en este json.

Ver documentacion [JSON Server] (https://www.npmjs.com/package/json-server)

### Development server
Primero se corre el json-server:
```sh
npm run mock:server
```
El servicio se despliega en `http://localhost:3000/`

Posteriormente se corre el servidor de desarrollo:
```sh
ng serve
```
### Json propuesto
Se propuso el siguiente json para manejar la información de las películas
```sh
{
  "movies": [
    {
      "nombre": "Kiki: Entregas a domicilio",
      "publication_date": {
        "year": 2020,
        "month": 7,
        "day": 6
      },
      "status": "Activo",
      "time": "21:35",
      "id": 1
    },
    {
      "nombre": "Toy Story",
      "publication_date": {
        "year": 2020,
        "month": 7,
        "day": 8
      },
      "status": "Inactivo",
      "time": "21:35",
      "id": 2
    },
    {
      "nombre": "Charlie y la fábrica de chocolate",
      "publication_date": {
        "year": 2020,
        "month": 7,
        "day": 14
      },
      "status": "Activo",
      "time": "21:23",
      "id": 3
    }
  ]
}
```

## Build
Ejecutar `ng build` to construir al proyecto y poder montarlo en un servidor. 
Las herramientas para construir el proyecto se encuentran en el directorio `dist/`. Usar la bandera `--prod` para un entorno productivo.
## Link del proyecto
http://69.197.169.74/moviesAdmin/
