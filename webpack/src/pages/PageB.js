import React from 'react'
import {observer} from 'mobx-react'
import LoadComponent from '../containers/LoadComponent'
import styles from '../styles/Page.css'

@observer
export default class App extends React.Component {
    componentDidMount () {
        this.props.dataStore.getDataB()
    }
    render () {
        const {pageB} = this.props.dataStore
        return (
            <div className={styles.page}>
                <h2>PageB</h2>
                <div>
                    <a href="#/PageA">PageA</a>
                </div>
                {pageB.map((data, i)=>(<LoadComponent key={i} component={data}/>))}
            </div>
        )
    }
}