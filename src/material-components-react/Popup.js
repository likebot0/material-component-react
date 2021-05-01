import elevate    from "material-components-react/elevate.js"
import classNames from "material-components-react/popup/style.css"

export default ({
    onCancel = () => {},
    ref,
    setState,
    state,
    visible
}) => {
    let elevation = elevate({elevation: 8})

    return {
        ... elevation,
        className:
            []
                .concat(
                    [classNames.Host],
                    parseInt(elevation) > 0 ? [classNames.Floating] : [],
                    visible                 ? [classNames.Visible]
                  : state.size              ? [classNames.Hidden]
                  :                           []
                )
                .join(" ")
        ,
        style: Object.assign(
            state.size && visible ? {width: state.size[0] + "px"} : {},
            state.size && visible ? {height: state.size[1] + "px"} : {},
            style
        ),
        willMount: () => {
            setState({
                onPress: e => {
                    if (visible && ! ref.contains(e.target))
                        onCancel()
                },
                size: undefined
            })
        },
        didMount: () => {
            window.addEventListener("mousedown", state.onPress, false)
            window.addEventListener("touchstart", state.onPress, false)

            let rect = ref.getBoundingClientRect()

            setState({
                size: [
                    rect.width,
                    rect.height
                ]
            })
        },
        willUnmount: () => {
            window.removeEventListener("mousedown", state.onPress, false)
            window.removeEventListener("touchstart", state.onPress, false)
        }
    }
}
