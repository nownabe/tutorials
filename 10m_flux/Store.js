import Emitter from "./EventEmitter"

export default class Store extends Emitter {
  constructor(dispatcher) {
    super()

    // Storeがデータを保持している
    this.count = 0

    // StoreはActionを監視する
    // countUp Actionのハンドラを登録する
    dispatcher.on("countUp", this.onCountUp.bind(this))
  }

  getCount() {
    return this.count;
  }

  onCountUp(count) {
    if (this.count == count) return

    // カウントに変更があればComponentに通知する
    this.count = count
    this.emit("countChanged")
  }
}
