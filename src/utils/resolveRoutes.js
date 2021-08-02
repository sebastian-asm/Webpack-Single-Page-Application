const resolveRoutes = (route) => {
  // El id recibido no debe superar los 4 dígitos
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  return `/${route}`;
};

export default resolveRoutes;
