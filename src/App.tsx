// delete npm install @mui/material @emotion/react @emotion/styled
import Header from "./components/Header";
import style from "./App.module.css";
import LineHeading from "./components/LineHeading";
import BuyCard from "./components/BuyCard";
import Footer from "./components/Footer";
import SocialsContainer from "./components/SocialsContainer";
import ProductImgCarousel from "./components/ProductImgCarousel";
import CardsContainer from "./components/CardsContainer";
function App() {
	return (
		<div className={style.container}>
			<Header />

			<div style={{marginBottom:"2rem"}}>
				<LineHeading>WOMEN'S APPAREL BRAND</LineHeading>
				<ProductImgCarousel></ProductImgCarousel>
			</div>	
      
			<div>
				<LineHeading>FEATURED ITEMS</LineHeading>
				<CardsContainer>
					<BuyCard></BuyCard>
					<BuyCard></BuyCard>
					<BuyCard></BuyCard>
				</CardsContainer>
			</div>

			<div
				style={{
					position: "fixed",
					zIndex: 5,
					top: "50%",
					transform: "translate(0, -50%)",
				}}
			>
				<SocialsContainer></SocialsContainer>
			</div>
			<Footer />
		</div>
	);
}

export default App;
