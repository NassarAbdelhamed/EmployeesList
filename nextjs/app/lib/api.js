const baseURL = 'http://localhost:8080/app/employees';

export const fetchEmployees = async () => {
    const response = await fetch(baseURL);
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }
    return response.json();
};

export const addEmployee = async (employeeData) => {
    console.log(JSON.stringify(employeeData)
)
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
        
    });
    console.log(response)
    if (response.status!==2001) {
        throw new Error('Failed to add employee');
    }
};

export const editEmployee = async (id, employeeData) => {
    const response = await fetch(`${baseURL}?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    });
    if (!response.ok) {
        throw new Error('Failed to edit employee');
    }
};
