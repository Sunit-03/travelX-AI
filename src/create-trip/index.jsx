import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { chatSession } from "@/service/model";
import React, { useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = React.useState();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [formData, setFormData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate()
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  console.log(formData);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      (formData?.noOfDays > 15 && !formData?.location) ||
      !formData?.budget ||
      !formData.travellers
    ) {
      toast("Please Complete details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
    .replace("{location}",formData?.location?.label)
    .replace("{totalDays}", formData?.noOfDays)
    .replace("{travellers}", formData?.travellers)
    .replace("{budget}", formData?.budget)
    .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    saveAiTrip(result?.response?.text())
    };
  const saveAiTrip = async (tripDATA) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docID = Date.now().toString();
    await setDoc(doc(db, "AI-trip", docID), {
      userSelection: formData,
      tripData: JSON.parse(tripDATA),
      userEmail: user?.email,
      id: docID,
    });
    setLoading(false);
    navigate('/view-trip/'+docID)
  };
  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: `application/json`,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h1 className="font-bold text-3xl">
        Tell your travel preferences 🏖️🏔️🏕️
      </h1>
      <p className="mt-3 text-blue-500 text-xl">
        Provide basic information about your trip and the planner will
        automatically generate results
      </p>
      <div className="mt-20 flex flex-col gap-9">
        <div>
          <h2 className="text-xl my-10 font-medium">Enter Destination 🛫</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => (setPlace(v), handleInputChange("location", v)),
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-10 font-medium">Enter number of days 📅</h2>
          <Input
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-10 font-medium">Your Budget</h2>
        <div className="grid grid-cols-3 gap-5 mt-5 mb-10">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.budget == item.title && "shadow-lg border-black"
              }`}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <h2 className="text-4xl">{item.icons}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl mt-15 font-medium">How many Explorers</h2>
        <div className="grid grid-cols-3 gap-5 mt-5 mb-10">
          {SelectTravelList.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.travellers == item.people && "shadow-lg border-black"
              }`}
              onClick={() => handleInputChange("travellers", item.people)}
            >
              <h2 className="text-4xl">{item.icons}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
              <h2 className="text-xs text-gray-700">{item.people}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-20 justify-end flex">
        <Button disabled={loading} onClick={onGenerateTrip}>
        {loading ? <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />:
            "Generate a trip"
        }
        </Button>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/Logo.png" width="170" height={50} />
              <h2 className="font-bold text-lg mt-7">Sign in with google</h2>
              <p>Sign in to the app with google auth</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-5 w-5" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
