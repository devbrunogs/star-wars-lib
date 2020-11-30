import React from "react";
import CharacterSelect from "../Character/CharacterSelect";

const Header = props => {
    return (
        <header>
            <div>
                <h2>Star Wars Lib</h2>
            </div>
            <div>
                <CharacterSelect
                    {...props}
                />
            </div>
        </header>
    );
}

Header.displayName = "Layout/Header";

export default Header;