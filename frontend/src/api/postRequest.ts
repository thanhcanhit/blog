import { Post } from "../interface/Post";
import { axiosIntance as axios } from "./apiConstants";

const getPosts = async () => {
	try {
		const res = await axios.get("/post");
		return res.data;
	} catch (err) {
		return null;
	}
};

const getPost = async (id: string) => {
	try {
		const res = await axios.get(`/post/${id}`);
		return res.data;
	} catch (err) {
		return null;
	}
};
const getPostsWithQuery = async (limit: number, offset: number) => {
	try {
		const res = await axios.get(`/post?limit=${limit}&offset=${offset}`);
		return res.data;
	} catch (err) {
		return null;
	}
};

const createPost = async (data: Partial<Post>) => {
	// const token = store.getState().user.user?.accessToken;
	try {
		const res = await axios.post(
			`/post`,
			{
				...data,
			}
			// { headers: { authorization: `Beaer ${token}` } }
		);

		return Boolean(!res.data.err);
	} catch (err) {
		return false;
	}
};

const getTotalItems = async () => {
	try {
		const res = await axios.get(`/post/size`);
		return res.data;
	} catch (err) {
		return null;
	}
};

export { createPost, getPost, getPosts, getPostsWithQuery, getTotalItems };
