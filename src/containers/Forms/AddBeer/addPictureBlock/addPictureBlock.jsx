import React from 'react';
import "./addPictureBlock.css";
import DragAndDrop from '../../../../components/UI/_dragAndDrop/_dragAndDrop';
import Aux from '../../../../hoc/auxilary';
const addPictureBlock = props => {
    return (
        <div className="pic-part-container">
            <h2>Podgląd dodanej treści</h2>
           

            
            
            <div className="pic-name-holder">
                {(props.coreItems[0].val && props.coreItems[0].error === "") ? 
                <h2>Nazwa piwa: <b>{props.coreItems[0].val}</b></h2> : null}
                {(props.coreItems[1].val && props.coreItems[1].error === "") ? 
                    <Aux>
                        <h3>Opis piwa: </h3>
                        <article>{props.coreItems[1].val}</article>
                    </Aux>
                : null}
                

                
                
                <ul className="aditional-infos">
                    {(props.coreItems[2].val && props.coreItems[2].error === "") ? 
                    <li>{props.coreItems[2].val} % <span>% Alk</span></li>
                    : null
                    }

                    {(props.coreItems[3].val && props.coreItems[3].error === "") ? 
                    <li>{props.coreItems[3].val} zł<span>Cena</span></li>
                    : null
                    }
                    
                    {(props.aditionalItems[2].val && props.aditionalItems[2].error === "") ? 
                    <li>{props.aditionalItems[2].val} %<span>% Ibu</span></li>
                    : null
                    }

                    {(props.aditionalItems[3].val && props.aditionalItems[3].error === "") ? 
                    <li>{props.aditionalItems[3].val} %<span>% Blg</span></li>
                    : null
                    }
                </ul>


                <ul className="other-content-list">
                    {(props.aditionalItems[0].val && props.aditionalItems[0].error === "") ? 
                    <li>
                        <span>Kolor</span>
                        <b>{props.aditionalItems[0].val}</b>
                    </li>
                    : null
                    }

                    {(props.aditionalItems[1].val && props.aditionalItems[1].error === "") ? 
                    <li>
                        <span>Kraj pochodzenia</span>
                        <b>{props.aditionalItems[1].val}</b>
                    </li>
                    : null
                    }

                    {(props.aditionalItems[4].val && props.aditionalItems[4].error === "") ? 
                    <li>
                        <span>Typ</span>
                        <b>{props.aditionalItems[4].val}</b>
                    </li>
                    : null
                    }

                    {(props.aditionalItems[5].val && props.aditionalItems[5].error === "") ? 
                    <li>
                        <span>Dystrybucja</span>
                        <b>{props.aditionalItems[5].val}</b>
                    </li>
                    : null
                    }

                    {(props.aditionalItems[6].val && props.aditionalItems[6].error === "") ? 
                    <li>
                        <span>Rodzaj</span>
                        <b>{props.aditionalItems[6].val}</b>
                    </li>
                    : null
                    }
                </ul>


                
                <div className="botle-higher">
                    {props.files.length > 0 ?

                    <div style={{backgroundImage: `url(${props.files.length > 0 ? props.files[0].preview : null})`}} 
                    className={`botle-container`}>

                    </div> : null}

                </div>
               

                <DragAndDrop 
                deletePic={props.deletePic} 
                incorrectPictureError={props.incorrectPictureError} 
                files={props.files}
                onDropHandler={props.onDropHandler} />
            </div>
        </div>
    );
    
};

export default addPictureBlock;
