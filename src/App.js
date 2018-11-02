import React, { Component } from 'react';
import './App.css';

import Panel from './components/controls/Panel'
import TaskList from './components/tasklist/TaskList'
import Modal from './components/modals/Modal'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
                    <div className="container-fluid">
                        <div className="row">
                            {/* PANEL */}
                            <Panel />

                            {/* DISPLAY */}
                            <TaskList />
                        </div>
                    </div>
                    
                    {/* The Modal */}
                    <Modal />
                </div>
            </div>
        );
    }
}

export default App;
