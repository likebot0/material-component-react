import RippleEffect from "material-components-react/RippleEffect.js"
import classNames   from "material-components-react/button/style.css"

export default ({
    className,
    dense,
    disabled,
    type = "flat",
    ... props
}) => RippleEffect({
    className:
        []
            .concat(
                className ? [className] : [],
                [classNames.Host],
                disabled ? [classNames.Disabled] : [],
                dense ? [classNames.Dense] : [],
                type == "flat"   ? [classNames.Flat]
              : type == "raised" ? [classNames.Raised]
              :                    []
            )
            .join(" "),
    component: "span",
    ... (disabled ? {disabled} : {}),
    fixed: type == "fab",
    ... props
})
