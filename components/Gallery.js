const Gallery = ({ data }) => {
  const media = [];
  data?.items?.forEach((item) => {
    item.carousel_media?.forEach((carousel_item, k) => {
      carousel_item.image_versions2?.candidates?.forEach((iv) => {
        media.push({ type: "image", ...iv });
      });
      carousel_item.video_versions?.forEach((vv) => {
        media.push({ type: "video", ...vv });
      });
    });

    item.image_versions2?.candidates?.forEach((iv) => {
      media.push({ type: "image", ...iv });
    });

    item.video_versions?.forEach((vv) => {
      media.push({ type: "video", ...vv });
    });
  });

  return (
    <div>
      {media.map((m) =>
        m.type === "image" ? <img src={m.url} /> : <video src={m.url} />
      )}
    </div>
  );
};

export default Gallery;
