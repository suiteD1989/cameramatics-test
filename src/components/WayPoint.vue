<template>
    <div>
        <v-row>
            <v-col :col="12">
                <span>Waypoint Info</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col :col="12">
                <span>Latitude: {{ waypointData.lat }}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col :col="12">
                <span>Longitude: {{ waypointData.lng }}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col :col="12">
                <span>Latitude Direction: {{ waypointData.LAT_DIR }}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col :col="12">
                <span>Longitude Direction: {{ waypointData.LNG_DIR }}</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'WayPoint',
    props: {
        waypointData: {}
    }
}
</script>