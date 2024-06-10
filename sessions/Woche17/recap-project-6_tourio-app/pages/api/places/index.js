import dbConnect from "../../../db/connect.js";
import Place from "../../../db/models/Place.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }
  // pages/api/index.js
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      console.log(placeData);
      await Place.create(placeData);

      response.status(201).json({ status: "Joke created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
