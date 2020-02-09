<template>
  <div>
    <v-calendar :attributes="attrs" :key="calKey" is-expanded @dayclick='dayClicked'></v-calendar>
    <div v-if='selectedDay' class='selected-day'>
      <h3>{{ selectedDay.date.toDateString() }}</h3>
      <ul class="selected">
          <li class="selected__li" v-for='attr in selectedDay.attributes' :key='attr.key'>
            <div class="selected__desc" :style="{'border-color': attr.highlight.backgroundColor }" v-if="attr.highlight">
              {{ attr.customData.description }}
            </div>
            <div class="selected__desc" :style="{'border-color': attr.bar.backgroundColor }" v-if="attr.dot">
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
  <!-- <v-calendar
    :attributes="attrs"
    :key="calKey"
    is-expanded>
    <div
      slot="day-popover"
      slot-scope="{ day, dayTitle, attributes }">
      <div class="text-xs text-gray-300 font-semibold text-center">
        {{ dayTitle }} abcd
      </div>
      <v-popover-row
        v-for="attr in attributes"
        :key="attr.key"
        :attribute="attr">
        {{ customData.description }}
      </v-popover-row>
    </div>
  </v-calendar> -->
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
      console.log('click', day)
      this.selectedDay = day
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
</style>
