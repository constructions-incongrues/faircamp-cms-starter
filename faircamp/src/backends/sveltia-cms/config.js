import { init } from '@sveltia/cms';
import { getConfig, setActiveConfig } from '@constructions-incongrues/tumultes-faircamp';

setActiveConfig('sveltiaCms');

init({
  config: getConfig({
    site_domain: 'https://decap-proxy.constructions-incongrues.net',
    base_url: 'https://decap-proxy.constructions-incongrues.net',
    auth_endpoint: '/api/auth',
    backend: {
      name: 'github',
      repo: 'constructions-incongrues/faircamp-cms-backend-demo01',
      branch: 'main'
    }
  }),
  target: '#app'
});
