import { useState, useEffect } from 'react';
import './App.css';
import InfoList from './components/InfoList/InfoList';
import Pagination from './components/Pagination/Pagination';



function App() {

  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = info.slice(firstPostIndex, lastPostIndex);

   console.log(currentPosts);
  return (
    <div className="App">
      <InfoList info={currentPosts}/>
      <Pagination
                totalPosts={info.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </div>
  );
}

export default App;
