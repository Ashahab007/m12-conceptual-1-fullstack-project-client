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
    // 2.3 in files apply [0]
    const image = form?.image?.files[0];
    // 2.4  then convert the image in a form as object
    const imageFormData = new FormData();
    imageFormData.append("image", image); //the name should be image as per IMGBB documentation

    // 2.1 as there is a network call i.e post method so we use async in 2.2 the go to network call using axios. here address will be "https://api.imgbb.com/1/upload?key=YOUR_CLIENT_API_KEY --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" from imgBB and get the api key and set it dynamically. Note: "--form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" this portion of api is form image data send as object.

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      // 2.5 send the imageFormData as object
      imageFormData
    );
    console.log(data);
    // 2.6 set in variable then send the imgURL in plantData
    const imgUrl = data?.data?.display_url;

    const plantData = {
      name,
      category,
      description,
      price,
      quantity,
      image: imgUrl,
    };

    console.table(plantData);
  };
  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddPlant;
