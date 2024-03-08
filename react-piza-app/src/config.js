const config = {
  jsonServer: {
    baseUrl: "http://localhost:3001",
    products: "/Products",
    cart: "/Cart",
  },
  authUrl: {
    isTokenAuth: "http://localhost:9000/auth/login/isAuthenticated",
    getLogin: "http://localhost:9000/auth/login",
  },
};

export default config;
