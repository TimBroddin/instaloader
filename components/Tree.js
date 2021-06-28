const Tree = ({ data }) =>
  data ? (
    <ul>
      {data.items?.map((item) => (
        <li key={`item-${item.id}`}>
          {item.product_type}
          <ul>
            <li>
              {item.carousel_media?.map((carousel_item, k) => (
                <li key={`carousel-${carousel_item.id}`}>
                  Slide {k + 1}
                  <ul>
                    <li>
                      image_versions:
                      <ul>
                        {carousel_item.image_versions2.candidates.map((iv) => (
                          <li key={`carousel-iv-${iv.url}`}>
                            <a href={iv.url} target="_blank">
                              {iv.width}x{iv.height}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {carousel_item.video_versions && (
                      <li>
                        video_versions:
                        <ul>
                          {carousel_item.video_versions?.map((vv) => (
                            <li key={`carousel-vv-${vv.url}`}>
                              <a href={vv.url} target="_blank">
                                {vv.width}x{vv.height}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </li>
              ))}
              {item.image_versions2 && (
                <li>
                  <ul>
                    {item.image_versions2.candidates.map((iv) => (
                      <li key={`carousel-iv-${iv.url}`}>
                        <a href={iv.url} target="_blank">
                          {iv.width}x{iv.height}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {item.video_versions && (
                <li>
                  <ul>
                    {item.ideo_versions.map((vv) => (
                      <li key={`carousel-iv-${vv.url}`}>
                        <a href={vv.url} target="_blank">
                          {vv.width}x{vv.height}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  ) : null;

export default Tree;
