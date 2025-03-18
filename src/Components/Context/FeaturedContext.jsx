import { createContext } from "react";

export const FeaturedContext = createContext();
function Context(props) {
      const cardData = [
            { title: "Cardboard Spaceship", image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png", button: ["branded template", "Sales deck", "social media templates"] },
            { title: "AH2 & Matt Horn", image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png", button: ["pitch deck"] },
            { title: "Fyde", image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png", button: ["Audit", "Copyrighting", "Sales deck", "slides design"] },
            { title: "vise", image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg", button: ["Agency", "company presentation"] },
            { title: "Trawa", image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg", button: ["brand identity", "design research", "investor deck"] },
            { title: "Premium Blend", image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png", button: ["branded template"] },
      ];
      const clientReviews = [
            {
                  texts: ["Karman Ventures", "William Barnes", "Read"],
            },
            {
                  texts: ["Planetly", "Nina Walloch", "Read"],
            },
            {
                  texts: ["Workiz Easy", "Tomer Levy", "Read"],
            },
            {
                  texts: ["Premium Blend", "Ellen Kim", "Read"],
            },
            {
                  texts: ["Hypercare Systems", "Brendan Goss", "Read"],
            },
            {
                  texts: ["Officevibe", "Raff Labrie", "Read"],
            },
            {
                  texts: ["Orderlion", "Stefan Strohmer", "Read"],
            },
            {
                  texts: ["Black Book", "Jaci Smith", "Read"],
            },
            {
                  texts: ["Trawa Energy", "David Budde", "Read"],
            },
      ];

      return <FeaturedContext.Provider value={{ cardData, clientReviews }}>{props.children}</FeaturedContext.Provider>;
}
export default Context;
