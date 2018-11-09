import React, { Component } from 'react';

class Sort extends Component {
    onChange = (event) => {
        this.props.sort(event.target.value)
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select className="form-control" onChange={this.onChange}>
                    <option value={0}>Từ A đến Z</option>
                    <option value={1}>Từ Z đến A</option>
                </select>
            </div>
        );
    }
}

export default Sort;