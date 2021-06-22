import { getClient } from "../../lib/igInstance";
import { urlSegmentToInstagramId } from "instagram-id-to-url-segment";

const handler = async (req, res) => {
  const client = await getClient();

  const info = await client.media.info(urlSegmentToInstagramId(req.query.id));

  res.json(info);
};

export default handler;
