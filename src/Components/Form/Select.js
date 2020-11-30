import React from "react";
import {string, func} from "prop-types";

class Select extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }

    toggleShow() {
        const show = this.state.show;
        this.setState({show: !show});
    }

    onOptionSelect(value) {
        this.toggleShow();

        this.props.onSelect(value);
    }

    buildOptions() {
        const {
            extraAction,
            getOptions
        } = this.props;
        const options = getOptions();
        let ExtraAction;

        return (
            <div className="select-options">
                {
                    options.length ? options.map((item, index) => {
                        ExtraAction = extraAction && extraAction.bind(null, item.value);

                        return(
                            <div className="select-option" key={index}>
                                {ExtraAction && <ExtraAction />}
                                <span onClick={() => this.onOptionSelect(item.value)}>{item.text}</span>
                            </div>
                        )
                    }) : <span>Nothing to see Here</span>
                }
            </div>
        );
    };

    getClearbutton() {
        return (
            <span className="select-button-action text-error" onClick={() => this.props.onClear()}>
                clear
            </span>
        );

    }

    getClosebutton() {
        return (
            <span className="select-button-action" onClick={() => this.toggleShow()}>
                close
            </span>
        );
    }

    getSelectText() {
        return <span onClick={() => this.toggleShow()}>{this.props.selectedOptionText || "Select"}</span>
    }

    render() {
        return (
            <div className="select-wrapper">
                <div className="select-button">
                    {this.getSelectText()}
                    {this.props.selectedOptionText ? this.getClearbutton() : null}
                    {this.state.show ? this.getClosebutton() : null}
                </div>
                {this.state.show ? this.buildOptions() : null}
            </div>
        );
    }
}

Select.displayName = "Form/Select";

Select.propTypes = {
    selectedOptionText: string,
    onSelect: func,
    getOptions: func,
    extraAction: func,
}

export default Select;