import { UserForm } from "@/app/components/UserForm/userForm";
import { fireEvent, render } from "@testing-library/react";

const user = {
  id: "1",
  firstName: "abc",
  lastName: "xyz",
  email: "dummy@test.com",
};

const props = {
  onAddUser: jest.fn(),
  existingUser: user,
  isViewMode: false,
  isEditMode: false,
  handleFormClose: jest.fn(),
};

describe("UserForm", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders for edit mode", () => {
    const { getByRole } = render(<UserForm {...props} isEditMode={true} />);
    const editForm = getByRole("button", { name: "Edit User" });
    fireEvent.click(editForm);
    expect(props.onAddUser).toHaveBeenCalled();

    const close = getByRole("button", { name: "Close" });
    fireEvent.click(close);
    expect(props.handleFormClose).toHaveBeenCalled();
  });

  it("renders when not in edit mode", () => {
    const { getByRole, container } = render(<UserForm {...props} />);
    const fname = container.querySelector("#firstName") as HTMLInputElement;
    fireEvent.change(fname, { value: "sam" });

    const lname = container.querySelector("#lastName") as HTMLInputElement;
    fireEvent.change(lname, { value: "kim" });

    const email = container.querySelector("#email") as HTMLInputElement;
    fireEvent.change(email, { value: "test@g.com" });

    const editForm = getByRole("button", { name: "Add User" });
    fireEvent.click(editForm);
    expect(props.onAddUser).toHaveBeenCalled();
  });
});
