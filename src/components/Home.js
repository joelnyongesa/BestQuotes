function Home(){
    // Two containers, side by side.
    return(
        <div className="flex h-screen">
            <div className="flex-1 w-3/4 border m-5 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl p-5 font-bold text-center">
                    Need motivational quotes to lift your moods, spirit and fire up the motivated side of you? Welcome to Best<span className="text-secondary">Quotes</span>
                    </h1>
                </div>
                <div className="mb-5">
                    <p className="text-xl">Elevate your moods, refresh your minds and stay productive.</p>
                </div>
            </div>

            <div className="flex-1 w-3/4 border m-5">
  <div className="max-h-full">
    <img src="https://images.pexels.com/photos/846080/pexels-photo-846080.jpeg?auto=compress&cs=tinysrgb&w=1600" className="object-contain h-full w-full hover:object-scale-down" alt="Image" />
  </div>
</div>

        </div>

    )
}



export default Home;