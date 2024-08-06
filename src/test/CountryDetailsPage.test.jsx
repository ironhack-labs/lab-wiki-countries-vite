import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import CountryDetailsPage from "../pages/CountryDetailsPage";

vi.mock("axios");

describe("CountryDetailsPage component", async () => {
  const countryMock = {
    name: {
      common: "United States",
      official: "United States of America",
    },
    capital: ["Washington D.C."],
    borders: ["CAN", "MEX"],
    _id: "644ef419344bc00002674421",
    alpha2Code: "US",
    alpha3Code: "USA",
    area: 9372610,
  };

  afterEach(() => {
    axios.get.mockReset();
  });

  test("renders a headline 'Country Details'", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const headlineText = screen.getByText(/Country Details/i);
      expect(headlineText).toBeInTheDocument();
    });
  });

  test("renders a country name", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/United States/i)).toBeInTheDocument()
    );
  });

  test("renders a name of the country's capital", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/Washington D.C./i)).toBeInTheDocument()
    );
  });

  test("renders country area info in the format 'AREA km'", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/9372610 km/i)).toBeInTheDocument()
    );
  });

  test("renders bordering countries as links", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/CAN/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/MEX/i)).toBeInTheDocument()
    );
  });
});
