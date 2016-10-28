import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { swapPairs } from '../actions'
import PeopleList from '../components/PeopleList'
import PairStationList from '../components/PairStationList'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './reset.css'
import './App.css'

injectTapEventPlugin()

const style = {
  hideIcon: {
    display: 'none'
  },
  center: {
    textAlign: 'center'
  }
}

const App = ({developers, pairs, swapPairs}) => (
  <div className="App">
    <AppBar
      title="Pair Swappr"
      iconStyleLeft={style.hideIcon}
      style={style.center}
    />
    <div className="container">
      <div className="flex-container">
        <div className="people-list">
          <PeopleList developers={developers} />
        </div>
        <div className="pairstation-list">
          <PairStationList 
            marioAndLuigi={pairs.pair1}
            tomAndJerry={pairs.pair2}
            itchyAndScratchy={pairs.pair3}
            scoobyAndShaggy={pairs.pair4}
          />
        </div>
      </div>
      <RaisedButton label="Pair swap!" fullWidth={true} onTouchTap={() => swapPairs()} />
    </div>
  </div>
)

App.propTypes = {
  developers: PropTypes.array.isRequired,
  pairs: PropTypes.object.isRequired,
  swapPairs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  developers: state.developers,
  pairs: state.pairs
})

export default connect(
  mapStateToProps,
  { swapPairs }
)(App)
