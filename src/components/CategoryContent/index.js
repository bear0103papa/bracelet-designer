import CrystalTable from '../CrystalTable';
import AccessoryPage from '../../pages/AccessoryPage';
import HelperPage from '../../pages/HelperPage';

const CategoryContent = ({ currentCategory }) => {
  switch (currentCategory) {
    case 'crystal':
      return <CrystalTable />;
    case 'accessory':
      return <AccessoryPage />;
    case 'helper':
      return <HelperPage />;
    default:
      return <CrystalTable />;
  }
};

export default CategoryContent; 