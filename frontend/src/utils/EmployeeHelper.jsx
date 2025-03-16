import axios from "axios";
export const fetchDepartment = async()=>{
        let departments
        try {
            const response = await axios.get("http://localhost:3000/api/department/all", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.data.success) {

                departments = response.data.departments;
            }
        } catch (error) {
            console.error("Error fetching departments:", error);
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            }
        } 
        return departments;
    };
