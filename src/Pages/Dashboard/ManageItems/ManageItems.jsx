
import Heading from "../../../Components/Heading/Heading";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import useMenu from "../../../Hook/useMenu";

const ManageItems = () => {

    //useMenus hook
    const [menus,isLoading,refetch] = useMenu();

    //loading
    if (isLoading) {
        return (
          <p className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-lg"></span>
          </p>
        );
      }

  return (
    <div>
      <Heading subHeading="Hurry Up" Heading="Manage Items"></Heading>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menus?.map((menu, index) => (
              <tr className="" key={menu._id}>
                <th>{index + 1}</th>
                <td className="flex justify-center">
                  <img
                    className="w-12 rounded-full"
                    src={menu?.image}
                    alt={`${menu?.name} image`}
                  />
                </td>
                <td>{menu.name}</td>
                <td>{menu.price}</td>

                <td>
                  <button
                    className="btn btn-outline bg-green-600 text-white"
                  >
                    <AiOutlineEdit></AiOutlineEdit>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline bg-red-600 text-white"
                  >
                    <AiOutlineDelete></AiOutlineDelete>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
