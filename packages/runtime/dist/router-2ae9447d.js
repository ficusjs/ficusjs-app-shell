import{c as e,g as t,a as o,s as n}from"./main-d7b7ddad.js";const u=Object.freeze({FICUS_APP_SHELL_ERROR:"ficus.app.shell.error",FICUS_APP_SHELL_IS_OFFLINE:"ficus.app.shell.is.offline",FICUS_APP_SHELL_OFFLINE:"ficus.app.shell.offline",FICUS_APP_SHELL_ONLINE:"ficus.app.shell.online"});function getModuleUrlByLocation(e){return o(n.APP_CONFIG).getModuleUrlByLocation(e)}function loadModuleByModuleUrl(e){return o(n.APP_CONFIG).loadModuleByModuleUrl(e)}const r=e([],window.ficusShellRuntime&&window.ficusShellRuntime.routerOutletSelector?window.ficusShellRuntime.routerOutletSelector:"#router-outlet",{autoStart:!1,context:{eventBus:t()},resolveRoute(e,t){const u=o(n.APP_CONFIG).getState("appConfig.data.startPath");if("/"===e.location.pathname&&e.location.pathname!==u)return{redirect:u};if(e.route&&"function"==typeof e.route.action)return e.route.action(e,t);if(!e.route){const o=getModuleUrlByLocation(e.location.pathname);return o?loadModuleByModuleUrl(o).then((()=>{if(e.route&&"function"==typeof e.route.action)return e.route.action(e,t)})):void 0}},errorHandler(e,t){const o=getModuleUrlByLocation(t.location.pathname);if(o)return loadModuleByModuleUrl(o).then((()=>{if(t.route&&"function"==typeof t.route.action)return t.route.action(t,t.params)}));t.context.eventBus.publish(u.FICUS_APP_SHELL_ERROR,e)},mode:window.ficusShellRuntime&&window.ficusShellRuntime.routerMode?window.ficusShellRuntime.routerMode:"hash"});export{r as router};
//# sourceMappingURL=router-2ae9447d.js.map
