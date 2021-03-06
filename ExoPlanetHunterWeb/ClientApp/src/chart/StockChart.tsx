import * as React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { planetTypes } from '../service/getChart'
interface StockChartProps {
  updateParent: (type: number) => void
}

interface StockChartState {
  isActive: number
}
class StockChart extends React.Component<StockChartProps, StockChartState> {
  constructor(props: StockChartProps) {
    super(props)
    this.state = { isActive: 0 }
  }

  changeType = (type: number) => {
    const { updateParent } = this.props

    updateParent(type)
    this.setState({ isActive: type })
  }

  render() {
    const { isActive } = this.state
    return (
      <React.Fragment><Menu attached="top" size='mini' tabular stackable>{planetTypes.map((p,index)=>(
      <Menu.Item
        name="active"
        key={p}
        active={isActive === index}
        onClick={() => this.changeType(index)}
      >
        {p}
      </Menu.Item>))}
        </Menu>
        <Segment inverted attached="bottom">
          <h3>{'Planet class diagram'}</h3>
          <div
            id="stockchartdiv"
            style={{
              width: '100%',
              maxHeight: '700px',
              height: '69vh',
              margin: '10px'
            }}
          />
        </Segment>
      </React.Fragment>
    )
  }
}

export default StockChart
