import { ApolloClient, InMemoryCache, gql, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';


export default async function Strapi() {

    const httpLink = createHttpLink({
        uri: 'http://localhost:1337/graphql',
      });

    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        //const token = localStorage.getItem('token');
        const token = '1bd719e3b3a9c643629cb3be79863a4a35f5f61e76f12a5f99e5599741ed855d51d529fb5ce5690468fbc503f4b896e634a839631b52e515dde88915c92e12104a6039c2409dbb1ad7a69c28430dffc530ddd62af3a4582373e0a0e293940e2c1f99a9c49f784cea0af6cf2b4f18503cf378619add9fd856ca136dacd51f7907'
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          }
        }
      });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        query getBanners {
            banners{
                data{
                  attributes{
                    locale
                    Banner{
                      id
                      Description
                      Subtitle
                      Cover{
                        data {
                          attributes{
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
        `
    });
    console.log('banners', data.banners.data.map((banner)=>(banner.attributes.Banner )));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-5xl container mx-auto">

            {data.banners.data.map((banner)=>(

                <div key={banner.id} className="h-64 rounded-md overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: 'url("/banner.jpg")' }}>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">{banner.attributes.Banner.Description}</h2>
                            <p className="mt-2 text-gray-400">{banner.attributes.Banner.Subtitle}</p>
                            <a className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" href="/shop">Shop Now
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span></a>
                        </div>
                    </div>
                </div>

            ))}
            </div>

        </main>
    )
}
