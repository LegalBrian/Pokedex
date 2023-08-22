## Instrucciones de uso

 1. Clonar el repositorio en su computadora para comenzar

 2. En la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

3. Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a Postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

4. Será necesario que creen desde PostgreSQL una base de datos llamada `pokemon`

5. Luego de eso en la carpeta `api` y la carpeta `client` realizar desde la consola de comandos lo siguiente
```
npm install
```

6. Una vez instaladas las dependencias, realizar lo siguiente:

- Para iniciar el servidor desde la carpeta api realizar el siguiente comando
``` 
npm start 
```

- De igual manera para iniciar el cliente desde la carpeta client tambien ejecutar
```
npm start
```