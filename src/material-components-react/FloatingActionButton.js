import Elevation  from "material-components-react/Elevation.js"
import classNames from "material-components-react/floating_action_button/style.css"
import React      from "react"
import ReactDOM   from "react-dom"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            rect: undefined
        })
    }

    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this).parentElement.getBoundingClientRect()

        this.setState({
            rect: rect
        })
    }

    componentWillReceiveProps({
        fullscreen
    }) {
        if (fullscreen != this.props.fullscreen) {
            let rect = ReactDOM.findDOMNode(this).parentElement.getBoundingClientRect()

            this.setState({
                rect: rect
            })
        }
    }

    render() {
        let {
            className,
            fullscreen,
            style,
            ... props
        } = this.props

        return React.createElement(
            Elevation,
            {
                className:
                    []
                        .concat(
                            className ? [className] : [],
                            [classNames.Host],
                            fullscreen ? classNames.FullScreen : []
                        )
                        .join(" "),
                elevation: "12",
                style:
                    fullscreen && this.state.rect ? {
                        top:
                            this.state.rect.top + "px",
                        left:
                            this.state.rect.left + "px",
                        width:
                            this.state.rect.width + "px",
                        height:
                            this.state.rect.height + "px",
                        ... style
                    }
                  :                                  style,
                ... props
            }
        )
    }
}
