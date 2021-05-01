import classNames from "material-components-react/ripple_effect/style.css"
import React      from "react"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            ripples: []
        })
    }

    render() {
        let {
            children,
            className,
            component = "div",
            disabled,
            fixed,
            onClick = e => {},
            ... props
        } = this.props

        return React.createElement(
            component,
            {
                children:
                    React.Children.toArray(children).concat(
                        this.state.ripples.map(({id, position, opacity, radius}) =>
                            React.createElement(
                                "span",
                                {
                                    className: classNames.Ripple,
                                    key: id,
                                    onAnimationEnd: () => {
                                        this.setState({
                                            ripples: this.state.ripples.filter(x => x.id != id)
                                        })
                                    },
                                    style: {
                                        left:
                                            position[0] + "px",
                                        top:
                                            position[1] + "px",
                                        width:
                                            radius * 2 + "px",
                                        height:
                                            radius * 2 + "px"
                                    }
                                }
                            )
                        )
                    )
                ,
                className:
                    []
                        .concat(
                            className,
                            classNames.Host,
                            disabled ? [classNames.Disabled] : []
                        )
                        .join(" ")
                ,
                onClick: e => {
                    onClick(e)

                    if (disabled)
                        return

                    let rect = e.currentTarget.getBoundingClientRect()

                    if (fixed) {
                        let radius = Math.min(rect.width, rect.height) / 2

                        this.setState({
                            ripples: this.state.ripples.concat({
                                id: e.timeStamp,
                                opacity: 1,
                                position: [
                                    rect.width  / 2 - radius,
                                    rect.height / 2 - radius
                                ],
                                radius: radius
                            })
                        })
                    }
                    else {
                        let radius = Math.max(rect.width, rect.height)

                        this.setState({
                            ripples: this.state.ripples.concat({
                                id: e.timeStamp,
                                opacity: 1,
                                position: [
                                    e.clientX - rect.left - radius,
                                    e.clientY - rect.top  - radius
                                ],
                                radius: radius
                            })
                        })
                    }
                },
                ... (disabled ? {disabled} : {}),
                ... props
            }
        )
    }
}
