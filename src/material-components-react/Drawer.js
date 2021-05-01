import Elevation  from "material-components-react/Elevation.js"
import classNames from "material-components-react/drawer/style.css"
import React      from "react"
import ReactDOM   from "react-dom"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            floating: false,
            onPress: e => {
                let {
                    onCancel = () => {}
                } = this.props

                if (this.state.floating && ! ReactDOM.findDOMNode(this).contains(e.target))
                    onCancel()
            },
            resize: () => {
                let {
                    htmlFor
                } = this.props

                let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

                let actionBar = document.getElementById(htmlFor)

                let actionBarHeight =
                    actionBar ? actionBar.getBoundingClientRect().height
                  :             56

                let floating = window.innerWidth < 600

                this.setState({
                    width:
                        floating ? window.innerWidth - actionBarHeight
                      :            rect.width
                    ,
                    floating: floating
                })
            },
            width: undefined
        })
    }

    componentDidMount() {
        let {
            visible
        } = this.props

        if (visible) {
            window.addEventListener("mousedown", this.state.onPress, false)
            window.addEventListener("touchstart", this.state.onPress, false)
        }

        window.addEventListener("resize", this.state.resize, false)
    }

    componentWillReceiveProps({
        visible
    }) {
        if (this.props.visible != visible) {
            if (visible) {
                window.addEventListener("mousedown", this.state.onPress, false)
                window.addEventListener("touchstart", this.state.onPress, false)
            }
            else {
                window.removeEventListener("mousedown", this.state.onPress, false)
                window.removeEventListener("touchstart", this.state.onPress, false)

                this.state.resize()
            }
        }
    }

    componentWillUnmount() {
        if (this.props.visible) {
            window.removeEventListener("mousedown", this.state.onPress, false)
            window.removeEventListener("touchstart", this.state.onPress, false)
        }

        window.removeEventListener("resize", this.state.resize, false)
    }

    render() {
        let {
            className,
            elevation = 16,
            htmlFor,
            onCancel,
            style,
            visible,
            ... props
        } = this.props

        let z = parseInt(elevation)

        let floating = this.state.floating

        return React.createElement(
            Elevation,
            {
                className:
                    []
                        .concat(
                            className ? [className] : [],
                            [classNames.Host],
                            visible ? [classNames.Visible] : [],
                            floating ? [classNames.Floating] : []
                        )
                        .join(" "),
                component: "nav",
                elevation: elevation,
                position: "right",
                style: Object.assign(
                    this.state.width ? {width: this.state.width + "px"} : {},
                    floating         ? {marginLeft: 0}
                  : visible          ? {marginLeft: 0}
                  : this.state.width ? {marginLeft: (- this.state.width) + "px"}
                  :                    {}
                    ,
                    visible  ? {}
                  : floating ? {transform: "translateX(-100%) translateX(-" + z + "px)"}
                  :            {}
                    ,
                    style
                ),
                ... props
            }
        )
    }
}
