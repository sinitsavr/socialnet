
import { connect } from "react-redux";
import { redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state) =>({
  isAuth: state.auth.isAuth
  });

export const withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (!props.isAuth) return redirect('/login')
  return <Component {...props}/>
}

let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent;
}

