import React, { Component } from 'react';

class FilterLabel extends Component {
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">Nhãn
                    
                    <li className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "Frontend")}>
                        <i className="fa fa-circle mr-2" />Frontend</li>
                    <li className="py-1 display-5 lead"  onClick={this.props.filterLabel.bind(this, "Backend")}>
                        <i className="fa fa-circle mr-2"/>Backend</li>
                    <li className="py-1 display-5 lead"  onClick={this.props.filterLabel.bind(this, "API")}>
                        <i className="fa fa-circle mr-2"/>API</li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "Issue")}>
                        <i className="fa fa-circle mr-2"/>Issue</li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "")}>
                        <i />Tất cả</li>
                </ul>
            </div>
        );
    }
}

export default FilterLabel;