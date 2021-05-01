import React      from "react"
import classNames from "material-components-react/ListItemIcon/style.css"

export default ({
    className,
    component = "p",
    Component = component,
    ... props
}) =>
    <Component
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host]
                )
                .join(" ")
        }
        {... props}
    />
