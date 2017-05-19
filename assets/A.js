define(['loader'], function (Loader) {
    return createReactClass({
        displayName:'A',
        render: function () {
            return React.createElement(
                'div',
                null,
                React.createElement('h1', null, 'Hello, I\'m A'),
                React.createElement(Loader, {
                    componentName: 'D',
                    style: {
                        background: '#990000'
                    }
                }, 'Hello, I\'m D')
            );
        }
    })
})