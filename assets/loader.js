define(function(){

    function Noop() {
        return null;
    }

    function Loading() {
        return React.createElement('div', null, 'loading……');
    }

    function copyProps(props) {
        var result = {};
        for (prop in props) {
            if (prop != 'componentName') {
                result[prop] = props[prop]
            }
        }
        return result;
    }

    var componentList = {};

    var Loader = createReactClass({
        displayName:'Loader',
        getInitialState: function () {
            return {
                curComponent: componentList[this.props.componentName] || Noop
            };
        },
        getComponent: function (componentName) {
            var _this = this
            if (componentName && componentName in componentList) {
                this.setState({
                    curComponent: componentList[componentName]
                })
            } else if (componentName) {
                this.setState({
                    curComponent: Loading
                })
                require([componentName], function (Component) {
                    componentList[componentName] = Component
                    _this.setState({
                        curComponent: Component
                    })
                }, function (err) {
                    console.log(err)
                    _this.setState({
                        curComponent: Noop
                    })
                })
            } else {
                this.setState({
                    curComponent: Noop
                })
            }
        },
        componentWillReceiveProps: function (nextProps) {
            this.getComponent(nextProps.componentName)
        },
        componentDidMount: function () {
            var props = this.props
            var componentName = props.componentName
            if (componentName && !componentList[componentName]) {
                this.getComponent(componentName)
            }
        },
        render: function render() {
            return React.createElement(this.state.curComponent, copyProps(this.props));
        }
    });

    return Loader
});