import ListItem   from "material-components-react/ListItem.js"
import classNames from "material-components-react/tab/style.css"
import React      from "react"

export default ({
    className,
    selected,
    ... props
}) =>
    <ListItem
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host],
                    selected ? [classNames.Selected] : []
                )
                .join(" ")
        }
        {... (selected ? {selected} : {})}
        {... props}
    />
