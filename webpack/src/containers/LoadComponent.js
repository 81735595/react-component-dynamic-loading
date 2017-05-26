import Loader from './Loader'

export default class LoadComponent extends Loader {
    constructor(props) {
        super(props)
    }
    getComponent (componentName) {
        if (super.getComponent.call(this, componentName) && componentName) {
            import(/* webpackChunkName: "component" */ `../components/${componentName}`)
                .then(Component => {
                    Component = Component.default
                    let componentList = Loader.getComponentList()
                    componentList[componentName] = Component
                    this.setState({
                        curComponent: Component
                    })
                })
                .catch(err => console.log('Failed to load component', err))
        }
    }
}