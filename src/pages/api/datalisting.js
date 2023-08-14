import { data } from "../Data/ListingTerbaru/DataTerbaru.json";

export default async function handler(req, res) {
  res.status(200).json(data);
}
