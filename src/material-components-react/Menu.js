import List       from "material-components-react/List.js"
import Popup      from "material-components-react/Popup.js"
import classNames from "material-components-react/menu/style.css"
import React      from "react"

export default ({
    className,
    ... props
}) =>
    <Popup
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host]
                )
                .join(" ")
        }
        component={List}
        {... props}
    />
