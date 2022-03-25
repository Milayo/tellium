import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { firestore } from "../firebase/firebase.utils";
import { collection, getDocs } from "@firebase/firestore";
import { setCurrentUsers } from "../redux/users/user.actions.js";

export const getAllUsers = async () => {
  const getUsers = collection(firestore, "users");
  const allUsers = await getDocs(getUsers);
  let fetchedUsers = [];

  allUsers.forEach((doc) => {
    const fetchedUser = {
      id: doc.id,
      ...doc.data(),
    };
    fetchedUsers.push(fetchedUser);
  });
  return fetchedUsers;
};

export const GetTheUsers = () => {
  const dispatch = useDispatch();
  const getUsers = async () => {
    const fetchedUsers = await getAllUsers();
    dispatch(setCurrentUsers(fetchedUsers));
  };
  useEffect(() => {
    getUsers();
  }, []);
    
};
