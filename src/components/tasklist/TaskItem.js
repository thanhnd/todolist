import React, { Component } from 'react';

class TaskItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.editStatus(this.state.status, this.props.task)
        })
    }

    render() {
        let priority = {
            1: "Cao",
            2: "Trung Bình",
            3: "Thấp"
        }

        let priorityColor = {
            1: "danger",
            2: "warning",
            3: "info"
        }

        let status = {
            1: "fa fa-anchor mr-2",
            2: "fa fa-spinner mr-2",
            3: "fa fa-check-square-o mr-2",
            4: "fa fa-trash-o mr-2",

        }
        let labelColor = {
            "Frontend": "#389E0D",
            "Backend": "#722ED1",
            "API": "#13C2C2",
            "Issue": "#CF1322",

        }
        let { task, index } = this.props
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {
                        task.labelArr.map((label, index) => {
                            return <i
                                key={index}
                                className="fa fa-circle"
                                style={{ color: labelColor[label] }} />
                        })
                    }

                </td>
                <td className={`text-${priorityColor[task.priority]} font-weight-bold text-center`}>{priority[task.priority]}</td>
                <td className="text-center">
                    {
                        task.memberIDArr.map((user, index) => {
                            return <img
                                key={index}
                                src={`./img/${user}.jpg`}
                                className="user"
                                alt="" />
                        })
                    }
                </td>
                <td className="text-center d-flex align-items-center">
                    <button type="button" className="btn btn-outline-primary" 
                        data-toggle="modal"
                        data-target="#modalTask"
                        onClick={this.props.editTask.bind(this, task)}>Sửa</button>
                    <div className="form-group ml-2 mt-3">
                        <select className="form-control" name="status" defaultValue={task.status} onChange={this.onChange}>
                            <option>Chọn trạng thái</option>
                            <option value="1">Chưa bắt đầu</option>
                            <option value="2">Đang tiến hành</option>
                            <option value="3">Đã hoàn thành</option>

                        </select>

                    </div>
                </td>
                <td className="text-center">
                    <i className={status[task.status]} />
                </td>
            </tr>
        );
    }
}

export default TaskItem;