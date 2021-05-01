import classNames from "material-components-react/image/style.css"

export default ({
    alt,
    crossOrigin,
    height,
    onLoad,
    sizes,
    src,
    srcSet,
    style = {},
    width
}) => ({
    children: [
        {
            alt: alt,
            crossOrigin: crossOrigin,
            height: height,
            key: 1,
            onLoad: onLoad,
            sizes: sizes,
            src: src,
            srcSet: srcSet,
            type: "img",
            width: width
        }
    ],
    className: classNames.Host,
    style: Object.assign(
        src    ? {backgroundImage: "url(" + src + ")"} : {},
        width  ? {width: width + "px"} : {},
        height ? {height: height + "px"} : {},
        style
    ),
    type: "span"
})
