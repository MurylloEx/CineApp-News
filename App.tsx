import { CoreProvider } from 'src/core';

export default function App() {
  return (
    <CoreProvider>
      
    </CoreProvider>
  );
}

export const App = () => (
  <CoreProvider>
    <AppRoutes />
  </CoreProvider>
);
