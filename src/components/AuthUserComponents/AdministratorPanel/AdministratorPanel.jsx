import React, { Component } from 'react';
import './AdministratorPanel.css';
import Transition from 'react-transition-group/Transition';
import Spinner from '../../UI/_spinner/_spinner';
import { connect } from 'react-redux';
import { fetchAllGroupsActionCreator } from '../../../store/BeerGroups/Actions';
import { fetchAllBeersActionCreator } from '../../../store/Beers/Actions';
import { fetchAllBreweriesActionCreator } from '../../../store/Breweries/Actions';
class AdministratorPanel extends Component{
    state = {
        showSpinner: true,
        choosenBlock: "1",
        allContent: [
            {id: "1", array: []},
            {id: "2", array: []},
            {id: "3", array: []}
        ],
        countOfChoosen: 0
    }
    componentDidMount(){ this.props.fetchingGroups(); }
    componentWillReceiveProps(nextProps){
        if(nextProps.loadingAllGroupsErrors !== this.props.loadingAllGroupsErrors){
            this.setState({showSpinner: false});
        }
        if(nextProps.loadedGroups !== this.props.loadedGroups && 
            nextProps.loadedGroups){
            const newAllContent = [...this.state.allContent];
            newAllContent[0].array =  this.mapArray(nextProps.loadedGroups);
            this.setState({allContent: newAllContent});
        }
        if(nextProps.loadedBreweries !== this.props.loadedBreweries && 
            nextProps.loadedBreweries){
            const newAllContent = [...this.state.allContent];
            newAllContent[1].array =  this.mapArray(nextProps.loadedBreweries);
            this.setState({allContent: newAllContent});
        }
        if(nextProps.loadedBeers !== this.props.loadedBeers && 
            nextProps.loadedBeers){
            const newAllContent = [...this.state.allContent];

            newAllContent[2].array = this.mapArray(nextProps.loadedBeers);
            this.setState({allContent: newAllContent});
        }
    }
    mapArray = array => {
        const newArray = [];
        for(let key in array)
            newArray.push({isSelected: false, item: array[key]});

        return newArray;
    }
    changeBlock = id => {
        const copiedAllContent = [...this.state.allContent];
        const index = copiedAllContent.findIndex(i => {
            return i.id === id
        });
        if(copiedAllContent[index].array.length === 0 && id === "2")
            this.props.fetchAllBreweries();
            
        else if(copiedAllContent[index].array.length === 0 && id === "3")
            this.props.fetchAllBeers();

        this.setState({choosenBlock: id});
    }
    select = id => {
        let ItemsToChange = null;
        switch(this.state.choosenBlock){
            case "2":
                ItemsToChange = [...this.state.allContent[1].array];
                break;
            case "3":
                ItemsToChange = [...this.state.allContent[2].array];
                break;
            default:
                ItemsToChange = [...this.state.allContent[0].array];
                break;
        }
        const index = ItemsToChange.findIndex(i => {
            return i.item.id === id
        });
        const numberToDelete = ItemsToChange[index].isSelected ? this.state.countOfChoosen-1 : 
            this.state.countOfChoosen+1;

        ItemsToChange[index].isSelected = !ItemsToChange[index].isSelected;
        const newAllContent = [...this.state.allContent];

        switch(this.state.choosenBlock){
            case "2":
                newAllContent[1].array = ItemsToChange;
                break;
            case "3":
                newAllContent[2].array = ItemsToChange;
                break;
            default:
                newAllContent[0].array = ItemsToChange;
                break;
        }
        
        this.setState({allContent: newAllContent, 
            countOfChoosen: numberToDelete});
    }

