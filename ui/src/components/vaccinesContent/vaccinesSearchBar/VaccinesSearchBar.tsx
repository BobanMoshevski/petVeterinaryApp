import { useState } from "react";
import {
  ClearSearchBarHandlerType,
  MouseEventType,
  OnMouseEnterHandlerType,
  OnMouseLeaveHandlerType,
  SelectedOptionHandlerType,
  SelectOptionType,
  SelectOrderByStateType,
  SelectSortByStateType,
  UpdateSearchParamsType,
  VaccinesSearchBarType,
} from "./VaccinesSearchBarTypes";

const VaccinesSearchBar: React.FC<VaccinesSearchBarType> = ({
  navigate,
  searchParams,
}: VaccinesSearchBarType) => {
  const [selectSortBy, setSelectSortBy]: SelectSortByStateType =
    useState<string>(searchParams.get("SortBy") || "");
  const [selectOrderBy, setSelectOrderBy]: SelectOrderByStateType =
    useState<string>(searchParams.get("IsDescending") || "");

  const selectSortByOptions: SelectOptionType[] = [
    { label: "Sort By", value: "" },
    { label: "Name", value: "Name" },
  ];

  const selectOrderByOptions: SelectOptionType[] = [
    { label: "Order By", value: "" },
    { label: "Ascending", value: "false" },
    { label: "Descending", value: "true" },
  ];

  const updateSearchParams: UpdateSearchParamsType = (
    key: string,
    value: string,
  ) => {
    if (value !== "") {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  const onMouseEnterHandler: OnMouseEnterHandlerType = (e: MouseEventType) => {
    e.currentTarget.classList.add("bg-secondary", "text-white");
  };

  const onMouseLeaveHandler: OnMouseLeaveHandlerType = (
    selectBy: string,
    optionValue: string,
    e: MouseEventType,
  ) => {
    if (selectBy !== optionValue) {
      e.currentTarget.classList.remove("bg-secondary", "text-white");
    }
  };

  const selectedOptionHandler: SelectedOptionHandlerType = (
    optionValue: string,
    query: string,
  ) => {
    if (query === "SortBy") {
      setSelectSortBy(optionValue);
    }
    if (query === "IsDescending") {
      setSelectOrderBy(optionValue);
    }
    updateSearchParams(query, optionValue);
  };

  const clearSearchBarHandler: ClearSearchBarHandlerType = () => {
    setSelectSortBy("");
    setSelectOrderBy("");
    navigate("", { replace: true });
  };

  return (
    <>
      <div className="col-12 my-4">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/vaccine/new", { replace: true })}
        >
          Create Vaccine
        </button>
      </div>
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <input
              className="form-control border border-secondary input-focus-shadow"
              placeholder="Search Vaccine Name"
              type="text"
              value={searchParams.get("Name") || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateSearchParams("Name", e.target.value)
              }
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2 my-md-0">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary border border-secondary text-dark dropdown-toggle d-flex justify-content-between align-items-center hover-light input-focus-shadow w-100"
                type="button"
                data-bs-toggle="dropdown"
              >
                {selectSortBy
                  ? `Sort By: ${
                      selectSortByOptions.find(
                        (sortBy: SelectOptionType) =>
                          sortBy.value === selectSortBy,
                      )?.label
                    }`
                  : "Sort By"}
              </button>
              <ul className="dropdown-menu py-0 w-100">
                {selectSortByOptions.map((option: SelectOptionType) => (
                  <li key={option.value}>
                    <button
                      className={`dropdown-item ${selectSortBy === option.value ? "bg-secondary text-white" : ""}`}
                      type="button"
                      onMouseEnter={(e: MouseEventType) =>
                        onMouseEnterHandler(e)
                      }
                      onMouseLeave={(e: MouseEventType) =>
                        onMouseLeaveHandler(selectSortBy, option.value, e)
                      }
                      onClick={() =>
                        selectedOptionHandler(option.value, "SortBy")
                      }
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-0 mt-md-2 mt-lg-0">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary border border-secondary text-dark dropdown-toggle d-flex justify-content-between align-items-center hover-light input-focus-shadow w-100"
                type="button"
                data-bs-toggle="dropdown"
              >
                {selectOrderBy
                  ? `Order By: ${
                      selectOrderByOptions.find(
                        (orderBy: SelectOptionType) =>
                          orderBy.value === selectOrderBy,
                      )?.label
                    }`
                  : "Order By"}
              </button>
              <ul className="dropdown-menu py-0 w-100">
                {selectOrderByOptions.map((option: SelectOptionType) => (
                  <li key={option.value}>
                    <button
                      className={`dropdown-item ${selectOrderBy === option.value ? "bg-secondary text-white" : ""}`}
                      type="button"
                      onMouseEnter={(e: MouseEventType) =>
                        onMouseEnterHandler(e)
                      }
                      onMouseLeave={(e: MouseEventType) =>
                        onMouseLeaveHandler(selectOrderBy, option.value, e)
                      }
                      onClick={() =>
                        selectedOptionHandler(option.value, "IsDescending")
                      }
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-lg-end mt-2 mt-lg-0">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => clearSearchBarHandler()}
            >
              Clear Search Bar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccinesSearchBar;
