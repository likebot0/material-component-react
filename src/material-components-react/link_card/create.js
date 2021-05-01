import createCard from "material-components-react/card/create.js"
import classNames from "material-components-react/link_card/style.css"
import {Link}     from "react-router"

export default ({
    className
}) => {
    let card = createCard({});

    return {
        ... card,
        className: [classNames.Host, card.className].join(" "),
        type: Link
    }
}
