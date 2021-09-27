import React from 'react';

const Country = ({
  name,
  capital,
  flags,
  region,
  subregion,
  population,
  borders,
  languages,
}) => {
  return (
    <article className="card">
      <img className="flag-img" src={flags[0]} alt={`${name}_flag`} />
      <h3 className="country-name">{name}</h3>
      <p className="capital-name">Capital: {capital}</p>
      <p className="continent">Region: {region}</p>
      <div className="languages">
        Languages Spoken:
        {languages.map((lang, index) => {
          return <p key={index}>{lang.name}</p>;
        })}
      </div>
      <p className="population">Population: {population}</p>
      <div className="borders">
        Borders Shared: <span> </span>
        {borders
          ? borders.map((border, index) => {
              if (index === borders.length - 1) {
                return <span key={index}>{border}</span>;
              } else {
                return <span key={index}>{border},</span>;
              }
            })
          : 'None'}
      </div>
    </article>
  );
};

export default Country;
