import template from './sw-product-detail-threesixty.html.twig';


Shopware.Component.register('sw-product-detail-threesixty', {
    template,

    metaInfo(){
        return {
            title: $tc('hag-threesixty.general.title')
        }
    }
})