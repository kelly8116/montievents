<template>
  <nav class="col">
    <ul>
      <li @click="scrollToEl('calendar')">Calendar</li>
      <li @click="scrollToEl('groups-cards')">Organizations</li>
      <li @click="scrollToEl('about')">About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    scrollToEl: function (elId) {
      let el = document.getElementById(elId)
      // el.scrollIntoView()
      console.log(el)
      this.doScrolling(el, 1000)
      // window.scrollTo(0, el.offsetTop)
      // this.doScrolling(null, '#groups', 2000)
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
    }
  }
}
</script>

<style scoped>
nav {
  align-self: flex-end;
}
ul {
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;
}
li {
  color: #fff;
  cursor: pointer;
  list-style-type: none;
  margin-left: 1em;
}
</style>
