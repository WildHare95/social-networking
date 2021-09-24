import {sendMessageCreator, updateNewMessageBodyCreator} from "../../React/dialogs-reducer";
import Messages from "./messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Messages);

