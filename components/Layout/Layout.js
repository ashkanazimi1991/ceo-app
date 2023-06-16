import Footer from "../Footer/footer"


const Layout = ({ children}) => {
    return (
        <div className="contant ">
            {children}
            <Footer/>
        </div>
    )
}

export default Layout