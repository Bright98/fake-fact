import axios, { AxiosError } from "axios";

export const AskFromGpt = async (content: string) => {
    var url = `${process.env.REACT_APP_BASE_URL}/api/write-article`;
    console.log(url);
    var body = { content: content };
    var response;

    try {
        response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data !== null) return response.data["data"];
        else return null;
    } catch (e) {
        console.log(e);
        return null;
    }
};
