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
    if (!response.ok) {
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
export const removeEmployee = async (id) => {
    const response = await fetch(`${baseURL}?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to Remove employee');
    }
};
export const maxSalary = async () => {
        const response = await fetch('http://localhost:8080/app/employees/maxSalary');
        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }
        return response.json();
    };
export const minSalary = async () => {
        const response = await fetch('http://localhost:8080/app/employees/minSalary');
        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }
        return response.json();
    };
export const maxAge = async () => {
        const response = await fetch('http://localhost:8080/app/employees/maxAge');
        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }
        return response.json();
    };
export const minAge = async () => {
        const response = await fetch('http://localhost:8080/app/employees/minAge');
        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }
        return response.json();
    };
