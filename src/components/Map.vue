<template>
  <div id="map"></div>
</template>

<script>
import WebMap from '@arcgis/core/WebMap'
// import MapView from '@arcgis/core/views/MapView'
import SceneView from '@arcgis/core/views/SceneView'
export default {
  name: 'Map',
  props: {
    msg: String
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      var map = new WebMap({
        basemap: 'streets-navigation-vector',
        ground: 'world-elevation' // show elevation
      })
      // eslint-disable-next-line no-new
      new SceneView({
        container: 'map',
        map: map,
        camera: {
          position: {
            // observation point
            x: 100,
            y: 20,
            z: 5000000 // altitude in meters
          },
          tilt: 15 // perspective in degrees
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
