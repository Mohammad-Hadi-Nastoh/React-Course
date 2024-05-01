import { Link } from "react-router-dom";

function Home() {
  return (
    <>
   <h1>This is some Text</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id et iste praesentium
     dignissimos rerum. Consectetur doloremque doloribus, error in quaerat
     similique voluptatum facere quod consequatur! Velit excepturi cupiditate ipsa.</p>
    <Link to="/Posts">Posts</Link>
    </>
  );
}

export default Home

