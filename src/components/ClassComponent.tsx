import { Component } from "react";

type Prop = {
    value: number
}

class ClassComponent extends Component<Prop> {
    render() {
        return(
            <p>{this.props.value}</p>
        )
    }
}

export default ClassComponent;