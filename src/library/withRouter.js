import { useNavigate, useParams, useLocation } from "react-router"

const withRouter = ReactComponent => {
    const RoutedComponent = (props) => {
      
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()

        return<ReactComponent {...props} locatioin={location} navigate={navigate} params={params} />
    }
return RoutedComponent
}

export default withRouter 