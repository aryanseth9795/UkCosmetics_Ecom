import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Link className="productCard" to={`/inventory`}>
        <div>
          <h2>Todays Inventory</h2>
        </div>
      </Link>
      <Link className="productCard" to={`/stocks`}>
        <div>
          <h2>Stocks</h2>
        </div>
      </Link>
      <Link className="productCard" to={`/modify`}>
        <div>
          <h2>Modify Products</h2>
        </div>
      </Link>
      <Link className="productCard" to={`/ledger`}>
        <div>
          <h2>Ledger </h2>
        </div>
      </Link>
    </div>
  );
}
