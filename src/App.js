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
            tasks: []
        }
    }
    
    initializeTask = () => {
        console.log("Task")
    }

    addNewTask = (task) => {
        
        this.setState({tasks: [...this.state.tasks, task]}, () => {
            console.log(this.state.tasks)
            this.cacheTaskList(this.state.tasks)
        })
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
                            <Panel initializeTask={this.initializeTask}/>

                            {/* DISPLAY */}
                            <TaskList data={this.state.tasks}/>
                        </div>
                    </div>
                    
                    {/* The Modal */}
                    <Modal addNewTask={this.addNewTask} />
                </div>
            </div>
        );
    }
}

export default App;
