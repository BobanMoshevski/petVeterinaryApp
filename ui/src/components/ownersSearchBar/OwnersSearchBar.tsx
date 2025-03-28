import { useEffect, useMemo, useState } from "react";
import {
  Location,
  useLocation,
  NavigateFunction,
  useNavigate,
} from "react-router";
import {
  SearchByNameStateType,
  SearchBySurnameStateType,
  SearchHandlerType,
  SearchIsDescendingStateType,
  SearchSortByStateType,
  UpdateSearchParamsType,
} from "./OwnersSearchBarTypes";
import "./OwnersSearchBarStyle.css";

const OwnersSearchBar: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();
  const searchParams: URLSearchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const [searchByName, setSearchByName]: SearchByNameStateType =
    useState<string>(searchParams.get("Name") || "");
  const [searchBySurname, setSearchBySurname]: SearchBySurnameStateType =
    useState<string>(searchParams.get("Surname") || "");
  const [sortBy, setSortBy]: SearchSortByStateType = useState<string>(
    searchParams.get("SortBy") || "",
  );
  const [isDescending, setIsDescending]: SearchIsDescendingStateType = useState<
    boolean | null
  >(() => {
    const isDescendingParam: string | null = searchParams.get("IsDescending");

    if (isDescendingParam === "true") {
      return true;
    }

    if (isDescendingParam === "false") {
      return false;
    }

    return null;
  });

  useEffect(() => {
    setSearchByName(searchParams.get("Name") || "");
    setSearchBySurname(searchParams.get("Surname") || "");
    setSortBy(searchParams.get("SortBy") || "");
    const isDescendingParam: string | null = searchParams.get("IsDescending");

    if (isDescendingParam === "true") {
      setIsDescending(true);
    } else if (isDescendingParam === "false") {
      setIsDescending(false);
    } else {
      setIsDescending(null);
    }
  }, [searchParams]);

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

  const onChangeByNameHandler: SearchHandlerType = (query: string) => {
    setSearchByName(query);
    updateSearchParams("Name", query);
  };

  const onChangeBySurnameHandler: SearchHandlerType = (query: string) => {
    setSearchBySurname(query);
    updateSearchParams("Surname", query);
  };

  const onChangeSortByHandler: SearchHandlerType = (query: string) => {
    setSortBy(query);
    updateSearchParams("SortBy", query);
  };

  const onIsDescendingHandler: SearchHandlerType = (query: string) => {
    let parsedValue: boolean | null;

    if (query === "true") {
      parsedValue = true;
    } else if (query === "false") {
      parsedValue = false;
    } else {
      parsedValue = null;
    }
    setIsDescending(parsedValue);

    if (parsedValue !== null) {
      updateSearchParams("IsDescending", query);
    } else {
      updateSearchParams("IsDescending", "");
    }
  };

  const clearSearchBars: () => void = () => {
    setSearchByName("");
    setSearchBySurname("");
    setSortBy("");
    setIsDescending(null);
    navigate("", { replace: true });
  };

  return (
    <>
      <div className="col-12 my-4">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/owner/new", { replace: true })}
        >
          Create Owner
        </button>
      </div>
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 col-xl-3">
            <input
              className="form-control border border-dark"
              placeholder="Search by name"
              type="text"
              value={searchByName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeByNameHandler(e.target.value)
              }
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-2 my-md-0">
            <input
              className="form-control border border-dark"
              placeholder="Search by surname"
              type="text"
              value={searchBySurname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeBySurnameHandler(e.target.value)
              }
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-2 my-md-2 my-lg-0">
            <select
              className="form-select border border-dark cursor-pointer"
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeSortByHandler(e.target.value)
              }
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="surname">Surname</option>
            </select>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-2 my-2 my-lg-0">
            <select
              className="form-select border border-dark cursor-pointer"
              value={isDescending === null ? "" : isDescending.toString()}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onIsDescendingHandler(e.target.value)
              }
            >
              <option value="">Order by</option>
              <option value="false">Ascending</option>
              <option value="true">Descending</option>
            </select>
          </div>
          <div className="col-12 col-lg-4 col-xl-2 d-flex justify-content-xl-end mt-lg-2 mt-xl-0">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => clearSearchBars()}
            >
              Clear Search Bar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnersSearchBar;
