import React from "react";

export default class Home extends React.Component {
    componentDidMount() {
        console.log(document.cookie);
        fetch("/api/user")
            .then(result => {
                if (result.status === 200) {
                    result.json().then(json => {
                        json.forEach((connection: { type: string; name: string; }) => {
                            if (connection.type === "github") {
                                console.log(connection.name)
                            }
                        })
                    })
                }
            })
            .catch(_ => _)
    }

    render() {
        return (
            <div>
                <h1>Hello, World</h1>
                <a href="/oauth">Login</a>
            </div>
        );
    }
}