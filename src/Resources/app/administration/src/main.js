import './page/sw-product-detail/index';
import './view/sw-product-detail-threesixty';


Shopware.Module.register('sw-new-tab-threesixty', {
    routeMiddleware(next, currentRoute){
        const threesixtyRouteName = 'sw.product.detail.threesixty';

        if(currentRoute.name === 'sw.product.detail' && currentRoute.children.every(
            (currentRoute) => currentRoute.name !== threesixtyRouteName
        )){
            currentRoute.children.push({
                name: threesixtyRouteName,
                path: '/sw/product/detail/:id/threesixty',
                component: 'sw-product-detail-threesixty',
                meta: {
                    parentPath: 'sw.product.index'
                }
            })
        }
    }
});