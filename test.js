var a = {
  init() {
    this.s = 'sss'

    console.log(this)
    console.log(a)
    console.log(b)
  }
}
var b = {
  key: '23456i'
}
a.init.call(b)