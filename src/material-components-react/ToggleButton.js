import RippleEffect from "material-components-react/effect/RippleEffect.js"
import classNames   from "material-components-react/toggle_button/style.css"

export default ({
    className,
    disabled,
    selected,
    ... props
}) =>
    RippleEffect({
        className:
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host],
                    disabled ? [classNames.Disabled] : [],
                    selected ? [classNames.Selected] : []
                )
                .join(" "),
        component: "span",
        ... (disabled ? {disabled} : {}),
        ... props,
    })
