import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "../API/spring-api";

const initialState = {
  posts: null,
  status: null,
  allPosts: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    deletePost: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        console.log("Posts created successfully:", action.payload); // Debugging message
        // state.posts = action.payload;
        state.status = "succeeded";
      })
      .addCase(createPosts.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(getAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log("get ALL Posts successfully:", action.payload); // Debugging message
        state.allPosts = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(editPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPosts.fulfilled, (state, action) => {
        console.log("update Posts successfully:", action.payload); // Debugging message
        state.allPosts = state.allPosts?.map((post) =>
          post?.postId === action.payload?.postId ? action.payload : post
        );
        state.status = "succeeded";
      })
      .addCase(editPosts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deletePosts.fulfilled, (state, action) => {
        console.log("post Delete successfully:", action.payload); // Debugging message
        state.allPosts = state.allPosts?.filter(
          (post) => post.postId !== Number(action.payload?.postId)
        );
        state.status = "succeeded";
      });
  },
});

export const { increment, decrement, incrementByAmount, deletePost } =
  postSlice.actions;

export default postSlice.reducer;

export const createPosts = createAsyncThunk(
  "posts/createPost",
  async (data) => {
    const responce = await postsService.createPostAPI(data);
    return responce;
  }
);
export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
  const responce = await postsService.getAllPostsAPI();
  return responce;
});
export const deletePosts = createAsyncThunk(
  "post/deletePosts",
  async (id, thunkAPI) => {
    const responce = await postsService.deletePostsAPI(id);
    if (responce.status === 200) {
      // thunkAPI.dispatch(getAllPosts());
    }
    return responce;
  }
);
export const editPosts = createAsyncThunk(
  "post/editPosts",
  async (obj, thunkAPI) => {
    const responce = await postsService.editPostsAPI(obj);

    return responce;
  }
);
