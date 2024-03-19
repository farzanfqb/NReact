import Body from "./Component/Body"
const Title = () =>
    <img className="logo" src="https://images.unsplash.com/photo-1538377557518-6d3de7a5777e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
const Header = () =>
(
    <div className='header'>
        {Title()}
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);

function App() {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}

export default App;
