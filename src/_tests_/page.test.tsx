import Home from "@/app/page";
import { fireEvent, render } from "@testing-library/react";

describe("Home", () => {
  it("renders", () => {
    const {getByRole} = render(<Home />);
    const addUser=getByRole('button',{name:'Add User'})
    fireEvent.click(addUser)
  });
});
