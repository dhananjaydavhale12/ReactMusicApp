import './Home.css';

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


const Home = () => {
      return (
        <>
          <div className="Head">
              Release This Week
          </div>
          <div className="Container">
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
          </div>

          <div className="Head">
              Feature Play List
          </div>
          <div className="Container">
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
            {MCard()}
          </div>

        </>
      );
      
      
    };

    export default Home;