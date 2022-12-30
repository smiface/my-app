// https://stackoverflow.com/questions/62295172/onclick-save-image-as-in-react
export const handleClickDownloadBlobImage = (linkimg: any) => {
  const bloblink = `data:image/png;base64,${linkimg}`;
  const img = new Image();
  // img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
  img.src = bloblink;

  img.onload = () => {
    // create Canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);
    // create a tag
    const a = document.createElement("a");
    a.download = "download.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
};
