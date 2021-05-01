import classNames from "material-components-react/form/text_field/style.css"
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
            multiLine,
            component =
                multiLine ? "textarea"
              :             "input"
            ,
            Component = component,
            name,
            id = name,
            onBlur = e => {},
            onFocus = e => {},
            placeholder = hintText,
            required,
            value,
            defaultValue,
            ... props
        } = this.props

        return (
            <div
                className={
                    []
                        .concat(
                            [classNames.Host],
                            this.state.empty == true  ? [classNames.Empty]
                          : this.state.empty == false ? []
                          : value                     ? []
                          : defaultValue              ? []
                          :                             [classNames.Empty],
                            this.state.focused ? [classNames.Focused] : [],
                            this.state.invalid ? [classNames.Invalid] : [],
                            disabled ? [classNames.Disabled] : [],
                            required ? [classNames.Required] : []
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
                    </span>
                    <span
                        className={classNames.DummyLabelText}
                    >
                        {labelText}
                    </span>
                </label>
                <Component
                    className={
                        []
                            .concat(
                                className ? [className] : [],
                                [classNames.InputText]
                            )
                            .join(" ")
                    }
                    disabled={disabled}
                    id={id}
                    name={name}
                    onBlur={e => {
                        onBlur(e)

                        this.setState({
                            empty  : e.target.value.length == 0,
                            focused: false,
                            invalid: ! e.target.validity.valid
                        })
                    }}
                    onFocus={e => {
                        onFocus(e)

                        this.setState({
                            focused: true
                        })
                    }}
                    placeholder={(
                        this.state.focused ? placeholder
                      : labelText          ? ""
                      :                      placeholder
                    )}
                    required={required}
                    value={value}
                    defaultValue={defaultValue}
                    {... props}
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
