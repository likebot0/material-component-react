import createList from "material-components-react/list/create.js"
import classNames from "material-components-react/expansion_panel_list/style.css"
import React      from "react"
import ReactDOM   from "react-dom"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            labelWidth: undefined
        })
    }

    componentDidMount() {
        let e = ReactDOM.findDOMNode(this)

        this.setState({
            labelWidth:
                Array.from(e.parentNode.querySelectorAll(
                    "." + classNames.Host + " > * > :nth-child(1) > :nth-child(1)"
                ))
                    .map(x => x.getBoundingClientRect().width)
                    .reduce((x, y) => Math.max(x, y))
        })
    }

    render() {
        let {
            children
        } = this.props

        let list = createList({})

        return {
            ... list,
            children:
                React.Children.toArray(children).map(x => 
                    React.cloneElement(
                        x,
                        {
                            labelWidth: this.state.labelWidth,
                            ... x.props
                        }
                    )
                )
            ,
            className: [classNames.Host, list.className].join(" ")
        }
    }
}
