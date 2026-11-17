class Router {
  constructor() {
    this.routes = new Map();
    this.currentPath = '/';
  }

  add(path, Component, seoMeta) {
    const pattern = this.pathToRegex(path);
    this.routes.set(path, {
      path,
      pattern,
      paramNames: this.extractParamNames(path),
      Component,
      seoMeta
    });
  }

  pathToRegex(path) {
    const regexPath = path
      .replace(/\//g, '\\/')
      .replace(/:(\w+)/g, '([^/]+)');
    return new RegExp(`^${regexPath}$`);
  }

  extractParamNames(path) {
    const matches = path.match(/:(\w+)/g);
    return matches ? matches.map(m => m.slice(1)) : [];
  }

  match(path) {
    for (const [, route] of this.routes) {
      const match = path.match(route.pattern);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });
        return { ...route, params };
      }
    }
    return null;
  }

  setPath(path) {
    this.currentPath = path;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.currentPath = path;
  }

  getCurrentRoute() {
    return this.match(this.currentPath);
  }

  getAllRoutes() {
    return Array.from(this.routes.values());
  }
}

export default Router;