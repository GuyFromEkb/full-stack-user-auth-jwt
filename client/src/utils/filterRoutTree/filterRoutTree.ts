import { RouteObject, IndexRouteObject, NonIndexRouteObject } from "react-router"
import { CustomRoutObj } from "src/router/appRoutes"

export const filterRouteTree = (routerTree: CustomRoutObj[], isUserAuth: boolean) => {
  const getNodes = (result: RouteObject[], customRoute: CustomRoutObj): RouteObject[] => {
    const isUserHasAccess = !customRoute.isNeedAuth || (isUserAuth && customRoute.isNeedAuth)
    const isRouteHasChildren = customRoute.children?.length

    if (isUserHasAccess && !isRouteHasChildren) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { isNeedAuth, isFirstChildrenIndexTrue, children, ...route } = customRoute

      result.push(route)
      return result
    }

    if (isUserHasAccess && isRouteHasChildren) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const filteredChildren = customRoute.children!.reduce(getNodes, [])

      if (filteredChildren.length) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isNeedAuth, isFirstChildrenIndexTrue, ...route } = customRoute

        const filterChildIdx = filteredChildren.map((item, idx) => {
          if (isFirstChildrenIndexTrue && idx === 0 && !item.children) {
            return { ...item, index: true, path: undefined } as IndexRouteObject
          }
          return item as NonIndexRouteObject
        })
        //@ts-ignore
        result.push({ ...route, children: filterChildIdx })
      }
    }
    return result
  }

  return routerTree.reduce(getNodes, [])
}
