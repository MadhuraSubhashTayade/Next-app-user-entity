"use client";
import { IUser } from "@/app/page";
import React, {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

interface IUserFormProps {
  onAddUser: (user: IUser) => void;
  existingUser: IUser | undefined;
  isViewMode: boolean;
  isEditMode: boolean;
  handleFormClose: () => void;
}

export const UserForm: FC<IUserFormProps> = ({
  onAddUser,
  existingUser,
  isViewMode,
  isEditMode,
  handleFormClose,
}: IUserFormProps): ReactElement => {
  const [user, setUser] = useState<IUser>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (existingUser) setUser(existingUser);
  }, [existingUser]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddUser(user);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    isEditMode
      ? setUser({
          ...user,
          [e.target.name]: e.target.value,
        })
      : setUser({
          ...user,
          id: Date.now().toString(36),
          [e.target.name]: e.target.value,
        });
  };

  return (
    <div className="flex justify-center items-center fixed bg-opacity-100 z-20 inset-0 backdrop-filter backdrop-blur overflow-y-auto">
      <div className="w-6/12 bg-[#d0ebff] rounded-lg p-8">
        <form className="size-full" onSubmit={handleSubmit}>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            required
            className="w-full mb-4 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            required
            className="w-full mb-4 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
            className="w-full mb-4 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
          <div className="flex justify-end xs:flex xs:flex-col">
            <button
              className={`mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
                isViewMode ? "opacity-30 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isViewMode}
            >
              {isEditMode ? "Edit User" : "Add User"}
            </button>
            <button
              className="text-gray-500 xs:mt-4"
              type="button"
              onClick={handleFormClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
