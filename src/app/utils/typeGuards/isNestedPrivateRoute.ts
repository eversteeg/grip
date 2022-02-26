import { NestedPrivateRoute, PrivateRoute } from '../../../@types/PrivateRoute';
import { Route } from '../../../@types/Route';

export const isNestedPrivateRoute = (route: PrivateRoute | Route): route is NestedPrivateRoute => 'children' in route;

export default isNestedPrivateRoute;
