// 4045f72ba05f7bac14ac82492309e18c;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDQ1ZjcyYmEwNWY3YmFjMTRhYzgyNDkyMzA5ZTE4YyIsInN1YiI6IjY2NmIxM2YwNmUzMThlZTU5Yjc2MTZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MEAa79BPfcUF8p7mvCO63epCAEZ4jo-29KjIWgcQXV4",
  },
};

export const fetchMovies = async (genres) => {
  const response = await fetch(
    genres
      ? `https://api.themoviedb.org/3/movie/${genres}/similar?api_key=4045f72ba05f7bac14ac82492309e18c`
      : "https://api.themoviedb.org/3/discover/movie?api_key=4045f72ba05f7bac14ac82492309e18c",
    options
  );
  const data = await response.json();
  return data;
};
export const fetchSingleMovie = async (id) => {
  console.log({ fetchSingleMovie });
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4045f72ba05f7bac14ac82492309e18c`,
    options
  );
  const data = await response.json();
  return data;
};
export const fetchgenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4045f72ba05f7bac14ac82492309e18c",
    options
  );
  const data = await response.json();
  return data;
};
