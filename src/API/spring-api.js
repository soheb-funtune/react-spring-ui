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
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}users`, {
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
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}users/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      }
    );

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
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}users/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

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

// ******************* POSTS API ***********************

const createPostAPI = async (dataObj) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}posts`, {
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
const getAllPostsAPI = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}posts`, {
      method: "GET",
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
    console.error("Error in userSignInAPI:", error);
    throw error;
  }
};
const deletePostsAPI = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}posts/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

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
const editPostsAPI = async (dataObje) => {
  const { postId, ...rest } = dataObje;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}posts/${postId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in editPostsAPI:", error);
    throw error;
  }
};

export default { createPostAPI, getAllPostsAPI, deletePostsAPI, editPostsAPI };
