import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// 延遲加載頁面
const MainPage = lazy(() => import('./pages/MainPage'));
const HelperPage = lazy(() => import('./pages/HelperPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

// 加載中組件
const Loading = () => <div>加載中...</div>;

// 路由配置
const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: '/helper',
    element: (
      <Suspense fallback={<Loading />}>
        <HelperPage />
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<Loading />}>
        <ProfilePage />
      </Suspense>
    ),
  },
  // 重定向
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes; 