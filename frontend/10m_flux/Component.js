import React from "react"
import ActionCreator from "./ActionCreator"
import Store from "./Store"
import EventEmitter from "./EventEmitter"

var dispatcher = new EventEmitter()
var action = new ActionCreator(dispatcher)
var store = new Store(dispatcher)

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: store.getCount() }

    // Storeの変更を監視する
    store.on("countChanged", () => {
      this.onCountChanged()
    })
  }

  // countChangedイベントのコールバック
  onCountChanged() {
    this.setState({count: store.getCount()})
  }

  // onClickイベントのハンドラ
  countUp() {
    // countUp Actionを実行する
    // データを流す
    action.countUp(this.state.count)
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp.bind(this)}>Count Up</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}
