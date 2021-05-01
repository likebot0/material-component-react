import RippleEffect from "material-components-react/RippleEffect.js"
import classNames   from "material-components-react/list/item/style.css"
import match        from "material-components-react/location/match.js"
import React        from "react"
import {Link}       from "react-router"

export default ({
    className,
    children,
    disabled,
    location,
    to,
    selected = location && match({
        location          : location,
        locationDescriptor: to
    }),
    value,
    ... props
}) =>
    <li
        className={
            []
                .concat(
                    [className],
                    [classNames.Host],
                    disabled ? [classNames.Disabled] : [],
                    selected ? [classNames.Selected] : []
                )
                .join(" ")
        }
        {... props}
    >
        <RippleEffect
            children={
                React.Children.toArray(children).map(x => 
                    typeof(x) == "string" ? x
                  : typeof(x) == "number" ? x
                  :                         React.cloneElement(
                        x,
                        {
                            selected: selected,
                        }
                    )
                )
            }
            component={
                disabled ? undefined
              : to       ? Link
              :            undefined
            }
            disabled={disabled}
            to={to}
        />
    </li>
