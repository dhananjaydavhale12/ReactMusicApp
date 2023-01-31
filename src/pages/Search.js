import './Home.css';
import './Search.css';


const MCard = () => {
  return (
      <>
        <div className='MCard'>
              <img src="https://th.bing.com/th/id/OIP.BSXZridvu5cbILYJH-0HIgHaKs?pid=ImgDet&rs=1" alt="a"/>
              <p>Uska Hi Banana</p>
            </div>
      </>
  );
}


const Search = () => {
      return (
        <>
            <div className="SearchSec">
                <input type="text" placeholder='Search' /> 
            </div>
                              
            <div className='Container Songs'>
                {MCard()}
                {MCard()}
                {MCard()}
                {MCard()}
            </div>
            <div>
            
            </div>

        </>
      );
      
      
    };

    export default Search;