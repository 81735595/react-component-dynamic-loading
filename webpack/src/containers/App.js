import React from 'react'
import {observer} from 'mobx-react'
import {Router} from 'director/build/director'
import LoadPage from './LoadPage'

@observer
export default class App extends React.Component {
    componentDidMount () {
        var dataStore = this.props.dataStore;
        var router = Router({
            '/PageA': function() {
                dataStore.curPage = 'PageA'
            },
            '/PageB': function() {
                dataStore.curPage = 'PageB'
            }
        });
        router.init('/PageA');
    }
    render () {
        const {dataStore} = this.props
        return (<LoadPage component={dataStore.curPage}  dataStore={dataStore}/>)
    }
}