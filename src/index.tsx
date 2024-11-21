import App from '@/App'
import store from '@/store'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import './index.scss'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
