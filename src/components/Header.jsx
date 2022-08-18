import React, { useEffect } from "react";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";

import { handleDarkMode } from "../redux/themeSlice/themeSlice";
import { languageMode } from "../redux/languageSlice/languageSlice";

const Header = () => {
  const dispatch = useDispatch();

  const dark = useSelector((state) => state.theme.dark);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header>
      <h1>
        C<FontAwesomeIcon icon={faVirusCovid} color="teal" />
        VID-19
      </h1>
      {language ? (
        <>
          <h2>Global and Country Wise Cases of Corona Virus</h2>
          <p>(For a Particular country, select a Country from below)</p>
        </>
      ) : (
        <>
          <h2>Küresel ve Ülke Bilge Coronavirüs Vakaları</h2>
          <p>(Belirli bir ülke için aşağıdan bir Ülke seçin)</p>
        </>
      )}

      <div className="theme__mode" onClick={() => dispatch(handleDarkMode())}>
        {dark ? <FaSun></FaSun> : <FaMoon></FaMoon>}
      </div>

      <div className="language__mode" onClick={() => dispatch(languageMode())}>
        {language ? "EN" : "TR"}
      </div>
    </header>
  );
};

export default Header;
