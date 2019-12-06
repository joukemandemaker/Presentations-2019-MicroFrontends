const moduleConfiguration = {
  components: {
    id: "components",
    scriptUri: "http://localhost:5003/CsMicrofrontendDemoComponents.umd.min.js",
    stylesheetUri: "http://localhost:5003/CsMicrofrontendDemoComponents.css"
  },
  service1: {
    id: "service1",
    scriptUri: "http://localhost:5001/CsMicrofrontendDemoService1.umd.min.js",
    stylesheetUri: "http://localhost:5001/CsMicrofrontendDemoService1.css"
  },
  service2: {
    id: "service2",
    scriptUri: "http://localhost:5002/CsMicrofrontendDemoService2.umd.min.js",
    stylesheetUri: "http://localhost:5002/CsMicrofrontendDemoService2.css",
    dependencies: ["components"]
  }
};

export default moduleConfiguration;
