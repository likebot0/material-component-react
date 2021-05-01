import classNames from "material-components-react/card/style.css"
import elevate    from "material-components-react/elevate.js"

export default ({
    raised
}) => {
    let elevation = elevate({elevation: raised ? 8 : 2})

    return {
        className: [classNames.Host, elevation.className].join(" "),
        type: "div",
        style: elevation.style
    }
}
