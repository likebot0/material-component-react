import classNames from "material-components-react/linear_layout/style.css"
import React      from "react"

export default ({
    className,
    component = "div",
    orientation = "vertical",
    ... props
}) =>
    React.createElement(
        component,
        {
            className:
                []
                    .concat(
                        className ? [className] : [],
                        [classNames.Host],
                        orientation == "horizontal" ? [classNames.Horizontal]
                      : orientation == "vertical"   ? [classNames.Vertical]
                      :                               []
                    )
                    .join(" "),
            ... props
        }
    )
