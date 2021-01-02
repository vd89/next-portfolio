import Layout from "../Components/Layout";

export default ({statusCode}) => (
  <Layout title='Error !!!'>
    {statusCode
      ? `Could not load user data: Status Code ${statusCode}`
      : `Couldn't get that page, Sorry!`
    }
  </Layout>
)