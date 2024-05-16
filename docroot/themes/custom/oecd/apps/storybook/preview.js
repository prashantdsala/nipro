import { configure, initJsBehaviors } from '@space-designsystem/storybook';
import { addParameters } from '@storybook/react';
import 'jquery';
import '@splidejs/splide/dist/css/splide-core.min.css';
import 'slick-slider';
import 'slick-slider/slick/slick.css';

const namespaces = require('spacedesignsystem/namespaces');

initJsBehaviors('Drupal');

addParameters({
  themes: [
    { name: 'Dark', class: ['dark', 'bg-black'], color: '#000000' },
    { name: 'Gray', class: ['bg-gray-100'], color: '#cecece' },
  ],
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        'Layout',
        'Tokens',
        ['Colors', 'Typography', 'Scales'],
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
      locales: 'en-US',
    },
  },
});

configure(
  module,
  [
    require.context('./patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
    require.context('spacepatterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
  ],
  require.context('./config', false, /\.json|\.ya?ml$/),
  require.context('spacepatterns', true, /\.twig$/),
  namespaces
);
