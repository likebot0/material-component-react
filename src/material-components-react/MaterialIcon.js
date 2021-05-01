import classNames from "material-components-react/material_icon/style.css"
import React      from "react"

export default ({
    className,
    component = "span",
    ... props
}) =>
    React.createElement(
        component,
        {
            className:
                []
                    .concat(
                        className ? [className] : [],
                        [classNames.Host]
                    )
                    .join(" ")
            ,
            ... props
        }
    )
