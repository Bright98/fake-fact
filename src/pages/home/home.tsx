import {
    Button,
    ConfigProvider,
    Flex,
    Input,
    Layout,
    Radio,
    Typography,
} from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { AskFromGpt } from "../../service";
import { ExistLangs, FindLangVal } from "../../lang/lang";
import { Content, Header } from "antd/es/layout/layout";

const HomePage: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [lang, setLang] = React.useState(ExistLangs.en);
    const [subj, setSubject] = React.useState("");
    const { TextArea } = Input;
    const navigate = useNavigate();
    const headerStyle: React.CSSProperties = {
        backgroundColor: "transparent",
    };

    const changeLang = (e: any) => {
        setLang(e.target.value);
    };
    const getSubject = (e: any) => {
        setSubject(e.target.value);
    };

    return (
        <ConfigProvider
            theme={{
                token: { fontFamily: "iranSans" },
            }}
        >
            <Layout>
                <Header style={headerStyle}>
                    <div className="container">
                        <Flex justify="space-between">
                            <h1>Fake Fact</h1>
                            <Flex align="center" gap="middle">
                                <span>
                                    {FindLangVal(lang, "header.lang")} :
                                </span>
                                <Radio.Group value={lang} onChange={changeLang}>
                                    <Radio.Button value={ExistLangs.en}>
                                        {ExistLangs.en.toString()}
                                    </Radio.Button>
                                    <Radio.Button value={ExistLangs.fa}>
                                        {ExistLangs.fa.toString()}
                                    </Radio.Button>
                                </Radio.Group>
                            </Flex>
                        </Flex>
                    </div>
                </Header>
                <Content dir={lang === ExistLangs.fa ? "rtl" : "ltr"}>
                    <div className="container">
                        <Flex
                            gap="middle"
                            vertical
                            justify="center"
                            align="center"
                            className="home-content"
                        >
                            <h1>
                                {FindLangVal(
                                    lang,
                                    "title.write_an_article_about"
                                )}{" "}
                                :
                            </h1>
                            <TextArea
                                autoSize={{ minRows: 4, maxRows: 8 }}
                                placeholder={FindLangVal(
                                    lang,
                                    "input.placeholder.subject"
                                )}
                                onChange={getSubject}
                            />
                            {loading && (
                                <Typography.Text>
                                    {FindLangVal(lang, "loading.text")}...
                                </Typography.Text>
                            )}
                            <Button
                                onClick={async () => {
                                    setLoading(true);
                                    var content: string =
                                        FindLangVal(
                                            lang,
                                            "title.write_an_article_about"
                                        ) +
                                        " " +
                                        subj;
                                    var res = await AskFromGpt(content);
                                    setLoading(false);
                                    if (res === null) {
                                        window.alert(
                                            FindLangVal(lang, "response.error")
                                        );
                                    } else {
                                        navigate("/article", {
                                            state: { lang: lang, content: res },
                                        });
                                    }
                                }}
                                type="primary"
                                size="large"
                                loading={loading}
                                disabled={loading}
                            >
                                {FindLangVal(lang, "button.write")}
                            </Button>
                        </Flex>
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default HomePage;
