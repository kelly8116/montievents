<template>
  <div>
    <v-calendar :attributes="attrs" :key="calKey" is-expanded @dayclick='dayClicked'></v-calendar>
    <div id="cal-info">
      <div v-if='selectedDay' class='selected-day'>
        <h3>{{ selectedDay.date.toDateString() }}</h3>
        <ul class="selected">
            <li class="selected__li" v-for='attr in selectedDay.attributes' :key='attr.key'>
              <div class="selected__desc" :style="{'border-color': attr.highlight.backgroundColor }" v-if="attr.highlight">
                {{ attr.customData.description }}
              </div>
              <div class="selected__desc" :style="{'border-color': attr.bar.backgroundColor }" v-if="attr.bar">
                <h4>{{ attr.customData.group }}</h4>
                <div v-html="withBrTags(attr.customData.description)"></div>
                <p>
                  <a class="selected__link" :href="['https://www.facebook.com/' + attr.key]" target="_bank">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"></font-awesome-icon> <span>View Event</span>
                  </a>
                </p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cal',
  props: ['attrs', 'calKey'],
  data () {
    return {
      selectedDay: null
    }
  },
  methods: {
    dayClicked (day) {
      this.selectedDay = day
      this.scrollToEl('cal-info')
    },
    doScrolling: function (element, duration) {
      let startingY = window.pageYOffset
      let diff = element.offsetTop - startingY
      let start

      // Bootstrap our animation - it will get called right before next frame shall be rendered.
      window.requestAnimationFrame(function step (timestamp) {
        if (!start) start = timestamp
        // Elapsed milliseconds since start of scrolling.
        let time = timestamp - start
        // Get percent of completion in range [0, 1].
        let percent = Math.min(time / duration, 1)

        window.scrollTo(0, startingY + diff * percent)

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    },
    scrollToEl: function (elId) {
      let el = document.getElementById(elId)
      this.doScrolling(el, 800)
    },
    withBrTags: function (str) {
      str = str.replace(/(?:\r\n|\r|\n)/g, '<br>')
      return str
    }
  }
}
</script>

<style>
.selected {
  list-style-type: none;
  padding-left: 0;
}
.selected__li {
  display: flex;
  margin-bottom: 1vw;
}
.selected__li:last-child {
  margin-bottom: 0;
}
.selected__desc {
  border-left: 4px solid transparent;
  padding-left: 1.5vw;
}
.selected__link {
  text-decoration: none;
}
.selected__desc p:last-child {
  margin-bottom: 0;
}
.selected-day {
  word-break: break-all;
}
.c-title {
  color: #084CA1;
  font-family: 'Heebo', sans-serif;
  font-size: 1.5em !important;
  font-weight: 800 !important;
  text-transform: uppercase;
}
.c-weekday {
  height: 30px;
}
.c-day {
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
}
.c-day-content-wrapper {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
h4 {
  margin-top: 0;
}
</style>
