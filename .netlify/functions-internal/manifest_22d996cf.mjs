import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_1a613add.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"componentMetadata":[["/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/src/pages/category/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astro-page-split:node_modules/astro/dist/assets/image-endpoint@_@js":"pages/entry._image.astro.mjs","\u0000@astro-page-split:src/pages/index@_@astro":"pages/entry.index.astro.mjs","\u0000@astro-page-split:src/pages/category/[slug]@_@astro":"pages/category/entry._slug_.astro.mjs","\u0000@astro-page-split:src/pages/[slug]@_@astro":"pages/entry._slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_22d996cf.mjs","/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_dbbad316.mjs","/Users/alenbabanovic/Documents/Pametni projekti/zivjeti-zdravo/src/components/category/CategoryLink":"_astro/CategoryLink.4e350ed3.js","@/layouts/nav/Nav":"_astro/Nav.f8ea0b90.js","/astro/hoisted.js?q=0":"_astro/hoisted.1a56ad47.js","@astrojs/react/client.js":"_astro/client.4ae814ea.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/manrope-cyrillic-wght-normal.26287892.woff2","/_astro/manrope-vietnamese-wght-normal.41fac913.woff2","/_astro/manrope-greek-wght-normal.bdfac7ad.woff2","/_astro/manrope-latin-ext-wght-normal.c184517a.woff2","/_astro/manrope-latin-wght-normal.14be4114.woff2","/_astro/dropdown-arrow.a5663b71.svg","/_astro/_slug_.89624fee.css","/favicon.svg","/_astro/CategoryLink.4e350ed3.js","/_astro/Nav.f8ea0b90.js","/_astro/client.4ae814ea.js","/_astro/hoisted.1a56ad47.js","/_astro/index.03be2d59.js","/_astro/motion.c4d64313.js","/images/test.jsg.jpeg","/index.html"]});

export { manifest };
