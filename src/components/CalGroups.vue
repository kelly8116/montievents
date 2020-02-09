<template>
  <!-- <div class="group" :class="{ 'is-active': isActive }" @click="groupToggle"> -->
  <div class="group">
    <div class="checkbox" :style="{'background-color': color }">
      <span class="check"><font-awesome-icon icon="check"></font-awesome-icon></span>
    </div>
    <div class="name">{{ group.name }}</div>
  </div>
</template>

<script>
// import {format} from 'date-fns'
import _ from 'lodash'

export default {
  name: 'CalGroups',
  props: [ 'group', 'entities' ],
  data () {
    return {
      color: '',
      groupData: {},
      groupDataArr: [],
      isActive: true
    }
  },
  created () {
    this.getColor()
    // console.log(this.color)
  },
  methods: {
    groupToggle () {
      this.isActive = !this.isActive
      // if (this.isActive) {
      //   this.groupData = this.groupDataArr
      // } else {
      //   this.groupData = ''
      // }
    },
    getColor () {
      _.each(this.entities, (obj, k) => {
        if (obj.id === this.group.id) this.color = obj.color
      })
    }
  }
}
</script>

<style scoped>
.group {
  align-items: center;
  /* cursor: pointer; */
  display: flex;
}
.checkbox {
  /* border-radius: 50%; */
  display: block;
  flex: 0 0 25px;
  height: 25px;
  position: relative;
  width: 25px;
}
.check {
  color: #ffffff;
  font-size: 1.5em;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: -5px;
  transition: 200ms ease-in;
}
.check svg {
  filter: drop-shadow(1px 1px 2px #000);
}
.is-active .check {
  opacity: 1;
}
/* .is-active .checkbox::after {
  content: "\2713";
  color: #ffffff;
  font-size: 1.5em;
  font-weight: 800;
  text-shadow: 1px 1px 1px rgba(0,0,0,.25),
    -1px 1px 1px rgba(0,0,0,.25),
    1px -1px 1px rgba(0,0,0,.25),
    -1px -1px 1px rgba(0,0,0,.25);
  display: block;
  left: 4px;
  position: absolute;
  top: -8px;
} */
.name {
  line-height: 1em;
  padding-left: 10px;
}
</style>
