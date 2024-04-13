import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <header className='flex justify-center'>
            <h2 className="text-gray-900 text-5xl font-semibold md:pl-20">Weather</h2>
      </header>

      <div className='flex justify-start pl-7 md:justify-center pb-12 md:pl-19 pt-7 '>
        <div>
          <h4 className='text-3xl font-light from-neutral-600 pr-5'>Search: </h4>
        </div>
        <div>
          {/* <input type="text" className='text-3xl w-96' placeholder="Search for a city" /> */}
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white md:w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 pt-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-l" placeholder="Search for a city..." type="text" name="search"/>
        </div>
      </div>


    <div className='pl-10 pr-10 md:pl-44 md:flex'>

      <div id="1st two" className='flex-1'>

        <div>
          <div className="card hover:shadow-lg md:w-5/6 md:h-96">
            <div>
            <img src="images/newyorkimg.jpg" alt="new york" className="w-full h-80" ></img>
            {/* <img src="images/newyorkimg.jpg" alt="new york" className="block sm:hidden w-full h-48 object-cover" ></img> */}
            </div>
            <div>
              <div className='flex justify-center md:justify-start'>
                <span className="font-bold text-lg">New York</span>
              </div>
              <div className='flex justify-center md:justify-start'>
                <span className="block text-gray-500 text-md">USA</span>
              </div>
            </div>
            {/* card */}
          </div>
        </div>

        <div>
          <div className="card hover:shadow-lg md:w-5/6 md:h-96">
            <div>
            <img src="images/london.jpg" alt="new york" className="w-full h-80" ></img>
            {/* <img src="images/newyorkimg.jpg" alt="new york" className="block sm:hidden w-full h-48 object-cover" ></img> */}
            </div>
            <div>
              <div className='flex justify-center md:justify-start'>
                <span className="font-bold text-lg">London</span>
              </div>
              <div className='flex justify-center md:justify-start'>
                <span className="block text-gray-500 text-md">UK</span>
              </div>
              
            </div>
            {/* card */}
          </div>
        </div>
      </div>
      


      <div id="2nd two" className='flex-1'>
        <div>
          <div className="card hover:shadow-lg md:w-5/6 md:h-96">
            <div>
            <img src="images/delhi.jpg" alt="new york" className="w-full h-80" ></img>
            {/* <img src="images/newyorkimg.jpg" alt="new york" className="block sm:hidden w-full h-48 object-cover" ></img> */}
            </div>

            <div>
              <div className='flex justify-center md:justify-start'>
                <span className="font-bold text-lg">Delhi</span>
              </div>

              <div className='flex justify-center md:justify-start'>
                <span className="block text-gray-500 text-md">India</span>
              </div>
            </div>
            
            {/* card */}
          </div>
        </div>

        <div>
          <div className="card hover:shadow-lg md:w-5/6 md:h-96">
            <div>
            <img src="images/seoul.jpg" alt="new york" className="w-full h-80" ></img>
            {/* <img src="images/newyorkimg.jpg" alt="new york" className="block sm:hidden w-full h-48 object-cover" ></img> */}
            </div>


            <div>
              <div className='flex justify-center md:justify-start'>
                <span className="font-bold text-lg">Seoul</span>
              </div>
              <div className='flex justify-center md:justify-start'>
                <span className="block text-gray-500 text-md">South Korea</span>
              </div>
            </div>
            {/* card */}
          </div>
        </div>


      </div>

        
    
      </div>


    </div>
  );
}

export default App;
