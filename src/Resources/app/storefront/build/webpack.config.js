const { join, resolve } = require('path');

module.exports = () => {

    return {
        resolve: {
            alias: {
                '@3dView': resolve(
                    join(__dirname, '..', '@3dweb')
                )
            }
        }
    }
}