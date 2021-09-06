import { configureStore } from '@reduxjs/toolkit';
import gameSlice from '../redux/gameSlice';
import { compose } from 'redux'

export const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
