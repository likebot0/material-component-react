import Elevation  from "material-components-react/Elevation.js"
import Root       from "material-components-react/control/Root.js"
import classNames from "material-components-react/snackbar/style.css"
import React      from "react"

export default (props) =>
    <Root>
        <Snackbar
            {... props}
        />
    </Root>

let Snackbar = class extends React.Component {
    componentWillMount() {
        this.setState({
            timeoutId: undefined,
            visible: true
        })
    }

    componentWillUnmount() {
        if (this.state.timeoutId)
            clearTimeout(this.state.timeoutId)
    }

    render() {
        let {
            className,
            duration,
            onAnimationEnd = e => {},
            onHidden = () => {},
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
                            this.state.visible ? [classNames.Visible]
                          :                      [classNames.Hidden]
                        )
                        .join(" ")
                ,
                elevation: 6,
                onAnimationEnd: e => {
                    onAnimationEnd(e)

                    if (this.state.visible)
                        this.setState({
                            timeoutId: setTimeout(
                                () => this.setState({
                                    timeoutId: undefined,
                                    visible: false
                                }),
                                duration
                            )
                        })
                    else
                        onHidden()
                }
                ,... props
            }
        )
    }
}