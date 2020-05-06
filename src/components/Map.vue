<template>
    <div class="map-container">
       <GmapMap
        :center="{ lat: 53.566473333333334, lng:6.123781666666668 }"
        :zoom="12"
        map-type-id="terrain"
        class="google-map"
        ref="mapRef" 
        >
            <gmap-polyline 
                v-bind:path.sync="mapPos" 
                v-bind:options="{ strokeColor:'#008000'}">
            </gmap-polyline>
            <GmapMarker
                v-for="(mark, index) in wayPoint"
                :key="index"
                :position="mark"
                :animation="2"
                :draggable="false"
            >     
                <gmap-info-window 
                v-if="toggleInfo">
                    <WayPoint :waypointData="mark"/>
                </gmap-info-window>
            </GmapMarker>
        </GmapMap> 
        <v-switch
            v-model="autoPan"
            :label="'Auto Pan'"
        ></v-switch>
        <v-switch
            v-model="toggleInfo"
            :label="'Marker Info'"
        ></v-switch>
    </div>
</template>

<script>

import WayPoint from '@/components/WayPoint.vue';

export default {
    name: 'Map',
    components: {
        WayPoint
    },
    data() {
        return {
            mapPos: [],
            index: 0,
            displaySpeed: 50,
            wayPoint: [],
            autoPan: true,
            toggleInfo: true
        }
    },
    props: {
        trackingData: Array
    },
    methods: {
        /**
         * @param {pos} Object - Formats the object input to an object that is
         * ready to be passed to the Gmap component
         */
        createCoOrd(pos) {
            const posObj = {
                lat: pos.LAT,
                lng: pos.LNG,
                LAT_DIR: pos.LATDIR,
                LNG_DIR: pos.LNGDIR
            }
            return posObj;
        },
        /**
         * Update Gmap with position markers for each point included in the parsed tracking data
         */
        drawMap() {
            setInterval(() => {  
                this.index++;
                let newPos = this.trackingData[this.index];
                if(newPos) {
                    this.mapPos.push(this.createCoOrd(newPos));
                    if(this.autoPan) {
                        this.$refs.mapRef.$mapPromise.then((map) => {
                            map.panTo(this.createCoOrd(newPos))
                        })
                    }
                    // Add a waypoint marker ever 100 increments 
                    if(this.index % 100 == 0 || this.index == 2) {
                        this.wayPoint.push(this.createCoOrd(newPos));
                    }
                } else {
                    return;
                }         
            }, this.displaySpeed);
        }
    },
    mounted() {
        this.drawMap();
    }
}
</script>

<style lang="scss" scoped>
    .map-container {
        padding: 4em 0;
        .google-map {
            width: 100%;
            height: 75vh;
        }
    }
</style>