import React from "react";
import Header from "./Layout/Header";
import Loading from "./Layout/Loading";
import CharacterCard from "./Character/CharacterCard";
import CharacterList from "./Character/CharacterList";

import { getCharacterByName } from "../Helpers";

class Main extends React.Component {
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
            <div className="alert alert-error">
                <p>I have a bad Feeling about this</p>
            </div>
        );
    }

    getHeader() {
        const {
            characters,
            cardCharacter,
            setCardCharacter,
            deleteCharacter,
            removeCardCharacter
        } = this.props;

        return (
            <Header
                cardCharacter={cardCharacter}
                characters={characters}
                setCardCharacter={setCardCharacter}
                deleteCharacter={deleteCharacter}
                removeCardCharacter={removeCardCharacter}
            />
        );
    }

    getCharacterList() {
        const {
            requestCharacters,
            characters,
            setCardCharacter,
            deleteCharacter
        } = this.props;

        return (
            <CharacterList
                characters={characters}
                setCardCharacter={setCardCharacter}
                deleteCharacter={deleteCharacter}
                onEmptyState={requestCharacters}
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
            fetching,
            error
        } = this.props;

        if (fetching)
            return <Loading />;

        return (
            <div className="App container">
                {this.getHeader()}
                <div>
                    {error && this.getErrorMessage()}
                    {this.getCharacterCard()}
                    {this.getCharacterList()}
                </div>
            </div>
        );
    }
}

export default Main;