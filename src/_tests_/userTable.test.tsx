import { UserTable } from "@/app/components/UserTable/userTable";
import { fireEvent, render } from "@testing-library/react";

const user = {
  id: "1",
  firstName: "abc",
  lastName: "xyz",
  email: "dummy@test.com",
};

const props = {
  users: [user],
  onViewUser: jest.fn(),
  onEditUser: jest.fn(),
  onDeleteUser: jest.fn(),
};

describe("UserTable", () => {
  it("renders uesrs with action buttons", () => {
    const { getByText } = render(<UserTable {...props} />);
    const viewBtn = getByText(/view/i);
    fireEvent.click(viewBtn);
    expect(props.onViewUser).toHaveBeenCalled();

    const editBtn = getByText(/edit/i);
    fireEvent.click(editBtn);
    expect(props.onEditUser).toHaveBeenCalled();

    const deleteBtn = getByText(/delete/i);
    fireEvent.click(deleteBtn);
    expect(props.onDeleteUser).toHaveBeenCalled();
  });

  it("renders no data when no users present", () => {
    const { getByText } = render(<UserTable {...props} users={[]} />);
    getByText(/No users data present/i);
  });
});
