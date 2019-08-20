import React, { Component } from 'react'

export class FolderView extends Component {

    constructor(props) {
        super(props)
        this.state = { files: [] };
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
            <div style={styles.flex}>
                <div id="folder-view" style={styles.view} onDragOver={(e) => this.dragOver(e)} onDrop={(e) => this.renderFolder(e)}>
                    drop here
                </div>
            </div>
        )
    }
}

const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'center',
    },
    view: {
        width: '50vw',
        height: '10vh',
        border: '1px solid black',
        textAlign: 'center',
        padding: '20px',
        textTransform: 'uppercase'
    }

}

export default FolderView
// https://github.com/quarklemotion/html5-file-selector/blob/master/src/Html5FileSelector.js
// if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {

    // Dropzone.blacklistedBrowsers = [
    //     // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
    //     /opera.*(Macintosh|Windows Phone).*version\/12/i];