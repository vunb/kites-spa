module.exports = {
    name: 'spa-routes',
    main: function (kites) {
        kites.on('beforeExpressConfigure', (app) => {
            kites.logger.info('add custom route to about page!')
            app.get('/about', (req, res) => res.end(`This is about page. Hello ${kites.name}@${kites.version}!`))
        })
    }
}