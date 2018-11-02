import React, { Component } from 'react'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            priority: "-1",
            memberIDArr: [],
            labelArr: []
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    memberChange = (newMembers) => {
        this.setState({
            memberIDArr: newMembers
        });
    }

    labelChange = (newLabels) => {
        this.setState({
            labelArr: newLabels
        });
    }

    render() {
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <form>
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm công việc</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label >Tên công việc:</label>
                                    <input type="text" className="form-control" id="taskName" name="name" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Mô tả:</label>
                                    <textarea className="form-control" rows={2} id="description" name="description" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Độ ưu tiên:</label>
                                    <select className="form-control" id="priority" name="priority" onChange={this.onChange}>
                                        <option value="-1">Chọn độ ưu tiên</option>
                                        <option value="3">Thấp</option>
                                        <option value="2">Trung bình</option>
                                        <option value="1">Cao</option>
                                    </select>
                                </div>
                                <label >Người thực hiện:</label>

                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="memberIDArr"
                                    value={this.state.memberIDArr}
                                    onChange={this.memberChange}>

                                    <label><Checkbox value="user_1" />Nguyen Van A</label>
                                    <label><Checkbox value="user_2" />Nguyen Van B</label>
                                    <label><Checkbox value="user_3" />Nguyen Van C</label>
                                    <label><Checkbox value="user_4" />Nguyen Van D</label>
                                    <label><Checkbox value="user_5" />Nguyen Van D</label>
                                </CheckboxGroup>

                                <label>Nhãn:</label>
                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="labelArr"
                                    value={this.state.labelArr}
                                    onChange={this.labelChange}>

                                    <label><Checkbox value="Frontend" />Frontend</label>
                                    <label><Checkbox value="Backend" />Backend</label>
                                    <label><Checkbox value="API" />API</label>
                                    <label><Checkbox value="Issue" />Issue</label>
                                </CheckboxGroup>

                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Thê</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;