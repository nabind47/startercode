import axios from "axios";

interface IPost {
    id: number;
    title: string;
    userId: number;
    description: string;
}

export const getPosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data as IPost[];
}
