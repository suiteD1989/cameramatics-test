<template>
  <v-app>
    <v-container fluid> 
      <v-container>
        <Intro/>
        <Map :trackingData="this.trackingData"/>
      </v-container>
      <v-container>
        <DataTable :trackingData="this.trackingData"/>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>

import binaryData from './api/fetchTracking.js';
import Intro from '@/components/IntroText';
import Map from '@/components/Map';
import DataTable from '@/components/DataTable';

export default {
  name: 'App',
  components: {
    Intro,
    Map,
    DataTable
  },
  data() {
    return {
      dataFiles: [
        "data/track_2020-04-23T14-25-30.bin",
        "data/track_2020-04-23T14-30-30.bin",
        "data/track_2020-04-23T14-51-29.bin",
        "data/track_2020-04-23T14-46-29.bin",
        "data/track_2020-04-23T14-41-30.bin",
        "data/track_2020-04-23T14-36-20.bin"
      ],
      trackingData: []
    }
  },
  methods: {
    /**
     * Organise tracking data into single array
     */
    sortSampleData(data) {
      data.forEach((sample) => {
        this.trackingData.push(sample)
      })
    },
    /**
     * Fetch data from the data files
     */
    initData() {
      this.dataFiles.forEach((file) => {
        binaryData.fetchData(file)
        .then((res) => {
          this.sortSampleData(res);
        })
      })
    }
  },
  mounted() {
    this.initData();
  }
}
</script>

<style>

</style>
