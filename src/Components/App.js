import React, { Component } from "react";
import Header from "./Layout/Header";
import Loading from "./Layout/Loading";
import CharacterCard from "./Character/CharacterCard";
import CharacterList from "./Character/CharacterList";

import { getCharacterByName } from "../Helpers";

class Main extends Component {
    componentDidMount() {
        this.props.requestCharacters();
    }

    getCharacterInfo() {
        const {
            cardCharacter,
            characters
        } = this.props;

        return cardCharacter && getCharacterByName(characters, cardCharacter);
    }

    getErrorMessage() {
        return (
            <div>
                <p>I have a bad Feeling about this</p>
            </div>
        );           
    }

    getHeader() {
        const { 
            characters, 
            setCardCharacter, 
            deleteCharacter 
        } = this.props;
        
        return (
            <Header 
                characters={characters} 
                setCardCharacter={setCardCharacter}
                deleteCharacter={deleteCharacter}
            />
        );
    }

    getCharacterList() {
        const { 
            fetching, 
            characters, 
            setCardCharacter, 
            deleteCharacter 
        } = this.props;

        return (
            <CharacterList 
                characters={characters} 
                setCardCharacter={setCardCharacter}
                deleteCharacter={deleteCharacter}
            />
        );
    }

    getCharacterCard() {
        const currentCharacter = this.getCharacterInfo();

        if (!currentCharacter)
            return null;

        return (
            <CharacterCard 
                characterInfo={currentCharacter}
                deleteCharacter={this.props.deleteCharacter}
                removeCardCharacter={this.props.removeCardCharacter}
            />
        );
    }

    render() {
        const { 
            characters,
            fetching, 
            error,
        } = this.props;

        if (fetching && !characters)
            return <Loading />;

        console.log(this.props);

        return (
            <div className="App">
                {this.getHeader()}
                <div className={"container"} >
                    {error && this.getErrorMessage()}    
                    {this.getCharacterCard()}
                    {this.getCharacterList()}
                </div>
            </div>
        );
    }
}

export default Main;