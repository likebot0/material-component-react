import Elevation  from "material-components-react/Elevation.js"
import classNames from "material-components-react/toolbar/style.css"
import React      from "react"

export default ({
    className,
    ... props
}) =>
    Elevation({
        className:
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host]
                )
                .join(" "),
        elevation: 4,
        ... props
    })
