import { init } from '@sveltia/cms';
import { getConfig } from '@constructions-incongrues/faircamp-cms-config';

init({
  config: getConfig({
    locale: 'fr',
    site_domain: 'https://decap-proxy.constructions-incongrues.net',
    base_url: 'https://decap-proxy.constructions-incongrues.net',
    auth_endpoint: '/api/auth',
    backend: {
      name: 'github',
      repo: 'constructions-incongrues/faircamp-cms-backend-demo02',
      branch: 'main'
    }
  }),
  target: '#app'
});
