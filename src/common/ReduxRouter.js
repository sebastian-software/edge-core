import { connectRoutes } from "redux-first-router"

// eslint-disable-next-line max-params
export function createReduxRouter(routes, path = null, config = {}) {
  // match initial route to express path
  if (path) {
    config.initialEntries = [ path ]
  }

  return connectRoutes(routes, config)
}
