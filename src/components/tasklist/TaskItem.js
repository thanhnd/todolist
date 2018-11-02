import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">1</td>
                <td className="text-center">Soạn ReactJS</td>
                <td className="text-center">
                  <i className="fa fa-circle" style={{color: '#389E0D'}} />
                  <i className="fa fa-circle" style={{color: '#13C2C2'}} />
                </td>
                <td className="text-danger font-weight-bold text-center">Cao</td>
                <td className="text-center">
                  <img src="./img/user_2.jpg" className="user" alt="" />
                  <img src="./img/user_3.jpg" className="user" alt="" />
                </td>
                <td className="text-center d-flex align-items-center">
                  <button type="button" className="btn btn-outline-primary">Sửa</button>
                  <div className="form-group ml-2 mt-3">
                    <select className="form-control">
                        <option>Chọn trạng thái</option>
                        <option>Chưa bắt đầu</option>
                        <option>Đang tiến hành</option>
                        <option>Đã hoàn thành</option>

                    </select>

                  </div>
                </td>
                <td className="text-center">
                  <i className="fa fa-check-square-o mr-2" />
                </td>
              </tr>
        );
    }
}

export default TaskItem;