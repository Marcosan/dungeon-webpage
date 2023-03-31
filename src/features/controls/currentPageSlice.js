import { createSlice } from '@reduxjs/toolkit'
import { HOME } from '../../data/DungeonMap';

export const currentPageSlice = createSlice({
	name: 'currentPage',
	initialState: {
		value: HOME
	},
	reducers: {
		setCurrentPage: (state, action) => {
		    state.value = action.payload;
		},
	}
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = currentPageSlice.actions

export default currentPageSlice.reducer