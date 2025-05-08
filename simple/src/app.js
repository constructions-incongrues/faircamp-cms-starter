import { init } from '@sveltia/cms';
import { getConfig } from '@constructions-incongrues/faircamp-cms-config';

init({
  config: getConfig({
    backend: {
      name: 'github',
      repo: process.env.FCCMS_BACKEND_REPO,
      branch: 'main'
    }
  }),
  target: '#app'
});
