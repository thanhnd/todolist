import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        let {data, filterType, filterStatus} = this.props
        let tasks = []
        switch(filterType) {
            case "FILTER_STATUS":
            console.log(data)
            console.log(filterStatus)
            if(filterStatus === -1 || !filterStatus) {
                tasks = data
                break 
            }
            for (let task of data) {
                console.log(task.status)
                    console.log(filterStatus)
                if(parseInt(task.status) === filterStatus) {
                    
                    tasks.push(task)
                }
            }
            break;

            default:
            tasks = data
        }
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm kiếm công việc"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Công việc</th>
                                <th className="text-center">Nhãn</th>
                                <th className="text-center">Độ ưu tiên</th>
                                <th className="text-center">Người thực hiện</th>
                                <th className="text-center">Xử lý</th>
                                <th className="text-center">Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return <TaskItem 
                                    task={task} 
                                    key={index} 
                                    index={index} 
                                    editTask={this.props.editTask}
                                    editStatus={this.props.editStatus} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;
