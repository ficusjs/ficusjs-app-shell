import{b as h,d as c,e as g,f as i,g as u,h as C,i as n}from"./chunk-OVYBZV7R.js";import"./chunk-RPHO6JGJ.js";function M(t,e){let r=Error(t);return r.response=e,r}function w(t){if(t.ok)return t;if(t.statusText!=="")throw M(t.statusText,t);let r={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",408:"Request Timeout",409:"Conflict",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Server Unavailable",504:"Gateway Timeout"}[t.status];throw r?M(r,t):t}function R(t){return t.status===204?null:t.json()}function P(t,e){return window.fetch(t,{method:"GET",headers:e}).then(w).then(R)}function p(t,{...e}){if(t.create&&typeof t.create=="function")return t.create({...e,use:p})}function S(t){return!t||!t.modules||(t.modules=t.modules.map(e=>(e.routes&&(e.routes=e.routes.map(r=>h(r))),e))),t}i(n.APP_CONFIG,{initialState:{appConfig:{loaded:!1,data:null,modules:null},error:null},loadAppConfigIfNotLoaded(t){return this.state.appConfig.loaded?Promise.resolve():this.loadAppConfig(t)},loadAppConfig(t){let e=this;return new Promise((r,a)=>{P(t,{"Content-type":"application/json"}).then(o=>e.loadConfigModules(o)).then(o=>{e.setState(l=>({...l,appConfig:{...l.appConfig,loaded:!0,data:S(o)}})),r()}).catch(o=>a(o))})},getModuleUrlByLocation(t){let e=this.state.appConfig.data.modules.find(r=>r.routes.find(a=>a.matcher(t)));return e?e.moduleUrl:void 0},hasModuleRoutes(){return this.state.appConfig.data.modules.filter(e=>e.routes&&e.routes.length>0).length>0},hasModuleMessageBundles(){return this.state.appConfig.data.modules.filter(e=>e.messageBundleUrl).length>0},loadConfigModules(t){return Promise.all(t.modules.filter(e=>e.preload).map(e=>this.loadModuleByModuleUrl(e.moduleUrl))).then(()=>Promise.resolve(t))},loadModuleByModuleUrl(t){let e=this,r=e.state.appConfig.data.modules,a=r.find(o=>o.moduleUrl===t);return e.loadModule(a).then(()=>{a.loaded=!0,e.setState(o=>({...o,appConfig:{...o.appConfig,data:{...o.appConfig.data,modules:r}}}))})},loadModuleByPath(t){let e=this,r=e.state.appConfig.data.modules,a=r.find(o=>o.routes.find(l=>l.path===t));return e.loadModule(a).then(()=>{a.loaded=!0,e.setState(o=>({...o,appConfig:{...o.appConfig,data:{...o.appConfig.data,modules:r}}}))})},loadModuleByUrl(t){let e=this,r=e.state.appConfig.data.modules,a=r.find(o=>o.routes.find(l=>l.matcher(t)));return e.loadModule(a).then(()=>{a.loaded=!0,e.setState(o=>({...o,appConfig:{...o.appConfig,data:{...o.appConfig.data,modules:r}}}))})},loadModule(t){return t&&t.loaded?Promise.resolve():t?import(t.moduleUrl).then(e=>{p(e.module,C)}):Promise.reject(new Error("Module not found"))}});i(n.LAYOUT,{initialState:{layout:{appbar:!0,navigation:!0},appTitle:null,appVersion:null,pageTitle:{loading:!0,title:null,subtitle:null}},persist:g(n.LAYOUT,"local"),setPageTitle(t){document.title=t}});function U(){let t=u(n.APP_CONFIG);if(t.state.appConfig.loaded){let e=c(),r=t.getState("appConfig.data.startPath");return e.hasRoute(e.location.pathname)?e.location.pathname:e.location.pathname==="/"&&e.location.pathname!==r?r:e.location.pathname}return"/"}function y(){let t=s.hasModuleRoutes(),e=s.hasModuleMessageBundles(),r=t?import("./router-YQDX6UTP.js"):Promise.resolve(),a=e?import("./i18n-3CRSR7IR.js"):Promise.resolve();return Promise.all([r,a]).then(([o,l])=>{if(o){let f=o.router,d=U(),m=s.getModuleUrlByLocation(d);m?s.loadModuleByModuleUrl(m).then(()=>f.start(d)):f.start(d)}})}var s=u(n.APP_CONFIG);window.ficusShellRuntime&&window.ficusShellRuntime.configUrl&&s.loadAppConfigIfNotLoaded(window.ficusShellRuntime.configUrl).then(y);
// FicusJS App Shell ES Module bundle | v0.1.0
//# sourceMappingURL=main.js.map
