import classNames from "material-components-react/elevation/style.css"

let makeBoxShadow = ({
    elevation,
    position
}) =>
    [
        position == "left"  ? (- elevation) + "px"
      : position == "right" ? elevation + "px"
      :                       "0",
        position == "top"    ? (- elevation) + "px"
      : position == "bottom" ? elevation + "px"
      :                        "0",
        elevation + "px",
        "0",
        "rgba(0, 0, 0, .1)"
    ]
        .join(" ")

export default ({
    elevation = "2",
    position = "bottom",
}) => ({
    className: classNames.Host,
    style: {
        boxShadow: makeBoxShadow({
            elevation: elevation,
            position: position
        }),
        zIndex: elevation
    }
})
