import axios from "axios";
import AddPlantForm from "../../../components/Form/AddPlantForm";

const AddPlant = () => {
  // 2.0 my requirement is add a plant to the sever. but during upload of picture we use choose file system
  // 2.2 place async
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const description = form?.description?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const image = form?.image?.files;
    const plantData = { name, category, description, price, quantity, image };
    console.log(plantData);
    // 2.1 as there is a network call so we use async in 2.2 the go to network call using axios. here address will be ' "https://api.imgbb.com/1/upload?key=YOUR_CLIENT_API_KEY"' from imgBB and get the api key and set it dynamically.

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
    );
  };
  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddPlant;
