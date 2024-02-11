import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useCart = () => {
    //axios hook
    const axios = useAxios()
    //useAuth hook
    const {user} = useAuth();


    const {data:carts=[],isLoading,refetch} = useQuery({
        queryKey:["carts",user?.email],
        queryFn: async ()=>{
            const response = await axios.get(`/carts?email=${user?.email}`)
            return response.data;
        }
    })

    return [carts,isLoading,refetch]
};

export default useCart;