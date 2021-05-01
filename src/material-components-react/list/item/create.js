import LinearLayout from "material-components-react/LinearLayout.js"
import classNames   from "material-components-react/list/style.css"
import React        from "react"

export default ({
    children,
    className,
    location,
    ... props
}) =>
    React.createElement(
        LinearLayout,
        {
            children:
                React.Children.toArray(children).map(
                    x => React.cloneElement(
                        x,
                        {location: location}
                    )
                )
            ,
            className:
                []
                    .concat(
                        className ? [className] : [],
                        [classNames.Host]
                    )
                    .join(" ")
            ,
            component: "ul",
            ... props
        }
    )
