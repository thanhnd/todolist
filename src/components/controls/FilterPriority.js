import React, { Component } from 'react';

class FilterPriority extends Component {
    onChange = (event) => {
        this.props.filterPriority(event.target.value)
    }

    render() {
        return (
            <div className="form-group text-left">
                <label>Độ ưu tiên</label>
                <select className="form-control" onChange={this.onChange}>
                    <option className="font-weight-bold" value="">Tất cả</option>
                    <option className="text-info font-weight-bold" value={3}>Thấp</option>
                    <option className="text-success font-weight-bold" value={2}>Trung bình</option>
                    <option className="text-danger font-weight-bold" value={1}>Cao</option>
                </select>
            </div>
        );
    }
}

export default FilterPriority;