import moduleConfiguration from "./module-configuration";

const modules = {} as any;

const loadModule = function(moduleId: string) {
  let module = modules[moduleId];

  if (module) {
    return module;
  }

  const configuration = (moduleConfiguration as any)[moduleId];
  let loadChain = [[configuration]];
  let dependencies = configuration.dependencies;

  while (dependencies && dependencies.length > 0) {
    let link: any[] = [];
    let newDependencies: any[] = [];

    dependencies.forEach((dependency: any) => {
      const configuration = (moduleConfiguration as any)[dependency];

      if (!modules[dependency]) {
        link.push(configuration);

        if (
          configuration.dependencies &&
          configuration.dependencies.length > 0
        ) {
          configuration.dependencies.forEach((x: any) =>
            newDependencies.push(x)
          );
        }
      }
    });

    if (link.length > 0) {
      loadChain.unshift(link);
    }

    dependencies = newDependencies;
  }

  let chainPromise: Promise<any> | null = null;

  loadChain.forEach(link => {
    let promises: any[] = [];

    link.forEach(x => {
      let promise = loadFiles(x.scriptUri, x.stylesheetUri);

      modules[x.id] = promise;
      promises.push(promise);
    });

    let linkPromise = modules.length > 1 ? Promise.all(promises) : promises[0];

    chainPromise = chainPromise
      ? chainPromise.then(() => linkPromise)
      : linkPromise;
  });

  return chainPromise;
};

const loadFiles = function(scriptUri: string, stylesheetUri?: string) {
  const promise = new Promise(resolve => {
    const scriptElement = document.createElement("script");
    scriptElement.src = scriptUri;

    const callback = () => {
      resolve();
      scriptElement.removeEventListener("load", callback);
      scriptElement.remove();
    };

    scriptElement.addEventListener("load", callback, false);
    document.body.appendChild(scriptElement);

    if (stylesheetUri) {
      const stylesheetElement = document.createElement("link");
      stylesheetElement.setAttribute("href", stylesheetUri);
      stylesheetElement.setAttribute("rel", "stylesheet");
      stylesheetElement.setAttribute("type", "text/css");

      document.head.appendChild(stylesheetElement);
    }
  });

  return promise;
};

export default loadModule;
