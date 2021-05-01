import React      from "react"
import Image      from "material-components-react/Image.js"
import classNames from "material-components-react/list/item/icon/style.css"

export default ({
    className,
    component = Image,
    Component = component,
    selected,
    ... props
}) =>
    <Component
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host],
                    selected ? [classNames.Selected] : []
                )
                .join(" ")
        }
        {... props}
    />
