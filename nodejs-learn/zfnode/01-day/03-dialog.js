class Dialog {
  // 私有属性放在 类 的最上面
  static title() {
    return '标题'
  }
  constructor () {
    this.tiemout = 3000;
  }

  $show() {
    console.log('$show');
  }

  $hide() {
    console.log('$hide');
  }

  // 私有方法前面添加 static
}



module.exports = Dialog;
