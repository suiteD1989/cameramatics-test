<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="trackingData"
            :items-per-page="30"
            class="elevation-1"
        ></v-data-table>
    </div>
</template>
<script>
export default {
    name: 'DataTable',
    props: {
        trackingData: Array
    },
    data() {
        return {
            headers: [
                { 
                    text: "Time (UTC)", 
                    value: "UTCTIME" 
                },
                { 
                    text: "Timezone Offset", 
                    value: "TZO" 
                },
                { 
                    text: "DSTO", 
                    value: "DSTO" 
                },
                { 
                    text: "GPS Time", 
                    value: "GPSTIME" 
                },
                { 
                    text: "GPS Status", 
                    value: "GPSSTATUS" 
                },
                { 
                    text: "Latitude", 
                    value: "LAT" 
                },
                { 
                    text: "Latitude Direction", 
                    value: "LATDIR" 
                },
                { 
                    text: "Longitude", 
                    value: "LNG" 
                },
                { 
                    text: "Longitude Direction", 
                    value: "LNGDIR" 
                },
                { 
                    text: "GPS Speed", 
                    value: "GPSSPEED" 
                },
                { 
                    text: "GPS Course", 
                    value: "GPSCOURSE" 
                },
                { 
                    text: "DIP State", 
                    value: "DIPSTATE" 
                },
                { 
                    text: "ACC State", 
                    value: "ACCSTATE" 
                }
            ]
        }
    }
}
</script>