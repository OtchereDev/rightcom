import axiosInstance from "../utils/axios-instance";

const adminApiService = (() => {
  const createContract = async (contract) => {
    try {
      const request = await axiosInstance.post("/add-contract", contract);

      return {
        status: request.status,
        message: request.data.message,
        contract: request.data.data,
      };
    } catch (error) {
      return error?.response?.data;
    }
  };

  const markAsTaken = async (id) => {
    try {
      const request = await axiosInstance.post(`/contract-taken/${id}`);

      return {
        status: request.status,
        data: request.data,
      };
    } catch (error) {
      return error?.response?.data;
    }
  };

  const changeStatus = async (id, status) => {
    try {
      const request = await axiosInstance.patch(
        `/change-contract-status/${id}`,
        { status }
      );

      return {
        status: request.status,
        data: request.data,
      };
    } catch (error) {
      return error?.response?.data;
    }
  };

  const getDrivers = async (id) => {
    try {
      const request = await axiosInstance.get(`/get-applied-drivers/${id}`);

      return {
        status: request.status,
        data: request.data.contract,
      };
    } catch (error) {
      return error?.response?.data;
    }
  };

  const awardContract = async (contractId, driverId) => {
    try {
      const request = await axiosInstance.post(
        `/award-contract/${contractId}`,
        { id: driverId }
      );

      return {
        status: request.status,
        data: request.data.data,
        message: request.data.message,
      };
    } catch (error) {
      return error?.response?.data;
    }
  };

  return {
    markAsTaken: async (id) => markAsTaken(id),
    changeStatus: async (id, status) => changeStatus(id, status),
    createContract: async (contract) => createContract(contract),
    getDrivers: async (id) => getDrivers(id),
    awardContract: async (contractId, driverId) =>
      awardContract(contractId, driverId),
  };
})();

export default adminApiService;
