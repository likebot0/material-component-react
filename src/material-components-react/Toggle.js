import classNames from "material-components-react/toggle/style.css"
import React      from "react"

export default ({
    className,
    component = "span",
    Component = component,
    checked,
    disabled,
    ... props
}) =>
    <Component
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host],
                    checked ? [classNames.Checked] : [],
                    disabled ? [classNames.Disabled] : []
                )
                .join(" ")
        }
        {... props}
    />
