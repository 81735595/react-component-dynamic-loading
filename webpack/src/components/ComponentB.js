import React from 'react'
import BaseComponent from '../lib/BaseComponent'
import styles from '../styles/StyleA.css'

export default class ComponentA extends BaseComponent {
    constructor(props) {
        super(props)
    }
    render () {
        return (<div className={styles.font}>{super.render.call(this, 'ComponentB')}</div>)
    }
}