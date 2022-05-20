import isLogin from "./isLogin";
import { Link, Route, Switch,Redirect } from 'react-router-dom';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (isLogin() && restricted ? <Redirect to="/Login" /> : <Component {...props} />)}
      />
    );
  };
  
  export default PublicRoute;