<template>
  <div>
    <div id="fb-root"></div>
    <main>
      <div class="bg-cal">
        <div class="bkt bg-gray">
          <div id="calendar" class="container">
            <div class="row">
              <div class="col col--2-3">
                <template v-if="calKey">
                  <cal :attrs="calAttrs" :key="calKey"></cal>
                </template>
                <!-- <v-calendar
                  :attributes="calAttrs"
                  is-expanded>
                </v-calendar> -->
              </div>
              <div id="groups" class="col col--1-3">
                <div class="groups bg-gray">
                  <h2>Organizations</h2>
                  <ul class="groups__ul">
                    <li v-for="(group, i) in groupData[0]" :key="i" class="groups__li">
                      <cal-groups :group="group" :entities="entitiesJson"/>
                      <!-- <span @click="groupToggle">{{ entity.key }}</span> -->
                    </li>
                  </ul>
                  <!-- <cal-groups /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bkt bkt--white">
        <div id="groups-cards" class="container">
          <div class="row">
            <div class="col col--full">
              <h2>Our Organizations</h2>
            </div>
          </div>
          <div class="row">
            <ul class="cards__ul">
              <li v-for="(group, i) in groupData[0]" :key="i" class="cards__li">
                <div class="cards__inner">
                  <div class="cards__imgWrap">
                    <!-- {{ group }} -->
                    <img :src="group.picture.data.url">
                  </div>
                  <h2>{{ group.name }}</h2>
                  <p>{{ group.description }}</p>
                  <div class="cards__links">
                    <p>
                      <a class="cards__link" :href="['tel:' + group.phone]" v-if="group.phone">
                        <font-awesome-icon icon="mobile-alt"></font-awesome-icon> <span>{{ group.phone }}</span>
                      </a>
                      <a class="cards__link" :href="group.website" target="_blank">
                        <font-awesome-icon icon="globe"></font-awesome-icon> <span>Visit Website</span>
                      </a>
                      <a class="cards__link" :href="group.link" target="_bank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"></font-awesome-icon> <span>View Facebook Page</span>
                      </a>
                    </p>
                  </div>
                </div>
                <!-- <cal-groups :group="entity"/> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>About MontiEvents</h2>
              <p>
                Welcome to the Monticello Events website, where you can find details on upcoming events happening in and around Monticello, Iowa.
              </p>
              <p>
                This page contains information relating to nonprofitmaking community events of interest to youth, families and adults. A great resource for people who want to be in-the-know about things to do and keep current with ongoing activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import facebook from 'facebook-api'
import CalGroups from './CalGroups'
import Entities from '@/json/entities.json'
// import {format} from 'date-fns'
import _ from 'lodash'
import Cal from './Cal'
// import vueFb from '../plugins/fb-sdk'

export default {
  name: 'Calendar',
  data () {
    return {
      calKey: null,
      entitiesJson: Entities,
      entityIds: [],
      entityIndex: 1,
      entityObj: [],
      groupData: [],
      // calAttrs: []
      calAttrs: []
    }
  },
  created () {
    this.calAttrs.push({
      key: 'Today',
      dates: new Date(),
      highlight: {
        backgroundColor: '#fbecab'
      },
      customData: {
        group: '',
        description: 'Today'
      }
    })
    // console.log(this.entities)
    _.each(this.entitiesJson, (obj, k) => {
      this.entityIds.push(obj.id)
      // this.getData(obj)
    })
    this.entityIds = this.entityIds.join(', ')
    // console.log(this.entitiesJson)
    this.getData()
    // console.log(this.entityIds)

    // for (let k in this.entities) {
    //   console.log(k)
    //   this.getData(this.entities[k])
    // }
  },
  beforeMount () {
    console.log('before mount')
  },
  mounted () {
    this.setCalData()
    console.log('mounted')
  },
  methods: {
    // groupToggle: function (target) {
    //   console.log(target)
    // },
    getData: function () {
      // let datesArr = []
      let fields = 'id,name,link,website,about,description,hours,phone,picture.type(large),cover,events'
      let vm = this

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '2209799002607600',
          cookie: true,
          oauth: true,
          xfbml: true,
          version: 'v3.2'
        })
        window.FB.api(
          '/?ids=' + vm.entityIds,
          'GET',
          {
            'access_token': process.env.FB_ACCESS_TOKEN,
            // 'access_token': 'EAAfZAzOyTTZCABAN9yiQnthSUerPC42Tb75ZBa4fb4fWmFdN5hKCRPEn71Y1QU5rGtx7Ps2hz5Ub1mke1pzwsj6EZAFcpq0gATZAnDFFnHFmPmOc6rk5PXdXoOewTaOCnVYMs2VExPBoOAVEgDxolM2AM8JnqyNWDhdaf067COCB941e8XxPDBYPyZCyBSTsz6TC2pCQQ0iQZDZD',
            'fields': fields
            // 'since': params
          },
          function (response) {
            vm.groupData.push(response)
            // console.log('FB Initiated', vm.groupData)
          }
        )
      }
    },
    setCalData: function () {
      for (let data in this.groupData[0]) {
        let events = this.groupData[0][data].events
        let group = this.groupData[0][data]
        if (events) {
          for (let i = 0; i < events.data.length; i++) {
            this.calAttrs.push({
              key: events.data[i].id,
              dates: new Date(events.data[i].start_time),
              bar: {
                backgroundColor: this.entitiesJson[group.id].color
              },
              // popover: {
              //   label: events.data[i].name
              // },
              customData: {
                group: this.groupData[0][data].name,
                description: events.data[i].description
              }
            })
          }
        }
      }
      // this.calAttrs.push({
      //   key: 'Today',
      //   dates: new Date(),
      //   highlight: {
      //     backgroundColor: '#fbecab'
      //   },
      //   popover: {
      //     label: 'Today'
      //   },
      //   customData: 'Hello from today'
      // })
      console.log(this.calAttrs)
      this.calKey = Math.random()
    }
  },
  watch: {
    groupData: function (newValue, oldValue) {
      // console.log(this.groupData)
      this.setCalData()
      this.$forceUpdate()
    }
  },
  components: {
    Cal,
    CalGroups
  }
}
</script>
