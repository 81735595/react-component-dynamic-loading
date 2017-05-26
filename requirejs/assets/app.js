define(['loader'], function(Loader){
    return createReactClass({
        displayName:'App',
        getInitialState: function () {
            return {
                componentName: this.props.start
            }
        },
        getComponent: function (componentName) {
            var _this = this
            return function (evt) {
                _this.setState({
                    componentName: componentName
                });
            }
        },
        render: function () {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button', {
                        onClick: this.getComponent('A')
                    },
                    'A'
                ),
                React.createElement(
                    'button', {
                        onClick: this.getComponent('B')
                    },
                    'B'
                ),
                React.createElement(
                    'button', {
                        onClick: this.getComponent('C')
                    },
                    'C'
                ),
                React.createElement(
                    'button', {
                        onClick: this.getComponent('D')
                    },
                    'D'
                ),
                React.createElement(
                    'button', {
                        onClick: this.getComponent('E')
                    },
                    'E'
                ),
                React.createElement(Loader, {
                    componentName: this.state.componentName
                })
            );
        }
    })
})