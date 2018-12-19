import * as React from 'react'
import { GetPlanetListAsync, Planet } from '../service/getPlanets'
import {
  Card,
  Button,
  Grid,
  Rating,
  Input,
  Dropdown,
  Icon,
  Loader, Dimmer
} from 'semantic-ui-react'

import Paginate from '../common/paginate'
import Svg, { Circle, G, ClipPath, Image, Defs } from 'react-native-svg-web'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'
import { Gradient } from '../styles/radialgradients'

export const getGroupedItems = (posts: Array<any>) => {
  let groupeditems = groupBy(posts, 3)
  let groupedposts = [] as Array<any>
  for (let items of groupeditems) {
    groupedposts.push(row(items))
  }
  return groupedposts
}
const groupBy = (arr: Array<any>, n: number) => {
  var group = []
  for (var i = 0, end = arr.length / n; i < end; ++i)
    group.push(arr.slice(i * n, (i + 1) * n))
  return group
}
const row = (post: any) => (
  <Grid.Row centered columns={4} key={post[0].key}>
    {post}
  </Grid.Row>
)
const options = [
  { key: 'all', text: 'All Planets', value: 'all' },
  { key: 'hab', text: 'Habitable Planets', value: 'hab' }
]

export default class Catalog extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: true,
      top: 30,
      color: '',
      habactive: false,
      searchValue: '',
      planets: [] as Array<Planet>
    }
 
  }
  _isMounted = false;
  async componentDidMount() {
    this._isMounted = true;

    const planets = await GetPlanetListAsync(null, {}, 30)
    this._isMounted&&this.setState({ planets, loading: false })

  }
  componentWillUnmount(){
    this._isMounted = false;
  }

  mainPost = () => {
    const { planets } = this.state
    let posts = [] as Array<any>

    for (let item of planets as Array<Planet>) {
      posts.push(<React.Fragment key ={item.name}>
        <Grid.Column key={item.name}>
          <Card className={'post-preview'} >
            <Link
              to={{
                pathname: `/planet/${item.name}`,
                state: { planet: item }
              }}
            >
              <Svg height="190" width="180" >
                {' '}
                {Gradient()}
                <G>
                  <Defs>
                    <ClipPath id="clip">
                      <Circle cx="100" cy="100" r="65" />
                    </ClipPath>
                  </Defs>
                  <Image
                    width="180"
                    height="190"
                    href={`../img/${item.img.uri}.jpg`}
                    clipPath="url(#clip)"
                  />
                  <Circle
                    cx="100"
                    cy="100"
                    r="65"
                    fillOpacity={0.4}
                    fill={`url(#${item.img.uri}`}
                  />
                </G>
              </Svg>{' '}
            </Link>
            <Card.Content>
              <Card.Header>
                <Link
                  to={{
                    pathname: `/planet/${item.name}`,
                    state: { planet: item }
                  }}
                >
                  {item.name}
                </Link>
              </Card.Header>
              <Card.Description>
                <span>{`Discovered: ${item.discYear}`}</span>
              </Card.Description>
              <Card.Description>
                {`${item.type && item.type !== null ? item.type : ''}`}{' '}
                {item.distance !== 0
                  ? `${Math.round(item.distance)} lightyears from earth.`
                  : ''}
              </Card.Description>
              <Rating
                icon="star"
                defaultRating={Math.round(item.esi * 10)}
                maxRating={10}
                size="large"
                disabled={true}
              />
            </Card.Content>
            <Card.Content extra>
              <Link
                to={{
                  pathname: `/star/${item.star.name}`,
                  state: { star: item.star }
                }}
              >
                <Button icon inverted basic color="grey" height="25">
                  <MaterialIcon icon="wb_sunny" color="#c6d4ff" size={25} />
                  {'Visit Star'}{' '}
                </Button>
              </Link>

              <a
                href={`/system/${item.star.name}`}
  
              >
                <Button icon inverted basic color="grey" height="25">
                  <MaterialIcon icon="3d_rotation" color="#c6d4ff" size={25} />

                  {`${item.star.noPlanets} Planets`}
                </Button>
              </a>
            </Card.Content>
          </Card>
        </Grid.Column></React.Fragment>
      )
    }

    return getGroupedItems(posts)
  }

  handleSearchChange = async (e: any) => {
    let { searchValue } = this.state

    searchValue = e.target.value
    
    this.setState({ searchValue })
  }
  handleSearchClick = async () => {
   
    let filter = this.setSearchFilter()

    const planets = await GetPlanetListAsync(filter, {}, 30)

    this._isMounted&&this.setState({ planets, loading: false })
  }

  handleHabClick = async () => {
    let { habactive } = this.state
    habactive = !habactive
    let planets = [] as Array<Planet>
    if (habactive) {
      planets = await GetPlanetListAsync({ Key: 'Hab' }, {}, 30)
    }
    if (!habactive) {
      planets = await GetPlanetListAsync({}, {}, 30)
    }
    this._isMounted&&this.setState({ planets, loading: false, habactive })
  }
  handlePaginate = async (top: number) => {

    let filter = this.setSearchFilter()

    const planets = await GetPlanetListAsync(filter, {}, top)

    this._isMounted&&this.setState({ planets, loading: false, top })
  }

  setSearchFilter = () => {
    let { habactive, searchValue } = this.state
    if (habactive && searchValue !== '') {
      return { Key: 'Hab', Name: searchValue }
    }
    if (!habactive && searchValue !== '') {
      return { Name: searchValue }
    }
    if (habactive && searchValue === '') {
      return { Key: 'Hab' }
    }
    return {}
  }

  render() {
    const { loading, searchValue, top, planets } = this.state
    const main = this.mainPost()

    return loading? (
      <Dimmer active>
      <Loader />
      </Dimmer>

    ) : (
      <React.Fragment>
             <div className={'float-left'} style={{marginLeft:20}}>
         <Dropdown
                className={'float-left'}
                button
                basic
                floating
                onChange={() => this.handleHabClick()}
                options={options}
                defaultValue="all"
              />
              </div>
        <div className={'bar'}>
   
        <Input type='text'
           size="small"
           value={searchValue}
           onChange={(e:any) => this.handleSearchChange(e)}
        placeholder='Search...' action>
    <input />
    <Button type='submit' onClick={() => this.handleSearchClick()}><Icon name={"search"} /></Button>
    
  </Input>

   
         </div>
         <div className={"catalog"}>
    <Grid stackable centered columns={2}>
          {main}
        </Grid>  </div>
        <div className={'bar'}>
        <Paginate handlePaginate={this.handlePaginate} top={top} length={planets.length} />
        </div>
      </React.Fragment>
    )
  }
}
