
// const COMPPracticeListing = (props) => {
const COMPPracticeListing = ({ blog, title }) => {

    // const blog = props.blogs; // blogs come from parent
    // const title = props.title; // blogs come from parent

    // console.log(props, blog)

    return (
        <div>
        <h2>{ title }</h2>
        {blog.slice(0, 4).map((blogItem) => (
            <div className="blogPreview" key={blogItem.id}>
                <h2>{ blogItem.title }</h2>
                <p>Written by { blogItem.author }</p>
            </div>
        ))}
        
        </div>
    );
}

export default COMPPracticeListing;




// import Navbar from './components/Navbar';
// import FooterComp from './components/Footer';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HomePage />
//       <FooterComp />
//     </div>
//   );
// }

// export default App;
