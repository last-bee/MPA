require('./list.scss');
const Loading = require('./loading.gif')
// const Test = require('./test.jpg')
import { getScrollEventTarget } from './scroll'
export default {
  name: 'c-list',
  data() {
    return {
      msg: 'hello world',
      scroller: null
    }
  },
  props: {
    offset: {
      type: Number,
      default: 40
    },
    value: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value() {
      console.log('----------')
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$el)
      this.scroller = getScrollEventTarget(this.$el)
      // console.log(this.scroller)
      this.scroller.addEventListener('scroll', this.check)
    })
  },
  methods: {
    check() {
      console.log(this.value, this.finished)
      this.$nextTick(() => {
        if(this.value || this.finished) {
          return
        }
        const {$el: el, scroller, offset } = this;
        let scrollerRect;
        console.log(scroller.getBoundingClientRect())
        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }

        const scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        const placeholderRect = this.$refs.placeholder.getBoundingClientRect();
        // console.log(placeholderRect.bottom- scrollerRect.bottom, offset)
        if (!scrollerHeight) {
          return false;
        }

        let isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;

        // console.log(isReachEdge)
        if(isReachEdge) {
          this.$emit('input', true);
          this.$emit('load');
        }
      })
    },
  },
  render() {
    return (
      <div class="c-list">
        {this.$slots.default}
        {
          this.value && (
            <div class="loading">
              <img src={Loading} />加载中...
            </div>
          )
        }
        <div ref="placeholder"></div>
      </div>
    )
  }
}