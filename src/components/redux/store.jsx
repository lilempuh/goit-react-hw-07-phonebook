// import { configureStore } from '@reduxjs/toolkit';
// import { presistContactsReducer } from './contactSlice';
// import { myFilterSlice } from './filterSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// export const store = configureStore({
//   reducer: {
//     contacts: presistContactsReducer,
//     filter: myFilterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
import { configureStore } from '@reduxjs/toolkit';
import { myFilterSlice } from './filterSlicer';
import { contactsApi } from './contactsSliser';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [myFilterSlice.name]: myFilterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
