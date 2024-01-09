import axios from "axios";
import { useState, useEffect } from "react";
const apidepostagem = "https://api-fake-blog.herokuapp.com/postagens";
export function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get(apidepostagem).then((response) => {
        setData(response.data);
        });
    }, []);

  return { data };
}