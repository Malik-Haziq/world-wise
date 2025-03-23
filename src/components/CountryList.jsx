import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

import styles from "./CountryList.module.css";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Please add city by clicking on the map." />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}
