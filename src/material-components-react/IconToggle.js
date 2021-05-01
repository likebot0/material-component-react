import RippleEffect from "material-components-react/RippleEffect.js"
import classNames   from "material-components-react/icon_toggle/style.css"
import React        from "react"

export default ({
    className,
    disabled,
    ... props
}) =>
    React.createElement(
        RippleEffect,
        {
            className:
                []
                    .concat(
                        [className],
                        [classNames.Host],
                        disabled ? [classNames.Disabled] : []
                    )
                    .join(" "),
            component: "span",
            disabled: disabled,
            fixed: true,
            ... props
        }
    )
