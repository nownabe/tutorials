export default class Action {
  constructor(dispatcher) {
    // dispatcherはStoreとの仲介役
    this.dispatcher = dispatcher
  }

  // countUp Action
  countUp(currentCount) {
    // Actionを実行する
    var count = currentCount + 1

    // countUpイベントをStoreに通知する
    this.dispatcher.emit("countUp", count)
  }
}
