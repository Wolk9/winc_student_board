const API_URI = "http://localhost:3000";

const dataAPI = {
    assignments: {
        async list() {
            const result = await fetch(`${API_URI}/assignments`, { method: "GET" });
            return result.json();
        },
        async show(id) {
            const result = await fetch(`${API_URI}/assignments/${id}`, { method: "GET" });
            return result.json();
        }
    },
    persons: {
        async list() {
            const result = await fetch(`${API_URI}/persons`, { method: "GET" });
            return result.json();
        },
        async show(id) {
            const result = await fetch(`${API_URI}/persons/${id}`, { method: "GET" });
            return result.json();
        }
    },
    courses: {
        async list() {
            const result = await fetch(`${API_URI}/courses`, { method: "GET" });
            return result.json();
        },
        async show(id) {
            const result = await fetch(`${API_URI}/courses/${id}`, { method: "GET" });
            return result.json();
        }
    }
};

export default dataAPI;