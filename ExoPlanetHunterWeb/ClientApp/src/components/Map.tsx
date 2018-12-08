import * as React from 'react'

import {
  GetConstellationsLines,
  GetStarsMarkers
} from '../service/getConstellations'
import { GeoJsonObject } from 'geojson'
import { Icon, Statistic } from 'semantic-ui-react'
import siderealtime from '../siderealtime/'

import { GetHabitablePlanets, Planet } from '../service/getPlanets'
interface StarMapState {
  constlines: GeoJsonObject
  stars: GeoJsonObject
  longitude: number
  latitude: number
  siderealtime: string
  planets: Array<Planet>
}

export default class Map extends React.Component<any, StarMapState> {
  state = {
    constlines: {} as GeoJsonObject,
    stars: {} as GeoJsonObject,
    longitude: -90,
    latitude: 40,
    siderealtime: '',
    planets: [] as Array<Planet>
  }
  _map?: L.Map
 _isMounted = false;
  async componentDidMount() {
    this._isMounted = true;
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        this.updatetime(position.coords.longitude)
      )
    }
    const { longitude, latitude } = this.state
   const L= require("Leaflet")
    this._map = L.map('map', {
      zoom: 5,
      minZoom: 4,
      worldCopyJump: true,
      center: [latitude, longitude] as L.LatLngExpression
    }) as L.Map
    let constlines = await GetConstellationsLines()
    let stars = await GetStarsMarkers()
    let planets = (await GetHabitablePlanets()) as Array<Planet>
    this._map.on('moveend', () => {
      const { lng, lat } = this._map.getCenter()
      this._isMounted&&this.setState({ longitude: lng, latitude: lat })
    })

    L.tileLayer('/img/tile.png', {}).addTo(this._map)
    this._isMounted&&this.setState({ constlines, planets, stars }, () => this.init())
  }
  componentWillUnmount(){
    this._isMounted = false;
  }

  init = () => {
    const { constlines, planets, stars } = this.state

    const lineStyle = {
      color: '#fff',
      weight: 5,
      opacity: 1
    }
    const L= require("Leaflet")
    L.geoJSON(constlines, {
      style: lineStyle,
      onEachFeature: this.onEachFeature
    } as any).addTo(this._map)
    const planetIcon = L.icon({
      iconUrl: '/img/ic_launcher_web.png',
      iconSize: [60, 60]
    })
    planets.map(planet => {
      const planetmarker = L.marker(
        [
          planet.coordinate.latitude,
          planet.coordinate.longitude
        ] as L.LatLngExpression,
        { icon: planetIcon }
      )
        .bindTooltip(planet.name, { direction: 'left' })
        .openTooltip()
        .addTo(this._map)
      planetmarker.addEventListener('click', () =>
        this.props.history.push({
          pathname: `system/${planet.star.name}`,
          state: { star: planet.star }
        })
      )
    })

    const starIcon = L.icon({
      iconUrl: '/img/smarker.png',
      iconSize: [60, 60]
    })
 
    L.geoJSON(stars, {
      pointToLayer: (feature:any, latlng:any) => {
        return L.marker(latlng, { icon: starIcon })
          .bindTooltip(feature.properties.name, { direction: 'left' })
          .openTooltip()
          .addTo(this._map)
      }
    }).addTo(this._map)
  }
  updatetime = (position: number) => {
    this.setState({ siderealtime: siderealtime(position) })
    setInterval(() => {
      this.setState({ siderealtime: siderealtime(position) })
    }, 60000)
  }
  onEachFeature = (feature: any, layer: any) => {
    let options = {
      radius: 100,
      fillColor: 'white',
      color: 'white',
      weight: 0,
      opacity: 0,
      fillOpacity: 0
    }
    const coord = feature.geometry.coordinates
    const L= require("Leaflet")
    if (feature.properties.constellation != null) {
      const marker = L.circleMarker([coord[0][1], coord[0][0]], options)
        .addTo(this._map)
        .bindTooltip(feature.properties.constellation, {
          permanent: true,
          direction: 'left'
        })
        .openTooltip()
      marker.addEventListener('click', () =>
        this.props.history.push({
          pathname: `constellation/${feature.properties.constellationid}`,
          state: { constellation: feature.properties.constellationid }
        })
      )
    }
    options = {
      radius: 6,
      fillColor: 'white',
      color: 'white',
      weight: 1,
      opacity: 1,
      fillOpacity: 1
    }
    coord.map((p: any) => {
      L.circleMarker([p[1], p[0]], options).addTo(this._map)
    })
  }

  render() {
    const { longitude, latitude, siderealtime } = this.state
    return (
      <React.Fragment>
        <Statistic.Group widths="three">
          <Statistic>
            <Statistic.Value>
              <Icon name="compass outline" />
              {Math.round(100 * latitude) / 100}
            </Statistic.Value>
            <Statistic.Label>{'Declination'}</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="clock" />
              {siderealtime}
            </Statistic.Value>
            <Statistic.Label>{'Sidereal time'}</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="compass" />
              {Math.round(100 * (12 + (-1 * longitude) / 15)) / 100}
            </Statistic.Value>
            <Statistic.Label>{'Right ascension'}</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <div id="map" />
      </React.Fragment>
    )
  }
}
