import classNames from "material-components-react/form/FullWidthTextField/style.css"
import React      from "react"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            empty  : undefined,
            focused: false,
            invalid: false
        })
    }

    render() {
        let {
            className,
            disabled,
            helperText,
            hintText,
            labelText,
            name,
            id = name,
            onBlur,
            onFocus,
            placeholder = hintText,
            required,
            value,
            defaultValue,
            ... props
        } = this.props

        return (
            <div
                className={
                    [
                        classNames.TextField,
                        this.state.empty == true  ? classNames.Empty
                      : this.state.empty == false ? undefined
                      : value                     ? undefined
                      : defaultValue              ? undefined
                      :                             classNames.Empty,
                        this.state.focused ? classNames.Focused
                      :                      undefined,
                        this.state.invalid ? classNames.Invalid
                      :                      undefined,
                        disabled ? classNames.Disabled
                      :            undefined,
                        required ? classNames.Required
                      :            undefined
                    ].join(" ")
                }
                disabled={disabled}
            >
                <label
                    className={classNames.Label}
                    htmlFor={id}
                >
                    <span
                        className={classNames.LabelText}
                    >
                        {labelText}
                    </span>
                    <span
                        className={classNames.DummyLabelText}
                    >
                        {labelText}
                    </span>
                </label>
                <input
                    {... props}
                    className={[className, classNames.Host].join(" ")}
                    id={id}
                    name={name}
                    disabled={disabled}
                    placeholder={(
                        this.state.focused ? placeholder
                      : labelText          ? ""
                      :                      placeholder
                    )}
                    required={required}
                    onBlur={e => {
                        onBlur && onBlur(e)

                        this.setState({
                            empty  : e.target.value.length == 0,
                            focused: false,
                            invalid: ! e.target.validity.valid
                        })
                    }}
                    onFocus={e => {
                        onFocus && onFocus(e)

                        this.setState({
                            focused: true
                        })
                    }}
                    value={value}
                    defaultValue={defaultValue}
                />
                <span
                    className={classNames.HelperText}
                >
                    {helperText}
                </span>
            </div>
        )
    }
}
