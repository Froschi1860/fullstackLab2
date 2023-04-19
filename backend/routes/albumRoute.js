const express = require("express")
const path = require("path")
const { getAllAlbums, getAlbumByTitle, createAlbum, updateAlbum, deleteAlbum } = require(path.join(__dirname, "/../controller/albumController"))


const router = express.Router()

router.route("/")
  .get(getAllAlbums)
  .post(createAlbum)

router.route("/:title")
  .get(getAlbumByTitle)

router.route("/:id")
  .put(updateAlbum)
  .delete(deleteAlbum)

module.exports = router