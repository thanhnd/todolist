import React, { Component } from 'react';

class FilterProgress extends Component {
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li 
                        onClick={this.props.filterProgress.bind(this, -1)}>
                        <i/>Tất cả</li>
                    <li className="py-1 display-5 lead" 
                        onClick={this.props.filterProgress.bind(this, 1)}>
                        <i className="fa fa-anchor mr-2" />Chưa bắt đầu</li>
                    <li className="py-1 display-5 lead" 
                        onClick={this.props.filterProgress.bind(this, 2)}>
                        <i className="fa fa-spinner mr-2" />Đang tiến hành</li>
                    <li className="py-1 display-5 lead"
                        onClick={this.props.filterProgress.bind(this, 3)}>
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành</li>
                    <li className="py-1 display-5 lead"
                        onClick={this.props.filterProgress.bind(this, 4)}>
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ</li>
                </ul>
            </div>
        );
    }
}

export default FilterProgress;