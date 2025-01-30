import {configureStore} from "@reduxjs/toolkit"
import toolSlices from "./toolSlices"


export default configureStore({
    reducer : {
        tool : toolSlices
    }
})