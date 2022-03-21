import axiosInstance from "../utils/axios-instance";


const driverApiService = (()=>{
    const getAllContracts = async (params={})=>{
        try {
            const request = await axiosInstance.get("/get-all-contracts")

            if (request.status == 200){
                return {
                    status: request.status,
                    data: request.data?.data
                }
            }

        } catch (error) {
            return {
                status: error?.response?.status ?? null,
                data: error?.response?.data ?? null
            }
        }
    }

    const applyForContract=async(id,applicant)=>{
        try {
            const request = await axiosInstance.post(`/apply-for-contract/${id}`,applicant)

            return {
                status: request.status,
                message: request.message,
            }
        } catch (error) {
            return error?.response?.data 
        }
    }
    

    return {
        getAllContracts: async (params)=>getAllContracts(params),
        applyForContract: async(id, applicant)=>applyForContract(id, applicant)
    }
})();

export default driverApiService