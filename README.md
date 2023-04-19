# Proyecto ToDoList 
##Realizado por: Santiago y Jorge
### Objetivo:
Realizar un programa con tecnología react para crear una ToDo List mediante un formulario y subiendo la infrormación recogida al LocalStorage



### Inicialización del proyecto:
Para inicializar el proyecto abrir la terminal y escribir los siguientes comandos:

Seleccionamos la carpeta en la terminal
```
yarn create vite
```
Creamos el nombre del proyecto y elegimos la tecnología y el lenguaje, en este caso React y Vainilla. Después iniciamos el proyecto y descargamos las librerias necesarias con
```
cd (nombre proyecto)
yarn
yarn vite
```
Ahora podremos inicializarlo con:
```


yarn dev
`````
Se abrirá el navegador en http://localhost:5173/

Se han usado las siguientes tecnologías con estas versiones:
```
"@types/react": "^18.0.28",
"@types/react-dom": "^18.0.11",
"@vitejs/plugin-react": "^3.1.0",
"vite": "^4.2.0"

````



### Funcionalidad principal:
Se ha realizado un programa para crear diferentes tareas y poder marcarlas como pendientes y también poder eliminarlas.

Para ello hemos diferenciado las diferentes funcionalidades en Hooks, reducers, helpers y componentes.