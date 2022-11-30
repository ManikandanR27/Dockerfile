# Knowledge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


Path should C:\Users\Yourname\Documents\knowledge(project location)>
1) Added the Dockerfile and .dockerignore file
2) Make sure your local has access of docker.
3) you have to build the docker image for you app using
docker build -t dist/knowledge .
4) After image has build check the list of images
docker images
5) In this list you see your image then 
docker run -d -it -p 80:80/tcp --name knowledgedist/knowledge:latest
6) It will generate one random key
7) Go to browser and type your ip address.
