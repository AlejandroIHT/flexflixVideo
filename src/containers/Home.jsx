import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";
import Header from "../components/Header";

const Home = ({ myList, trends, originals }) => {
  const [myListFilter, setMyListFilter] = useState(myList);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    setMyListFilter(myList);
  }, [myList]);

  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
    const list = myList.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setMyListFilter(list);
  };

  return (
    <React.Fragment>
      <Header />
      <Search
        handleChangeSearch={handleChangeSearch}
        valueSearch={valueSearch}
        isHome
      />
      {myListFilter.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myListFilter.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps)(Home);
