export { renderers } from '../renderers.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/image-endpoint_f5040fd7.mjs').then(n => n.i);

export { page };
