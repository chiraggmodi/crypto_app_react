import millify from "millify";
import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/CryptoApi";
import { Cryptocurrency, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto Currencies" value={millify(globalStats?.total ? globalStats.total : 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges ? globalStats.totalExchanges : 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap ? globalStats?.totalMarketCap : 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24 volume" value={millify(globalStats?.total24hVolume ? globalStats?.total24hVolume : 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets ? globalStats?.totalMarkets : 0)} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypotocurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/cryptocurrency"> Show More</Link>
        </Title>
      </div>

      <Cryptocurrency simplified />

      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news"> Show More</Link>
        </Title>
      </div>

      <News simplified />
    </>
  );
};

export default Homepage;
