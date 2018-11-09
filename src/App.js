import React, { Component } from 'react';
import './App.css';

import Panel from './components/controls/Panel'
import TaskList from './components/tasklist/TaskList'
import Modal from './components/modals/Modal'
import tasklist from './data/TasksData'

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            isAddNewTask: true,
            task:{},
            filterType: "",
            filterStatus: "",
            filterLabel: "",
            filterPriority: "",
            sort: 0
        }
    }
    
    initializeTask = () => {
        console.log("Task")
    }

    showAddNewTask = () => {
        console.log("showAddNewTask")
        this.setState({
            isAddNewTask: true,
            task: []
        })
    }

    filterStatus = (status)  => {
        this.setState({
            filterType: "FILTER_STATUS",
            filterStatus: status
        })
    }

    filterLabel = (label)  => {
        this.setState({
            filterType: "FILTER_LABEL",
            filterLabel: label
        })
    }

    filterPriority = (priority)  => {
        console.log(priority)
        this.setState({
            filterType: "FILTER_PRIORITY",
            filterPriority: priority
        })
    }

    sort = (sort) => {
        this.setState({
            sort
        })
    }

    addNewTask = (task) => {
        
        this.setState({isAddNewTask: true, tasks: [...this.state.tasks, task]}, () => {
            console.log(this.state.tasks)
            this.cacheTaskList(this.state.tasks)
        })
    }

    editTask = (task) => {
        this.setState({
            isAddNewTask: false,
            task: task
        })
    }

    updateTask = (task) => {
        console.log(task)
        let tasks = this.state.tasks
        
        for(let i in tasks) {
            if(task.id === tasks[i].id) {
                tasks[i] = task
            }
        }

        this.setState({tasks}, () => this.cacheTaskList(this.state.tasks)) 
    }

    editStatus = (status, task) => {
        console.log(task)
        let tasks = this.state.tasks
        
        for(let i in tasks) {
            if(task.id === tasks[i].id) {
                tasks[i].status = status
            }
        }

        this.setState({tasks}, () => this.cacheTaskList(this.state.tasks)) 
    }
    
    componentWillMount() {
        this.cacheTaskList(tasklist)
    }

    cacheTaskList(data) {
        localStorage.setItem("tasks", JSON.stringify(data));
    }

    componentDidMount(){
        if (localStorage.hasOwnProperty("tasks")) {

            let tasklist = localStorage.getItem("tasks");

            // parse the localStorage string and setState
            try {
                tasklist = JSON.parse(tasklist);
                this.setState({tasks: tasklist})
                
            } catch (e) {
            }
        }
    }
    
    render() {
        return (
            <div className="App">
                <div>
                    <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
                    <div className="container-fluid">
                        <div className="row">
                            {/* PANEL */}
                            <Panel 
                                initializeTask={this.initializeTask} 
                                showAddNewTask={this.showAddNewTask}
                                filterProgress={this.filterStatus}
                                filterLabel={this.filterLabel}
                                filterPriority={this.filterPriority}
                                sort={this.sort}/>

                            {/* DISPLAY */}
                            <TaskList 
                                data={this.state.tasks} 
                                editTask={this.editTask} 
                                editStatus={this.editStatus}
                                filterType={this.state.filterType}
                                filterStatus={this.state.filterStatus}
                                filterLabel={this.state.filterLabel}
                                sort={this.state.sort} />
                        </div>
                    </div>
                    
                    {/* The Modal */}
                    <Modal 
                        addNewTask={this.addNewTask}
                        updateTask={this.updateTask} 
                        task={this.state.task} 
                        isAddNewTask={this.state.isAddNewTask} />
                </div>
            </div>
        );
    }
}

export default App;
