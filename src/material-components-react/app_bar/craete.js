import classNames    from "material-components-react/app_bar/style.css"
import createToolbar from "material-components-react/toolbar/create.js"

export default ({
}) => {
    let toolbar = createToolbar({}) 

    return {
        ... toolbar,
        className: [classNames.Host, toolbar.className].join(" "),
    }
}
