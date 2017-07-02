import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import uniqueId from "lodash.uniqueid"
import RouteElement from "./RouteElement"

function RouteList({ routes, urlParam, history }) {
  return (
    <ul id="route-list">
      {routes.map((route, i) => {
        return route.length > 1 ?
          <RouteElement
            key={uniqueId()}
            route={route}
            index={i}
            urlParam={urlParam}
            history={history}
          /> :
        null
      })}
    </ul>
  )
}


RouteList.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.array).isRequired,
  urlParam: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.function }).isRequired
}
RouteList.defaultProps = { urlParam: "" }


function mapStateToProps(state) {
  return {
    routes: state.routes
  }
}

export default connect(mapStateToProps)(RouteList)
