const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDQ1ZjcyYmEwNWY3YmFjMTRhYzgyNDkyMzA5ZTE4YyIsInN1YiI6IjY2NmIxM2YwNmUzMThlZTU5Yjc2MTZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MEAa79BPfcUF8p7mvCO63epCAEZ4jo-29KjIWgcQXV4",
  },
};

export const userSignInAPI = async (dataObj) => {
  try {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in userSignInAPI:", error);
    throw error;
  }
};
export const updateUserAPI = async (dataObj, id) => {
  console.log("updateUserAPI", dataObj, id);
  try {
    const response = await fetch(`http://localhost:8080/api/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Update User API:", error);
    throw error;
  }
};
export const deleteUserAPI = async (id) => {
  console.log("deleteUserAPI", id);
  try {
    const response = await fetch(`http://localhost:8080/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Delete User API:", error);
    throw error;
  }
};

export const addPostAPI = async (dataObj) => {
  try {
    const response = await fetch("http://localhost:8081/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in userSignInAPI:", error);
    throw error;
  }
};
