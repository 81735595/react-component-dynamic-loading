import React from 'react'
import {observer} from 'mobx-react'
import LoadComponent from '../containers/LoadComponent'
import styles from '../styles/Page.css'

@observer
export default class App extends React.Component {
    componentDidMount () {
        this.props.dataStore.getDataA()
    }
    render () {
        const {pageA} = this.props.dataStore
        return (
            <div className={styles.page}>
                <h2>PageA</h2>
                <div>
                    <a href="#/PageB">PageB</a>
                </div>
                {pageA.map((data, i)=>(<LoadComponent key={i} component={data}/>))}
            </div>
        )
    }
}