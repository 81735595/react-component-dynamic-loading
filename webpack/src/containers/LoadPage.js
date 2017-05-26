import Loader from './Loader'

export default class LoadPage extends Loader {
    constructor(props) {
        super(props)
    }
    getComponent (componentName) {
        if (super.getComponent.call(this, componentName) && componentName) {
            import(/* webpackChunkName: "page" */ `../pages/${componentName}`)
                .then(Component => {
                    Component = Component.default
                    let componentList = Loader.getComponentList()
                    componentList[componentName] = Component
                    this.setState({
                        curComponent: Component
                    })
                })
                .catch(err => console.log('Failed to load page', err))
        }
    }
}