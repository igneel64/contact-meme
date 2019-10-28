const { fetch } = window;
const IMAGE_FLIP_MEMES = "https://api.imgflip.com/get_memes";
const IMAGE_FLIP_CAPTIONS = "https://api.imgflip.com/caption_image";

class ImageFlip {
  getMemes() {
    return fetch(IMAGE_FLIP_MEMES)
      .then(res => res.json())
      .then(jsonRes => jsonRes.data)
      .catch(err => {
        throw err;
      });
  }

  /**
   *
   * @param {object} memeData
   * @param {string} memeData.templateId The id of the meme template
   * @param {string} memeData.topText The top text
   * @param {string} memeData.bottomText The bottom text
   * @returns {Promise<any>}
   * @memberof ImageFlip
   */
  getCaption(memeData) {
    const captionData = new FormData();
    captionData.append("template_id", memeData.templateId);
    captionData.append("text0", memeData.topText);
    captionData.append("text1", memeData.bottomText);
    captionData.append("username", "someAccount"); // Safety first!
    captionData.append("password", "testAccount"); // Safety second!

    return fetch(IMAGE_FLIP_CAPTIONS, {
      method: "POST",
      body: captionData
    })
      .then(res => res.json())
      .then(jsonRes => jsonRes.data)
      .catch(err => {
        throw err;
      });
  }
}

export default new ImageFlip();
