import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { readTasks } from '../actions'

class TasksIndex extends Component {

  // // コンポーネントがマウントされた時にフックされる
  componentDidMount() {
    // タスクの一覧取得（APIを叩く）
    this.props.readTasks()
  }

  // renderEvents() {
  //   return _.map(this.props.events, event => (
  //     <TableRow key={event.id}>
  //       <TableRowColumn>{event.id}</TableRowColumn>
  //       <TableRowColumn>
  //         <Link to={`/events/${event.id}`}>
  //           {event.title}
  //         </Link>
  //       </TableRowColumn>
  //       <TableRowColumn>{event.body}</TableRowColumn>
  //     </TableRow>
  //   ))
  // }

  render() {
    // const style = {
    //   position: "fixed",
    //   right: 12,
    //   bottom: 12
    // }

    return (
      <React.Fragment>
        <div>
          test
        </div>
      </React.Fragment>
    )
  }
}

// ここでstoreから状態を取り出せるようにする
// const mapStateToProps = state => ({ events: state.events })
// ここでstoreからアクションを取り出せるようにする
const mapDispatchToProps = ({ readTasks })
// 下記が元々の。上はシンタックスシュガー
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(null, mapDispatchToProps)(TasksIndex)

// export default App;
