import template from './sw-product-detail.html.twig'

import deDE from './snippets/de-DE.json';
import enGB from './snippets/en-GB.json';


Shopware.Component.override('sw-product-detail', {
    template,

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB,
    }
})