"use client";
import React, { useState } from "react";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { UserTable } from "./components/UserTable/userTable";
import { UserForm } from "./components/UserForm/userForm";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>();
  const [isViewMode, setIsViewMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const addUser = (user: IUser) => {
    let userList = [...users];
    const existingUserIndex = userList.findIndex((u) => u.id === user.id);

    if (isEditMode && existingUserIndex !== -1) {
      userList[existingUserIndex] = user;
    } else {
      userList = [...userList, user];
    }
    setUsers(userList);
    setIsFormVisible(false);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleViewUser = (userId: string) => {
    const selectedUser = users.find((user) => user.id === userId);

    if (selectedUser) {
      setSelectedId(selectedUser.id);
      setIsFormVisible(true);
      setIsViewMode(true);
      setIsEditMode(false);
    }
  };

  const handleEditUser = (userId: string) => {
    const selectedUser = users.find((user) => user.id === userId);

    if (selectedUser) {
      setSelectedId(selectedUser.id);
      setIsEditMode(true);
      setIsViewMode(false);
      setIsFormVisible(true);
      console.log(users.find((user) => user.id === selectedId));
    }
  };

  const handleDeleteUser = (userId: string) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  };

  return (
    <main className="bg-white dark:bg-black flex flex-col justify-evenly h-dvh m-0">
      <div className="flex-none h-20 bg-zinc-400">
        <Header />
      </div>

      <div className="grow bg-zinc-200 flex flex-col items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg self-end font-bold my-3 mr-10 px-6 py-2 w-48 tracking-wider rounded-lg sm:px-0 sm:w-40"
          onClick={() => {
            setSelectedId("");
            setIsFormVisible(true);
            setIsEditMode(false);
          }}
        >
          Add User
        </button>

        {/* Render user form when the modal is visible */}
        {isFormVisible && (
          <UserForm
            onAddUser={addUser}
            existingUser={
              selectedId
                ? users.find((user) => user.id === selectedId)
                : undefined
            }
            isViewMode={isViewMode}
            isEditMode={isEditMode}
            handleFormClose={closeForm}
          />
        )}

        <div className="grow self-center w-9/12">
          <UserTable
            users={users}
            onViewUser={handleViewUser}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        </div>
      </div>

      <div className="flex-none h-20 justify-self-end bg-zinc-400">
        <Footer />
      </div>
    </main>
  );
}
