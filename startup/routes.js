import userRoutes from '../routes/users';

const routes = app => {
  app.use('/api/users', userRoutes);
};

export default routes;
