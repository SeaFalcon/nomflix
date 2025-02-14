import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      // async: promise 상태 만들기 | await는 promise가 끝날때까지 기다리라는 명령어
      // await, 해당 명령어 작동이 끝날때까지 프로세스 멈춰!
      // await는 async와 함께 사용해야 함
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();

      const {
        data: { results: popular }
      } = await moviesApi.popular();

      // console.log("try");
      // throw Error();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      // console.log("catch");
      this.setState({ error: "Can't find movies information." });
    } finally {
      // console.log("finally");
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    // console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
