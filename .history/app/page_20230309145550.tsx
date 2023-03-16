function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2"> 
       <h1 className="text-5xl font-bold mb-20">ChatGPT</h1> 

       <div>
        <div>
            <div>
                {/* Sun Icon */ }
                <h2>Examples</h2>
            </div>
            <div>
                <p className="infoText">"Explain Something to me"</p>
                <p className="infoText">"What is the difference between a dog and a cat?"</p>
                <p></p>
            </div>
        </div>
       </div>
    </div>
  );
}

export default HomePage;