import List       from "material-components-react/List.js"
import classNames from "material-components-react/breadcrumb_list/style.css"

export default ({
    className,
    ... props
}) =>
    List({
        className:
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host]
                )
                .join(" ")
        ,
        component: "ol",
        itemScope: "",
        itemType: "http://schema.org/BreadcrumbList",
        orientation: "horizontal",
        ... props
    })
