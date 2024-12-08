import logoSlogan from './logo.svg';
import Header from './components/header/header';
import SectionServices from './components/section-services/section-services';
import SectionIntroduction from './components/section-introduction/section-introduction';
import SectionFollowUs from './components/section-follow-us/section-follow-us';
import Footer from './components/footer/footer';
import FastMessageButton from './components/fast-message-button/fast-message-button';
import SectionFaq from './components/section-faq/section-faq';
import SectionAboutUs from "./components/section-about-us/section-about-us";
import './App.css';

function App() {
  return (
    <div className="">
      <Header/>
      <div className="page-content">
        <div className="hero"></div>
        <SectionIntroduction />
        <SectionServices />
        <SectionFollowUs />
        <SectionFaq />
        <SectionAboutUs />
        <Footer />
        <FastMessageButton />
      </div>
    </div>
  );
}

export default App;
