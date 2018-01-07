/**
 * basic config kites-spa server
 */
require('@kites/engine')({
        loadConfig: true
    })
    .use(require('./routes'))
    .init()
    .then(function (kites) {
        kites.logger.info('Kites SPA started!')
    })
    .catch(function (e) {
        console.error(e.stack)
        process.exit(1)
    })