import React from 'react';

export default class DisplayMessage extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>
                Hello {this.props.term}!,
                    Thank you for clicking through my test.
                </p>

            </div>
        )
    }
}