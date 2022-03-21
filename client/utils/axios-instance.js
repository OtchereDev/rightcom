import { create } from 'axios';

// Set config defaults when creating the instance
const axiosInstance = create({
	baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001",
});

export default axiosInstance;