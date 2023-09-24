import { renderers } from '../../renderers.mjs';
import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { manifest } from '../../manifest_22d996cf.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import '../../chunks/astro_1a613add.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const page = () => import('../../chunks/prerender_fb27391c.mjs').then(n => n._);

const pageModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	page,
	renderers
}, Symbol.toStringTag, { value: 'Module' }));

const _manifest = Object.assign(manifest, {
	pageModule,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageModule };
