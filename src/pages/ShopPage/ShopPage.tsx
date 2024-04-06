import { memo } from "react";

interface ShopPageProps {
  className?: string;
}

const ShopPage = memo((props: ShopPageProps) => {
  const { className } = props;

  return <h1>Shop</h1>;
});

export default ShopPage;
