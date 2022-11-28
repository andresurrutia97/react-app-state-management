import App from './App';
import Composition from './pages/Composition';
import Context from './pages/ContextUsage';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/composition', element: <Composition />, name: 'Composition' },
      { path: '/context', element: <Context />, name: 'Context' },
    ],
  },
];
