import { useEffect, useMemo, useState } from "react";
import bgVideo from "./assets/bgl2.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const Love = () => {
  const sentences = useMemo(
    () => [
      "Hey Fazz ",
      "Sugalle anak 👀",
      "Iyy vicharikndavum enth Thenga🥥 aan ippo ith nn ",
      "lleee 😌",
      "njn paranjile oru variety sabmvm ind nn 😜😎",
      "Ee dance patt onnm enk nadakoola 🥴",
      "pinne aake illath dhaa ithan 💻",
      "appo paranj vannath nthann vechal ",
      "Sabaron ki zindagi jo kabhi nahi kadam ho jate hai",
      "manassilayillalloo",
      "Enkm manassilayilla 😝",
      "verthe oru punch n paranj nne lluu 😁",
      "So Lets come to the point 📌",
      "Inne pattit lla oru karym aan parayn povne 🫣",
      "ikkalamathrayum jeevichath ottak ( I mean single 🥲)",
      "Ippo llathm angne thannee 🚶",
      "Pakshe edak eppolo oru aagrahm keri koodi ",
      "Koode oral koodi venm enn 😁😜",
      "Aagrhm mathrm indayit karyallallo aal koodi vende 🚶",
      "Angne aa aagrahm safaleekarikan orale thedi erangi 🚲",
      "kalam korach aayi ttoo",
      "Pakshe enthoo manass aareyum angt sammayknilla 🫠",
      "Angne orikkal ",
      "Majnu nte laila ne ppole 😁",
      "Moideen nte kanjana mala ne pole 😉",
      "Nee vannu 🫵🏼🥺",
      "Aadym onnm manass sammaychila 🫣",
      "Pinne pinne ante aa chiriku munnil manassin adiyarav parayandi vannu 🥹🥺",
      "That moment, aa nimisham",
      "Appo orapichatha njan",
      "U r the one 🫵🏼❤️",
      "The one i have been waiting for 🥰",
      "Njn ithrayum kalam thiranjath ninak vendi aayirunnu enn",
      "Appo engnaa 😁",
      "Povallee",
      "kanana chayayil aadu mekkan 😌😎",
    ],
    []
  );

  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (sentenceIndex >= sentences.length) {
      setShowOptions(true);
      return;
    }

    const currentSentence = sentences[sentenceIndex];

    if (charIndex < currentSentence.length) {
      const timeout = setTimeout(() => {
        setText(currentSentence.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, sentenceIndex, sentences]);

  const handleNextSentence = () => {
    if (sentenceIndex < sentences.length - 1) {
      setText("");
      setCharIndex(0);
      setSentenceIndex((prev) => prev + 1);
    } else {
      setShowOptions(true);
    }
  };

  const handleYes = () => {
    console.log("hello")
    Swal.fire({
      title: "Yay! ❤️",
      text: "I knew It, I know it was a Yes 😎🎉",
      timer: 3000,
      // showLoaderOnConfirm: true,
      timerProgressBar: true,
      showConfirmButton: false,
      customClass: {
        popup: "custom-swal-popup", // Apply a custom class
      },
      // willClose: () => navigate("/celebration"),
      willClose: () => {
        Swal.fire({
          text : "Inippo Flower kitteella nn lla parathi venda  Athm settakikkn Wait 😎",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          customClass: {
            popup: "custom-swal-popup2", // Apply a custom class
          },
          willClose: () => {
            window.location.href = "https://hashimrahman.github.io/flower/"; // Replace with the target URL
          }
        })
      },
    });
  };

  const handleNo = () => {
    Swal.fire({
      title: "No no no no nooo!",
      text: "Njn Sammaykoola",
      timer: 3000,
      showConfirmButton: false,
      customClass: {
        popup: "custom-swal-popup2",
      },
      timerProgressBar: true,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white transition-all duration-500">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {!showOptions && (
        <h1
          className={`text-4xl font-bold mb-4 text-red-500 z-10 text-center mx-4 ${
            sentenceIndex === 0 ? "cursive-text" : "roboto-text"
          }`}
        >
          {text}
        </h1>
      )}

      {!showOptions ? (
        <button
          onClick={handleNextSentence}
          className="text-2xl mt-4 text-red-400 transition fixed bottom-50 flex gap-2 justify-center items-center border-b-1 z-20"
        >
          Next
          <FaArrowRightLong />
        </button>
      ) : (
        <div className="flex gap-4 mt-4 z-10">
          <button className="px-20 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition" onClick={handleYes}>
            Yes ❤️
          </button>
          <button className="px-14 py-3 text-lg font-semibold text-white bg-gray-500 rounded-full shadow-lg hover:bg-gray-600 transition" onClick={handleNo}>
            No 😭💔
          </button>
        </div>
      )}
    </div>
  );
};

export default Love;
