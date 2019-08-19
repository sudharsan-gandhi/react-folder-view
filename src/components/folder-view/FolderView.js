import React, { Component } from 'react'

export class FolderView extends Component {

    constructor(props) {
        super(props)
        this.state = {files:[]};
    }

    componentDidMount() {

    }

    renderFolder(evt) {
        debugger;
        evt.preventDefault();
        return false;
    } 

    dragOver(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div id="folder-view" style = { styles.view } onDragOver = {(e) => this.dragOver(e)} onDrop = { (e) => this.renderFolder(e)}>
                drop here
            </div>
        )
    }
}

const styles = {
    view : {
        margin: '1px',
        width: '20vw', 
        height: '100vh',
        border: '1px solid black',
        textAlign: 'center',
        padding: '20px'
    }
}

export default FolderView
// https://github.com/quarklemotion/html5-file-selector/blob/master/src/Html5FileSelector.js