import axios from "axios";

export const AskFromGpt = async (content: string) => {
    var url = "https://api.openai.com/v1/chat/completions";
    var body = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: content,
            },
        ],
    };
    var response;

    try {
        response = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
            },
        });
        if (response.data !== null)
            return response.data["choices"][0]["message"]["content"];
        else return null;
    } catch (e) {
        console.log(e);
        return null;
    }
};
