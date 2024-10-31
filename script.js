import { apiURL } from "./apiUrl.js";

//default movie
$.get(apiURL + "Venom", function (data) {
  console.log(data);
  $(".movie-type").html(data.Type);
  $(".plot").html(data.Plot);
  $(".title").html(data.Title);
  $(".type").html(data.Genre);
  $(".year").html(data.Year);
  $(".rate").html(data.imdbRating);
});

//Get data from search
$(".add").on("click", function () {
  let title = $(".search").val();
  movie(title);
});

function movie(title) {
  $.get(apiURL + title, function (data) {
    console.log(data);
    $(".poster").attr("src", data.Poster);
    $(".movie-type").html(data.Type);
    $(".plot").html(data.Plot);
    $(".title").html(data.Title);
    $(".type").html(data.Genre);
    $(".year").html(data.Year);
    $(".rate").html(data.imdbRating);
  });
}

//click on venom popular
$(".Venom").on("click", function () {
  let title = "Venom";
  movie(title);
});

//click on Money Heist popular
$(".Money-Heist").on("click", function () {
  let title = "Money Heist";
  movie(title);
});

//clickBreaking Bad popular
$(".Breaking-Bad").on("click", function () {
  let title = "Breaking Bad";
  movie(title);
});

//click on The Boys popular
$(".The-Boys").on("click", function () {
  let title = "The Boys";
  movie(title);
});

//click on Kung Fu Panda 4 popular
$(".Panda").on("click", function () {
  let title = "Kung Fu Panda 4";
  movie(title);
});

//click on  The Wolf of Wall Street popular
$(".Wall-Street").on("click", function () {
  let title = "The Wolf of Wall Street";
  movie(title);
});
