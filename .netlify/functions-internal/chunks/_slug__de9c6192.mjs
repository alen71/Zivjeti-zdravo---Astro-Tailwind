export { renderers } from '../renderers.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender_6b4672b3.mjs').then(n => n.a);

export { page };
