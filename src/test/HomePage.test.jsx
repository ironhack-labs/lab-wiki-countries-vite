import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

vi.mock("axios");

describe("HomePage component", async () => {
  const countriesMock = [
    {
      name: {
        common: "France",
      },
      alpha3Code: "FRA",
    },
    {
      name: {
        common: "Germany",
      },
      alpha3Code: "DEU",
    },
    {
      name: {
        common: "Spain",
      },
      alpha3Code: "ESP",
    },
    {
      name: {
        common: "Italy",
      },
      alpha3Code: "ITA",
    },
    {
      name: {
        common: "Portugal",
      },
      alpha3Code: "PRT",
    },
  ];

  afterEach(() => {
    axios.get.mockReset();
  });

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: countriesMock });
  });

  test("renders a headline 'WikiCountries: Your Guide to the World'", async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const headlineText = /WikiCountries: Your Guide to the World/i;
    await waitFor(() =>
      expect(screen.getByText(headlineText)).toBeInTheDocument()
    );
  });

  test("makes a request to Countries API using axios", async () => {
    const API_URL = "https://ih-countries-api.herokuapp.com/countries";
    const spyAxios = vi.spyOn(axios, "get");

    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    const networkRequestMade = spyAxios.mock.calls.length > 0;
    expect(networkRequestMade).toBeTruthy();

    await waitFor(() => expect(spyAxios).toHaveBeenCalledWith(API_URL));
  });

  test("renders the list of country names retrieved from the Countries API", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    for (const country of countriesMock) {
      const countryNameRegex = new RegExp(country.name.common, "i");
      const countryLink = await waitFor(() =>
        screen.getByText(countryNameRegex)
      );
      expect(countryLink).toBeInTheDocument();
    }
  });

  test("renders the list of countries retrieved from the Countries API as links", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    for (const country of countriesMock) {
      const countryNameRegex = new RegExp(country.name.common, "i");
      const countryLink = await waitFor(() =>
        screen.getByText(countryNameRegex).closest("a")
      );
      expect(countryLink).toBeInTheDocument();
      expect(countryLink.getAttribute("href")).toBe(`/${country.alpha3Code}`);
    }
  });
});
