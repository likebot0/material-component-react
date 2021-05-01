import React        from "react"
import LinearLayout from "material-components-react/LinearLayout.js"
import classNames   from "material-components-react/dialog/footer/style.css"

export default ({
    className,
    ... props
}) =>
    <LinearLayout
        className={
            []
                .concat(
                    className ? [className] : [],
                    [classNames.Host]
                )
                .join(" ")
        }
        component="div"
        orientation="horizontal"
        {... props}
    />
