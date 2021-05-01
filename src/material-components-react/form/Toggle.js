import Toggle     from "material-components-react/Toggle.js"
import classNames from "material-components-react/form/toggle/style.css"
import React      from "react"

export default class extends React.Component {
    componentWillMount() {
        let {
            defaultChecked
        } = this.props

        this.setState({
            checked: defaultChecked
        })
    }

    render() {
        let {
            className,
            name,
            id = name,
            defaultChecked,
            disabled,
            labelText,
            onBlur = e => {},
            onFocus = e => {},
            ... props
        } = this.props

        return (
            <div
                className={
                    []
                        .concat(
                            [className],
                            [classNames.Host],
                            this.state.imageUrl ? [] : [classNames.Empty],
                            disabled ? [classNames.Disabled] : [],
                            this.state.focused ? [classNames.Focused] : [],
                            this.state.invalid ? [classNames.Invalid] : []
                        )
                        .join(" ")
                }
            >
                <label
                    className={classNames.Label}
                    htmlFor={id}
                >
                    <span
                        className={classNames.LabelText}
                    >
                        {labelText}
                    </span><br />
                    <Toggle
                        checked={this.state.checked}
                        disabled={disabled}
                    />
                </label>
                <input
                    checked={this.state.checked}
                    className={classNames.Input}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onBlur={e => {
                        onBlur(e)

                        this.setState({
                            focused: false,
                            invalid: ! e.target.validity.valid
                        })
                    }}
                    onChange={e => {
                        this.setState({
                            checked: e.target.checked
                        })
                    }}
                    onFocus={e => {
                        onFocus(e)

                        this.setState({
                            focused: true
                        })
                    }}
                    type="checkbox"
                    {... props}
                />
            </div>
        )
    }

}
