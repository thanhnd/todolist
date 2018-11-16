import React, { Component } from "react";
import TaskItem from "./TaskItem";
import * as Constant from "../../constants/ConstantControl"

class TaskList extends Component {

    onChange = (event) => {
        this.props.search(event.target.value)
    }

    compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      

    render() {
        let {data, filterType, filterStatus, filterLabel, filterPriority, sort, filterString} = this.props
        let tasks = []
        switch(filterType) {
            case Constant.FILTER_STATUS:
            
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

            case Constant.FILTER_LABEL:
                if(!filterLabel) {
                    tasks = data
                    break
                }
                for (let task of data) {
                    if(task.labelArr.includes(filterLabel)) {
                        
                        tasks.push(task)
                    }
                }

            break;

            case Constant.FILTER_PRIORITY:
            
                if(!filterPriority) {
                    tasks = data
                    break
                }
                for (let task of data) {
                    if(parseInt(task.priority) === parseInt(filterPriority)) {
                        
                        tasks.push(task)
                    }
                }

            break;

            case Constant.FILTER_STRING:
            
                if(!filterString) {
                    tasks = data
                    break
                }
                data.filter((task) => {
                    if(task.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
                        tasks.push(task)
                        
                    }

                    return 1
                })

            break;


            default:
                tasks = data
        }
    
        let sortTasks = [...tasks]
        if(sort === Constant.SORT_ASC) {
            sortTasks.sort(this.compare)
        } else if(sort === Constant.SORT_DESC) {
            sortTasks.reverse(this.compare)
        } else {
            sortTasks = [...tasks]
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
                                    onChange = {this.onChange}
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
                            {sortTasks.map((task, index) => {
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
