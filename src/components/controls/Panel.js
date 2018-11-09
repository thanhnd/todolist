import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import FilterProgress from './FilterProgress';
import FilterLabel from './FilterLabel';
import FilterPriority from './FilterPriority';
import Sort from './Sort';

class Panel extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="avatar" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>
                <AddNewTask initializeTask={this.props.initializeTask} showAddNewTask={this.props.showAddNewTask}/>
                {/* Filter */}
                <div className="px-3">
                    <FilterProgress filterProgress={this.props.filterProgress} />
                    <FilterLabel filterLabel={this.props.filterLabel} />
                    <FilterPriority filterPriority={this.props.filterPriority} />
                    <Sort />
                </div>
            </div>
        );
    }
}

export default Panel;