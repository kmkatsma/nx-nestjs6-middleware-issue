# Testworkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

# Steps to create

1. Created NX Workspace (using 7.6 NX CLI After creation of workspace, api2 app was created as nest API via 'ng g'
2. Added a middleware logger implementation to the appmodule
3. Run 'ng serve' at command line.
4. Tested endpoint (localhost:3333/api) - middleware logger doesn't work, but the default api endpoint still returns response.
5. Stop application.
6. Added another controller, added to appmodule.
7. Run 'ng serve' at command line.
8. Tested endpoints (localhost:3333/api and localhost:3333/api/test) and neither respond.  If you remove the registration of middleware and retest both endpoints will work.  

Current code/configuration in repo is for two controllers, with middlware registered (steps 7/8).
