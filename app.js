var url = "https://randomuser.me/api/";

axios
  .get(url)
  .then((res) => {
    const data = res.data.results[0];
    const name = res.data.results[0].name;
    const gender = res.data.results[0].gender;
    const location = res.data.results[0].location;

    document.getElementById("user").src = data.picture.large;
    document.getElementById(
      "username"
    ).innerText = `${name.title} ${name.last} ${name.first}`;
    document.getElementById(
      "info"
    ).innerText = `${location.state}, ${location.country}`;
  })
  .catch((err) => console.error("Something went wrong"));
