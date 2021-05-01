import React from "react"

import classNames from "material-components-react/view_pager/style.css"

export default ({
    children,
    className,
    component = "div",
    selectedIndex,
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
                    .join(" "),
            ... props
        },
        Array.from(React.Children.toArray(children).entries()).map(([i, x]) =>
            React.cloneElement(
                x,
                {
                    style: {
                        left     : -100 * i + "%",
                        transform: "translate3d(" + 100 * (i - selectedIndex) + "%, 0, 0)" ,
                        ... x.props.style
                    }
                }
            )
        )
    )
