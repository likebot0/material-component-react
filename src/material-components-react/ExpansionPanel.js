import React        from "react"
import ReactDOM     from "react-dom"
import createCard   from "material-components-react/card/create.js"
import MaterialIcon from "material-components-react/MaterialIcon.js"
import RippleEffect from "material-components-react/RippleEffect.js"
import classNames   from "material-components-react/expansion_panel/style.css"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            height: undefined
        })
    }

    componentDidMount() {
        let e = ReactDOM.findDOMNode(this)

        let contentRect = e.children[1].getBoundingClientRect()

        this.setState({
            height: contentRect.height
        })
    }

    render() {
        let {
            children,
            close = () => {},
            disabled,
            hintText,
            labelText,
            labelWidth,
            location,
            open = () => {},
            opened,
            value
        } = this.props

        let card = createCard({});

        let elevation = elevate({elevation: 2})

        return {
            ... card,
            ... elevation,
            className:
                []
                    .concat(
                        [classNames.Host],
                        disabled ? [classNames.Disabled] : [],
                        opened   ? [classNames.Opend] : [],
                        [card.className]
                        [elevation.className]
                    )
                    .join(" ")
            ,
            children:
                <>
                    <RippleEffect {... Object.assign(
                        disabled === undefined ? {} : {disabled},
                        disabled ? {}
                      : opend    ? {onClick: _ => close()}
                      :            {onClick: _ => open()}
                    )}>
                        <div
                            style={{
                                minWidth:
                                    labelWidth ? labelWidth + "px"
                                :              undefined
                            }}
                        >
                            {labelText}
                        </div>
                        <div>
                            {
                                value == undefined ? hintText
                              : selected           ? hintText
                              :                      value
                            }
                        </div>
                        <MaterialIcon
                            className={classNames.Icon}
                        >
                            {
                                disabled ? ""
                              :            "keyboard_arrow_down"
                            }
                        </MaterialIcon>
                        </RippleEffect>
                        <div
                            children={children}
                            style={{
                                height:
                                    ! this.state.height ? undefined
                                : disabled            ? "0"
                                : selected            ? this.state.height + "px"
                                :                       "0"
                        }}
                    />
                </>
            ,
            type: "li"
        }
    }
}
