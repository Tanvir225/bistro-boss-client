import useAdminStats from "../../../Hook/useAdminStats";
import useAuth from "../../../Hook/useAuth";
import { AiFillShop, AiOutlineCar, AiOutlineRise, AiOutlineUser } from "react-icons/ai";

const AdminHome = () => {
  //useAuth and useAdminStats
  const { user } = useAuth();
  const [adminStats] = useAdminStats();
  console.log(adminStats);
  return (
    <div>
      <h2 className="text-xl">
        Hi! Welcome{" "}
        <span className="text-green-500 font-bold">{user?.displayName}. </span>
      </h2>

      <div className="stats shadow w-full my-5 py-6">
        <div className="stat">
          <div className="stat-figure text-primary">
            <AiOutlineRise className="text-4xl font-bold"></AiOutlineRise>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-primary">{adminStats.total} $</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineUser className="text-4xl font-bold"></AiOutlineUser>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">
            {adminStats.customers} persons
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineCar className="text-4xl font-bold"></AiOutlineCar>
          </div>
          <div className="stat-title">Orders done</div>
          <div className="stat-value">{adminStats.orders} orders</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiFillShop className="text-4xl"></AiFillShop>
          </div>

          <div className="stat-title">Products</div>
          <div className="stat-value  text-primary">{adminStats.products} items</div>
         
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
