import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserFollow from "../UserFollow/UserFollow";
import { getAllUsers } from "../../api/UserRequests";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know....</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <UserFollow person={person} key={id} />;
        }
        return null;
      })}
    </div>
  );
};
