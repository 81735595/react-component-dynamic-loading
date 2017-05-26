import React from 'react'

export default class BaseComponent extends React.Component {
    render (name) {
        return (<h3>{`I'm ${name}`}</h3>)
    }
}