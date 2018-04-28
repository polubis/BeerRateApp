import React from 'react';
import './_dragAndDrop.css';
import Dropzone from 'react-dropzone';
import Aux from '../../../hoc/auxilary';
const dragAndDrop = props => {
    return(
        <Aux>
            <Dropzone className="drag-and-drop-container" onDrop={props.onDropHandler} >
                {props.incorrectPictureError ? 
                <p className="inc-pic">{props.incorrectPictureError}</p> : 
                <p className="dad-prompt">Upuść zdjęcie</p>}
            </Dropzone>
              {props.files.length > 0 ? 
              <span onClick={props.deletePic} className="delete-pic-button">
                  Usuń dodane zdjęcie
              </span> : null}
        </Aux>
        
    );
}


export default dragAndDrop;
