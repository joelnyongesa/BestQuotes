import Home from "./Home";


function Landing(){
    // Navbar with two elements:
    /*
    BestQuotes on the Left.
    3 elements on the right
    */
   return(
    <>
    <nav className="flex justify-between m-7">
        <h1 className="text-5xl font-extrabold w-25">Best<span className="text-secondary">Quotes</span></h1>
        <ul className="flex justify-between">
            <li className="mr-5"><a href="#">Explore Quotes</a></li>
            <li className="mr-5 text-secondary"><button className="bg-transparent border border-secondary">Add Quote</button></li>
            <li ><button className="rounded bg-btnsecondary ">Contact Me</button></li>
        </ul>
    </nav>    
    <Home/>
    </>

   )
}



export default Landing;