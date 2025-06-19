import Button from "./components/Button";
import Subject from "./components/Subject";
import Option from "./components/Option";
import Title from "./components/Title";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return <Layout>
    <Home />
  </Layout>;

  // return (
  //   <div>
  //     <Button>Submit Answer</Button>
  //     <ThemeToggle />

  //     Subject
  //     <Subject imageSrc="/images/icon-html.svg">HTML</Subject>
  //     <Subject imageSrc="/images/icon-css.svg">CSS</Subject>
  //     <Subject imageSrc="/images/icon-js.svg">Javascript</Subject>
  //     <Subject imageSrc="/images/icon-accessibility.svg">Accessibility</Subject>

  //     Option
  //     <Option letter={String.fromCharCode(65)}>4.5 : 1</Option>
  //     <Option letter={String.fromCharCode(66)} state="selected">3 : 1</Option>
  //     <Option letter={String.fromCharCode(67)} state="correct">2.5 : 1</Option>
  //     <Option letter={String.fromCharCode(68)} state="error">5 : 1</Option>

  //     Title
  //     <Title title="Accessibilty" imageSrc="/images/icon-accessibility.svg" />
  //   </div>
  // );
}

export default App;
