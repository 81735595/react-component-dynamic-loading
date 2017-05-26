import React from 'react'

const componentList = {}

function Noop() {
    return null;
}

function Loading() {
    return <div>loading……</div>
}

function copyProps (props) {
    let result = {}
    for (let prop in props) {
        if (prop != 'component') {
            result[prop] = props[prop]
        }
    }
    return result
}


export default class Loader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curComponent: componentList[props.componentName] || Noop
        }
    }
    getComponent (componentName) {
        if (componentName && componentName in componentList) {
            this.setState({
                curComponent: componentList[componentName]
            })
            return false
        } else if (componentName) {
            this.setState({
                curComponent: Loading
            })
            return true
        }
    }
    componentWillReceiveProps (nextProps) {
        this.getComponent(nextProps.component)
    }
    componentDidMount () {
        let componentName = this.props.component
        if (componentName) {
            this.getComponent(componentName)
        }
    }
    render () {
        return <this.state.curComponent {...copyProps(this.props)}/>
    }
    static getComponentList () {
        return componentList
    }
}