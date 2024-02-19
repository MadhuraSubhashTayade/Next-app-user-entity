"use client";
import { IUser } from "@/app/page";
import React, { ReactElement } from "react";

interface IUserTableProps {
  users: IUser[];
  onViewUser: (id: string) => void;
  onEditUser: (id: string) => void;
  onDeleteUser: (id: string) => void;
}

export const UserTable: React.FC<IUserTableProps> = ({
  users,
  onViewUser,
  onEditUser,
  onDeleteUser,
}: IUserTableProps): ReactElement => {
  if (!users.length)
    return (
      <div className="flex justify-center items-center sm:h-[200px] sm:mt-4 text-black">
        <span>No users data present !</span>
      </div>
    );

  return (
    <table className="text-zinc-800 table-fixed border-collapse w-full border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">
            First Name
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Last Name
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left sm:w-[90px]">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => {
            return (
              user && (
                <tr
                  key={user.id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-left truncate">
                    {user.firstName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left truncate">
                    {user.lastName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left truncate">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left sm:w-fit">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 2xl:mr-2 xs:mr-2 lg:mr-2 mt-2 lg:mt-2 xs:px-2 xs:py-1"
                      onClick={() => onViewUser(user.id)}
                    >
                      View
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 2xl:mr-2 xs:mr-2 lg:mr-0 mt-2 lg:mt-2 xs:px-2 xs:py-1"
                      onClick={() => onEditUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded 2xl:mr-2 xs:mr-2 lg:mr-0 mt-2 lg:mt-2 xs:px-2 xs:py-1"
                      onClick={() => onDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            );
          })}
      </tbody>
    </table>
  );
};
