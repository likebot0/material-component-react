import classNames  from "material-components-react/avatar/style.css"
import createImage from "material-components-react/image/create.js"

export default ({
}) => {
    let image = createImage({})

    return {
        ... image,
        className: [classNames.Host, image.className].join(" ")
    }
}
