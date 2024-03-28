import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    cart: state.cardItems
});
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
