
import {



    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_FAILED,
    LOAD_EXTERNAL_DETAILS_REQUEST,
    LOAD_EXTERNAL_DETAILS_SUCCESS,
    LOAD_EXTERNAL_DETAILS_FAILED,
    LOAD_MORE_COMMENTS_FAILED,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILED,
    LOAD_MORE_COMMENTS_REQUEST,
    LOAD_MORE_COMMENTS_SUCCESS
} from "../Types/CommentTypes";



const initialstate = {


    Comments: [],
    lastCommentIndex: null,

    commentsLoading: false,
    commentsMoreLoading: false,
    avgLoading: false,

    addCommentLoad: false,
    addCommnetsError: null,

    addcommentError: null,

    avgError: null,
    commentsError: null,
    commentsMoreError: null,

    avg: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        total: 0,
        avg: 0
    }
}


const CommentReducer = (state = initialstate, action) => {

    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
            return {
                ...state
                , commentsLoading: true
                , commentsError: null,
                               
            }

        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                Comments: action.payload.Reviews,
                commentsLoading: false,
                lastCommentIndex: action.payload.lastKey
            }


        case LOAD_COMMENTS_FAILED:
            return {
                ...state, commentsLoading: false,
                commentsError: action.payload
            }


        case LOAD_MORE_COMMENTS_REQUEST:
            return {
                ...state,
                commentsMoreLoading: true,
                commentsMoreError: null
            }
        case LOAD_MORE_COMMENTS_SUCCESS:
            return {
                ...state,
                commentsMoreLoading: false,
                Comments: [...state.Comments, ...action.payload.Reviews],
                lastCommentIndex: action.payload.lastKey

            }


        case LOAD_MORE_COMMENTS_FAILED:
            return {
                ...state,
                commentsMoreError: action.payload,
                commentsMoreLoading: false
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addcommentError: null,
                addCommentLoad: true
            }

        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoad: false
            }
        case ADD_COMMENT_FAILED:
            return {
                ...state,
                addcommentError: action.payload,
                addCommentLoad: false
            }

        case LOAD_EXTERNAL_DETAILS_REQUEST:
            return {
                ...state,
                avgLoading: false,
                avgError: null,


            }
        case LOAD_EXTERNAL_DETAILS_SUCCESS:

            return {
                ...state, avgLoading: false,
                avg: action.payload
            }
        case LOAD_EXTERNAL_DETAILS_FAILED:
            return {
                ...state,
                avgLoading: false,
                avgError: action.payload
            }

        default:
            return state

    }

}
export default CommentReducer