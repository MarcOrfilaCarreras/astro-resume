import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://marcorfilacarreras.cloud',
    assets: 'relative',
    build: {
        inlineStylesheets: 'always'
      }
});
