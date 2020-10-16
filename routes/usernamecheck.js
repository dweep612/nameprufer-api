const express = require("express");
const router = express.Router();

const {
  githubCheck,
  gitlabCheck,
  bitbucketCheck,
  facebookCheck,
  instagramCheck,
  twitterCheck,
  youtubeCheck,
  redditCheck,
  behanceCheck,
  slideshareCheck
} = require("../controllers/usernamecheck");

// Repo Hosting Services
router.get("/github/:username", githubCheck);
router.get("/gitlab/:username", gitlabCheck);
router.get("/bitbucket/:username", bitbucketCheck);

// Social Media
router.get("/facebook/:username", facebookCheck);
router.get("/instagram/:username", instagramCheck);
router.get("/twitter/:username", twitterCheck);

// Other Websites
router.get("/youtube/:username", youtubeCheck);
router.get("/reddit/:username", redditCheck);
router.get("/behance/:username", behanceCheck);
router.get("/slideshare/:username", slideshareCheck);

module.exports = router;
