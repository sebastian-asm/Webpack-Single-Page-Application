import Character from '@pages/Character';
import Error404 from '@pages/Error404';
import Header from '@components/Header';
import Home from '@pages/Home';
import getHash from '@utils/getHash';
import resolveRoutes from '@utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
};

const router = async () => {
  const header = document.querySelector('#header');
  const content = document.querySelector('#content');

  header.innerHTML = Header();

  // Obteniendo el hash y renderizando la ruta
  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
