import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

await esbuild.build({
  entryPoints: [path.join(root, 'netlify/functions/api.js')],
  bundle: true,
  platform: 'node',
  target: 'node20',
  format: 'cjs',
  outfile: path.join(root, 'netlify/functions-build/api.cjs'),
  external: [
    'mongoose',
    'express',
    'cors',
    'helmet',
    'morgan',
    'dotenv',
    'serverless-http',
    'express-rate-limit'
  ],
  logLevel: 'info'
});

console.log('[build-function] Bundled netlify/functions-build/api.cjs');