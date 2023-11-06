import { Component } from "react";

type Props = {
    title?: string
    children: JSX.Element | JSX.Element[]
}

export class PageSection extends Component<Props>
{
    render() {
        const { title, children } = this.props
        return (
            <section>
                { title
                    ? <h1>{title}</h1>
                    : null
                }
                {children}
            </section>
        )
    }
}