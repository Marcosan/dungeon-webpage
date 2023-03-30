import { configureStore } from '@reduxjs/toolkit'
import currentPageSlice from '../../features/controls/currentPageSlice'
import counterReducer from '../../features/counter/counterSlice'

export default configureStore({
	reducer: {
		counter: counterReducer,
		currentPage: currentPageSlice,
	}
})