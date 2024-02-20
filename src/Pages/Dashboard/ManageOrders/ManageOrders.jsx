import useOrders from "../../../Hook/useOrders";


const ManageOrders = () => {

    //useOrders hook
    const [Orders] = useOrders()
    return (
        <div>
            manage orders :{Orders.length}
        </div>
    );
};

export default ManageOrders;