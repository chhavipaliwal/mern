import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  return (
    <></>
    // <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
    //   Github followers: {userData.followers}
    //   <img src={userData.avatar_url} alt="Git picture" width={300} />
    // </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/");
  return response.json();
};
