import React      from "react"
import classNames from "material-components-react/list/item/avatar/style.css"

export default ({
    className,
    component = "span",
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
