import { useState, useEffect } from 'react';
import listsService from "../services/listsService"

function Lists() {
  const [data, setData] = useState([{ title: '', id: 0 }]);

  useEffect(() => {
    listsService.getLists().then(lists => setData(lists))
  }, [])

  return (
    <>
      <p>Les dernières listes de tous vos amis.</p>
      <p></p>
      <ul>{data.map(list => {
        if (list.id < 20) {
          return <li key={list.id}>{list.title}</li>
        }
      })}
      </ul>
    </>
  );
}

export default Lists;