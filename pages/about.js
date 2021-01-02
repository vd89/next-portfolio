import axios from 'axios';
import React, { Component } from 'react';
import Layout from '../Components/Layout';
import Error from './_error';

export default class About extends Component {
  static async getInitialProps() {
    const res = await axios('https://api.github.com/users/vd89');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.data;

    return { user: data, statusCode };
  }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title='About'>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt='This is DAX CODE' height='200' width='200' />
      </Layout>
    );
  }
}
