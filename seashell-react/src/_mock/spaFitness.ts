import {
  ECategoryItemType,
  EOrderType,
  TCategoryItem,
} from "../app/components/CategoryList";

import imgMassage from "../assets/categories/spa/massage.jpg";
import imgLoungeDetails from "../assets/categories/bars/lounge-details.jpg";
import imgSpa from "../assets/categories/spa/spa.jpg";
import imgSpaDetails from "../assets/categories/bars/italian-details.jpg";
import imgSauna from "../assets/categories/spa/sauna.jpg";
import imgSaunaDetails from "../assets/categories/bars/lobby-details.jpg";
import imgGym from "../assets/categories/spa/gym.jpg";
import imgGym01 from "../assets/categories/spa/gym01.jpg";
import imgGym02Details from "../assets/categories/spa/gym02details.jpg";

export const responseSpaFitness: TCategoryItem[] = [
  {
    id: "spa-fitness001",
    title: "Massage & Beauty Treatments",
    time: "",
    img: imgMassage,
    type: ECategoryItemType.category,
    parentId: "spa-fitness",
  },
  {
    id: "spa-fitness002",
    title: "SPA Ritual by L'Occitane",
    time: "",
    img: imgSpa,
    type: ECategoryItemType.category,
    parentId: "spa-fitness",
  },
  {
    id: "spa-fitness003",
    title: "Sauna",
    time: "",
    img: imgSauna,
    type: ECategoryItemType.category,
    parentId: "spa-fitness",
  },
  {
    id: "spa-fitness004",
    title: "Gym",
    time: "",
    img: imgGym,
    type: ECategoryItemType.category,
    parentId: "spa-fitness",
  },
  {
    id: "spa-fitness00401",
    title: "Gym Program",
    time: "",
    img: imgGym01,
    type: ECategoryItemType.category,
    parentId: "spa-fitness004",
  },
  {
    id: "spa-fitness00402",
    title: "Power Plate Program",
    time: "08:00-20:00",
    img: imgGym,
    imgDetails: imgGym02Details,
    type: ECategoryItemType.category,
    parentId: "spa-fitness004",
    description:
      "<p>Our charming compact SPA offers you a well-equipped fitness room with state-of-the-art cardiovascular equipment.The machines available include treadmills and bikes, and our fitness area offers you the Power Plate®. This high-quality exercising machine operates on the principle of vibration and is suitable for people of all ages.</p><p>If you’d like to be more active and reduce health issues such as back pain, cardiovascular problems and stress, we’d suggest you to try individual exercise with our professional personal trainer. Consistent training that suit your needs will make you feel better, look better and sleep better.</p><br/><p><b><i>Duration: 30 min</i></b></p>",
    orderType: EOrderType.chooseOptions,
  },
];
