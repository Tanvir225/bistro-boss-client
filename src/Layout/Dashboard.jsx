import {
  AiFillAccountBook,
  AiFillInteraction,
  AiOutlineAlipay,
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShop,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { FaList, FaMortarPestle, FaUsers } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const userSidebar = (
    <>
      <li>
        <NavLink to={"/dashboard"}>
          <AiOutlineHome className="text-xl"></AiOutlineHome> User Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"cart"}>
          <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart> My
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <AiOutlineCalendar className="text-xl"></AiOutlineCalendar>{" "}
          Reservation
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <AiOutlineAlipay className="text-xl"></AiOutlineAlipay> Payment
          History
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <AiFillInteraction className="text-xl"></AiFillInteraction> Review
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <AiFillAccountBook className="text-xl"></AiFillAccountBook> My Booking
        </NavLink>
      </li>
    </>
  );

  //TODO: add admin sidebar when implementing admin dashboard
  const isAdmin = true;

  const adminSidebar = ( 
    <>
      <li>
        <NavLink to={"/"}>
          <AiOutlineHome className="text-xl"></AiOutlineHome>Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <FaMortarPestle  className="text-xl"></FaMortarPestle >Add item
        </NavLink>
      </li>
      <li>
        <NavLink to={"manage-items"}>
          <FaList className="text-xl"></FaList>Manage items
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <AiFillAccountBook className="text-xl"></AiFillAccountBook>Manage Booking
        </NavLink>
      </li>
      <li>
        <NavLink to={"all-users"}>
          <FaUsers className="text-xl"></FaUsers> All users
        </NavLink>
      </li>
    </>
  );

  const sharedSidebar = (
    <>
      <li>
        <NavLink to={"/"}>
          <AiOutlineHome className="text-xl"></AiOutlineHome>Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>
          <AiOutlineMenu className="text-xl"></AiOutlineMenu>Menu
        </NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>
          <AiOutlineShop className="text-xl"></AiOutlineShop>Order
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex gap-5">
      <div className="w-44 bg-orange-400 menu min-h-screen hidden md:flex p-5 space-y-2 ">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Bistro Boss</h1>
          <p className="text-lg font-semibold tracking-widest">Restaurant</p>
        </div>

        <div className="divider divider-neutral"></div>

        {isAdmin ? adminSidebar : userSidebar}

        <div className="divider divider-neutral"></div>

        {sharedSidebar}
      </div>
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;