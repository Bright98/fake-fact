import { Button, ConfigProvider, Flex, Input, Typography } from "antd";
import React from "react";
import { ExistLangs } from "../../lang/lang";
import Layout, { Content } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";

const ArticlePage: React.FC = () => {
    const location = useLocation();

    return (
        <ConfigProvider
            theme={{
                token: { fontFamily: "iranSans" },
            }}
        >
            <Layout>
                <Content
                    dir={location.state.lang === ExistLangs.fa ? "rtl" : "ltr"}
                >
                    <div className="container">
                        <Flex className="article-content">
                            <Typography.Text className="article-text">
                                {location.state.content}
                            </Typography.Text>
                        </Flex>
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default ArticlePage;
