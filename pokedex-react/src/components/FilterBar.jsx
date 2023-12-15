import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const FilterBar = () => {
  const { active, handleCheckbox, setActive } = useContext(PokemonContext);

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <Button
        style={{ marginRight: "2rem", width: "2rem" }}
        onClick={closeSidebar}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>

      <div className="filter-by-type">
        <span>Type</span>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Plant</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fire</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="bug"
            id="bug"
          />
          <label htmlFor="bug">Bug</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Fairy</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragon</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">Shadow</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">Ground</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Steel</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dark"
            id="dark"
          />
          <label htmlFor="dark">Dark</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Electric</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Fighting</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">Flying</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ice"
            id="ice"
          />
          <label htmlFor="ice">Ice</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Poison</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">Rock</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="water"
            id="water"
          />
          <label htmlFor="water">Water</label>
        </div>
      </div>
    </div>
  );
};
