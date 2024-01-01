import moment from "moment";
import { Typography, Select, Row, Col, Avatar, Card } from "antd";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi.js";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi.js";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    q: newsCategory,
    pageSize: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (isFetching || !cryptoNews?.articles) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin, i) => (
              <Option value={coin.name} key={i}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.articles.map((news, i) => (
        <Col xs={12} sm={24} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <div className="provider-container">
                  <Text>
                    {moment(news.published_date).startOf("ss").fromNow()}
                  </Text>
                </div>
              </div>
              <div className="provider-name">
                <Text>{news.publisher.name}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default News;