    deleteChoosen = () => {
        const oldAllContent = [...this.state.allContent];
        const newAllContent = [];
        const stringKeys = ["1", "2", "3"];
        let counter = 0;
        for(let key in oldAllContent){
            const helpArray = [];
            for(let keyo in oldAllContent[key].array){
                if(!oldAllContent[key].array[keyo].isSelected)
                helpArray.push(oldAllContent[key].array[keyo]);
            }
            newAllContent.push({id: stringKeys[counter], array: helpArray});
            counter++;
        }
        this.setState({allContent: newAllContent, countOfChoosen: 0});
    }
    deleteSelected = id => {
        let ItemsToChange = null;
        switch(this.state.choosenBlock){
            case "2":
                ItemsToChange = [...this.state.allContent[1].array];
                break;
            case "3":
                ItemsToChange = [...this.state.allContent[2].array];
                break;
            default:
                ItemsToChange = [...this.state.allContent[0].array];
                break;
        }
        const index = ItemsToChange.findIndex(i => {
            return i.item.id === id
        });
        const newAllContent = [...this.state.allContent];
        const newArray = [];
        for(let key in ItemsToChange){
            if(id !== ItemsToChange[key].item.id)
                newArray.push(ItemsToChange[key]);
        }
        switch(this.state.choosenBlock){
            case "2":
                newAllContent[1].array = newArray;
                break;
            case "3":
                newAllContent[2].array = newArray;
                break;
            default:
                newAllContent[0].array = newArray;
                break;
        }
        this.setState({allContent: newAllContent, 
            countOfChoosen: this.state.countOfChoosen--});

    }

    render(){
    let listItemsToShow = null;
    switch(this.state.choosenBlock){
        case "2":
            listItemsToShow = [...this.state.allContent[1].array];
        break;
        case "3":
            listItemsToShow = [...this.state.allContent[2].array];
        break;
        default:
            listItemsToShow = [...this.state.allContent[0].array];
        break;
    }

    return(
    <Transition mountOnEnter unmountOnExit 
            in={this.props.openAdminPanel}>   
            {state => (
                <div style={{backgroundImage: `url(${require("../../../assets/BeerBackground.jpg")})`}} 
                className={`administrator-panel ${this.props.openAdminPanel ? 
                "admin-panel-in" : "admin-panel-out"}`}>
                    {this.state.showSpinner ? 
                    <Spinner spinnerContent="trwa wczytywanie..." color="white"/> : null}

                    <div className="content-holder">
                        <i onClick={this.props.toggleAdminPanel} className="fa fa-times"></i>
                        {this.state.countOfChoosen > 0 ? 
                            <button onClick={this.deleteChoosen} className="delete-choosen">Usuń zaznaczone</button> 
                            : <h1>Panel administratora</h1>}
                    </div>
                    <div className="input-search-container">
                        <input type="text" placeholder="Znajdź piwo" />
                    </div>
                    <nav>
                        <button className={this.state.choosenBlock === "1" ? "active-admin-button" : null} 
                        onClick={() => this.changeBlock("1")}>
                            <img src={require('../../../assets/icons/brewery-group.png')} alt="Logo" />    
                            Grupy piwowarskie
                        </button>
                        <button className={this.state.choosenBlock === "2" ? "active-admin-button" : null} 
                        onClick={() => this.changeBlock("2")}>
                            <img src={require('../../../assets/icons/beer-factory.png')} alt="Logo" />    
                            Browary
                        </button>
                        <button className={this.state.choosenBlock === "3" ? "active-admin-button" : null} 
                        onClick={() => this.changeBlock("3")}>
                            <img src={require('../../../assets/icons/beer-icon.png')} alt="Logo" /> 
                            Piwa
                        </button>
                    </nav>

                    <ul className="content-list">
                        {listItemsToShow ? listItemsToShow.map(i => {
                            return (
                                <li className={i.isSelected ? "selected-item-list" : null}>
                                    {i.item.name}
                                    <span>
                                        <i onClick={() => this.select(i.item.id)} 
                                        className={`fa ${!i.isSelected ? "fa-check" : "fa-times"}`}></i>
                                        <i onClick={() => this.deleteSelected(i.item.id)} className="fa fa-trash"></i>
                                    </span>
                                </li>
                            );
                        }) : null}
                    </ul>

                </div>
            )}                 
        </Transition>
        );
    }
}


const mapStateToProps = state => {
    return {
        loadedGroups: state.BeerGroupsReducer.loadedGroups,
        loadingAllGroupsErrors: state.BeerGroupsReducer.loadingAllGroupsErrors,

        loadedBeers: state.BeersReducer.loadedBeers,
        loadingAllBeersErrors: state.BeersReducer.loadingAllBeersErrors,

        loadedBreweries: state.BreweriesReducer.loadedBreweries,
        loadingAllBreweriesErrors: state.BreweriesReducer.loadingAllBreweriesErrors


    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingGroups: () => dispatch(fetchAllGroupsActionCreator()),
        fetchAllBeers: () => dispatch(fetchAllBeersActionCreator()),
        fetchAllBreweries: () => dispatch(fetchAllBreweriesActionCreator())
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorPanel);

