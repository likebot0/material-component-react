import Root       from "material-components-react/control/Root.js"
import classNames from "material-components-react/dialog/style.css"
import elevate    from "material-components-react/elevate.js"
import React      from "react"
import ReactDOM   from "react-dom"

export default props =>
    <Root>
        <Dialog
            {... props}
        />
    </Root>

let Dialog = class extends React.Component {
    componentWillMount() {
        this.setState({
            onClick: e => {
                let {
                    onCancel = () => {}
                } = this.props

                if (! ReactDOM.findDOMNode(this).contains(e.target))
                    onCancel()
            },
            size: undefined
        })
    }

    componentDidMount() {
        let {
            visible
        } = this.props

        if (visible)
            setTimeout(
                () => window.addEventListener("click", this.state.onClick, false),
                1
            )

        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

        this.setState({
            size: [
                rect.width,
                rect.height
            ]
        })
    }

    componentWillReceiveProps({
        visible
    }) {
        if (this.props.visible != visible) {
            if (visible)
                setTimeout(
                    () => window.addEventListener("click", this.state.onClick, false),
                    1
                )
            else
                window.removeEventListener("click", this.state.onClick, false)
        }
    }

    componentWillUnmount() {
        if (this.props.visible)
            window.removeEventListener("click", this.state.onClick, false)
    }

    render() {
        let {
            children,
            className,
            onCancel,
            render,
            style,
            visible,
            ... props
        } = this.props

        return elevate({
            elevation: 24,
            render: elevation => render({
                ... (
                    visible         ? {children}
                  : this.state.size ? {}
                  :                   {children}
                ),
                className:
                    []
                        .concat(
                            [className],
                            [classNames.Host],
                            this.state.visible ? [classNames.Visible]
                          : this.state.size    ? [classNames.Hidden]
                          :                      [],
                            [elevation.className]
                        )
                        .join(" ")
                ,
                style: {
                    ... (
                        this.state.size ? {width: this.state.size[0] + "px"} : {},
                        this.state.size ? {height: this.state.size[1] + "px"} : {},
                        this.state.size ? {
                            transform: [
                                "translateX(50vw)",
                                "translateX(" + -this.state.size[0] / 2 + "px)",
                                visible ? "translateY(50vh) translateY(" + -this.state.size[1] / 2 + "px)"
                              :           "translateY(100vh)"
                            ]
                                .join(" ")
                        }
                      :                   {}
                    ),
                    ... elevation.style,
                    ... style
                },
                ... props
            })
        })
    }
}
