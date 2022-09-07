"use strict"

const axios = require("axios")

// This is an example consumer that accesses the dog-sleep via HTTP
// TODO: replace these functions with your actual ones
 
// Gets multiple entries from the dog-sleep
exports.getMeDogs = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/sleep",
    headers: { Accept: "application/json" },
  })
}

// Gets a single entry by ID from the dog-sleep
exports.getMeDog = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/sleep/1",
    headers: { Accept: "application/json" },
  })
}

exports.getMeDogsWalk = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/walk",
    headers: { Accept: "application/json" },
  })
}

// Gets a single entry by ID from the dog-sleep
exports.getMeDogWalk = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/walk/1",
    headers: { Accept: "application/json" },
  })
}


exports.getMeDogsRegister = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/register",
    headers: { Accept: "application/json" },
  })
}

// Gets a single entry by ID from the dog-sleep
exports.getMeDogRegister = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/register/1",
    headers: { Accept: "application/json" },
  })
}

exports.getMeDogsPlay = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/play",
    headers: { Accept: "application/json" },
  })
}

// Gets a single entry by ID from the dog-sleep
exports.getMeDogPlay = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/play/1",
    headers: { Accept: "application/json" },
  })
}
