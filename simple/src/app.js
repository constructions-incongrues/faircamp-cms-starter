import { init } from '@sveltia/cms';
import { getConfig } from '@constructions-incongrues/faircamp-cms-config';

init({
  config: getConfig({
    backend: {
      repo: process.env.FAIRCAMP_CMS_REPO
    }
  }),
  target: '#app'
});
