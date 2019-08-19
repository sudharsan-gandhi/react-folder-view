import React, { Component } from 'react'

export class FolderView extends Component {

    componentDidMount() {
        document.getElementById('folder-view').addEventListener((evt) => this.renderFolder(evt))
    }

    renderFolder(evt) {
        
    } 
    render() {
        return (
            <div id="folder-view">
                
            </div>
        )
    }
}

export default FolderView
