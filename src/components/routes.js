import { Routes, Route } from 'react-router-dom';

const RoutesContainer = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default RoutesContainer;
