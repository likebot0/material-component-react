import React      from "react"
import classNames from "material-components-react/dialog/body/style.css"

export default ({
    className,
    component = "div",
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
