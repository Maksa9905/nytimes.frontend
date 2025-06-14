import { createSlice } from '@reduxjs/toolkit'

const asideNavigationSlice = createSlice({
  name: 'asideNavigation',
  initialState: false,
  reducers: {
    toggleAsideNavigation: (state) => !state,
  },
})

export default asideNavigationSlice.reducer
export const { toggleAsideNavigation } = asideNavigationSlice.actions
export const selectIsNavigationOpen = (state: RootState) =>
  state.asideNavigation
