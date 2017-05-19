require(['app'], function (App) {
    var div = document.createElement('div')
    document.body.appendChild(div)

    ReactDOM.render(React.createElement(App, {
        start: 'A'
    }), div)
})()