import Home from "@/app/page";
import { cleanup, render, screen, within } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Eventogy App", () => {

  beforeEach(async () => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  })

  it("Page renders", () => {

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    const searchBar = within(header).getByRole("searchbox");
    expect(searchBar).toBeInTheDocument();
  });

  it("Page successfully recieves data", async () => {
    await act(() => {
      const events = screen.getByTestId("events");
      const eventItems = within(events).getAllByTestId("eventItem");
      expect(eventItems).toBeGreaterThan(0);
    })
  });

})