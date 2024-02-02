import Categories from "../../components/categories/categories.component";

const Home = ()=> {
    const categories = [
        {
          id: 1,
          title: "Appetisers",
          imageUrl: "https://rb.gy/g60syb",
        },
        {
          id: 2,
          title: "Burgers",
          imageUrl: "https://rb.gy/snz7bh",
        },
        {
          id: 3,
          title: "Sides",
          imageUrl: "https://rb.gy/7pbjl1",
        },
        {
          id: 4,
          title: "Desserts",
          imageUrl: "https://rb.gy/gxnuqx",
        },
        {
          id: 5,
          title: "Tex Mex",
          imageUrl: "https://rb.gy/v29fum",
        },
      ];
    
      return <Categories categories={categories} />;
}

export default Home;