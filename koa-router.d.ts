declare module '@koa/router' {
  import { Middleware, Context } from 'koa';

  interface RouterOptions {
    prefix?: string;
  }

  interface IRouter {
    get: (path: string | RegExp, ...middleware: Middleware[]) => IRouter;
    post: (path: string | RegExp, ...middleware: Middleware[]) => IRouter;
    put: (path: string | RegExp, ...middleware: Middleware[]) => IRouter;
    delete: (path: string | RegExp, ...middleware: Middleware[]) => IRouter;
    patch: (path: string | RegExp, ...middleware: Middleware[]) => IRouter;
    use: (...middleware: Middleware[]) => IRouter;
    routes: () => Middleware;
    allowedMethods: () => Middleware;
  }

  function Router(options?: RouterOptions): IRouter;

  export = Router;
}
