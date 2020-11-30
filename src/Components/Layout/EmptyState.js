import React from "react";
import {func} from "prop-types";

const EmptyState = ({action}) => {
    return (
        <div className="text-center">
            <h2 className="text-center">Nothing to see here... Move Along...</h2>
            <div>
                {action ? <button className="btn-primary" onClick={() => action()}>Try this</button> : null }
            </div>
        </div>
    )
};

EmptyState.displayName = "Layout/EmptyState";

EmptyState.propTypes = {
    action: func
}

export default EmptyState;