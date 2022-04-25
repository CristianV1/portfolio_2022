import countriesVideo from "../assets/countries.PNG";
import flightproject from "../assets/headingNorth.PNG";

const data = [
  {
    title: "Countries app",
    img: countriesVideo,
    description:
      "This app consumes info from my database, the info that is in the database come from an api, the frontend was made in react and redux, the backend was with nodejs express and redux",

    Link: "https://countries-app-kappa-seven.vercel.app/",
    aditionalStyles: {},
  },

  {
    title: "Ecommerce app",
    img: flightproject,
    description:
      "The app sells flights than comes from diferents apis,the frontend was made with react,redux and chakra-ui,for the backend we use mongoDb and mongoose",
    aditionalStyles: { objectPosition: "-80px 0px" },
    Link: "https://air-comerce-client.vercel.app/",
  },
];

export default data;
