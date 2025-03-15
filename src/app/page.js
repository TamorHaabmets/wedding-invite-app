"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const guests = {
  650139: { name: "HELINA", prefix: "KALLIS" },
  650239: { name: "MIKK", prefix: "KALLIS" },
  650339: { name: "JAAK", prefix: "KALLIS" },
  650439: { name: "SIIM", prefix: "KALLIS" },
  650539: { name: "TEENA", prefix: "KALLIS" },
  650639: { name: "ANDRIANA", prefix: "KALLIS" },
  650739: { name: "HELINA", prefix: "KALLIS" },
  650839: { name: "HELINA", prefix: "KALLIS" },
  650939: { name: "HELINA", prefix: "KALLIS" },
  651039: { name: "HELINA", prefix: "KALLIS" },
  651139: { name: "HELINA", prefix: "KALLIS" },
  651239: { name: "HELINA", prefix: "KALLIS" },
  651339: { name: "HELINA", prefix: "KALLIS" },
  651439: { name: "HELINA", prefix: "KALLIS" },
  650239: { name: "ANNELI JA ANDRES", prefix: "KALLID" },
};

const sendEmail = async (name, status) => {
  const serviceId = "service_ecccv2g";
  const templateId = "template_yv66rbs";
  const publicKey = "xItdKAQpHp8QABaF5";

  const templateParams = {
    status: status,
    saatja: name,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default function WeddingInvite() {
  let search;
  if (typeof window !== "undefined") {
    search = window.location.search;
  }
  const params = new URLSearchParams(search);
  const guestId = params.get("guestId");
  const guest = guests[guestId];
  const [response, setResponse] = useState(null);

  if (!guest) {
    return <p>Guest not found</p>;
  }

  const handleResponse = (status) => {
    setResponse(status);
    sendEmail(guest.name, status);
  };

  return (
    <>
      <img
        src="/IMG_5043.webp"
        alt=""
        style={{ display: "none" }}
        loading="eager"
      />
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center white font-serif"
        style={{ backgroundImage: `url('/IMG_5043.webp')` }}
      >
        <div className="p-8 rounded-2xl shadow-xl max-w-lg w-full border  bg-black/45 backdrop-blur-xs">
          <p className="text-3xl mb-4 text-center text-gray-100">
            {guest.prefix} {guest.name}
          </p>
          <br />
          <p className="text-xl mb-4 text-center text-gray-100">
            MEIL ON SUUR RÕÕM KUTSUDA SIND OSA SAAMA MEIE PULMAPÄEVAST!
          </p>
          <br />
          <p className="text-lg mb-4 text-center text-gray-100">
            LAUPÄEVAL, 6 SEPTEMBER, 2025
            <br />
            KELL 16.00
            <br />
            OKO RESTORAN, KESK TEE 27, VIIMSI
          </p>

          <hr className="mx-auto my-6 w-1/2 border-t border-gray-300" />

          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-100">
            <li className="-indent-6 ml-6">
              Palume kohal olla
              <span className="font-semibold"> vähemalt 15 minutit varem</span>
            </li>
            <li className="-indent-6 ml-6">
              Pidu kestab orienteeruvalt keskööni
            </li>
            <li className="-indent-6 ml-6">
              Kingitused? Teie kohalolek on meile kõige olulisem! Kui soovite
              siiski midagi kinkida, rõõmustaks meid ümbrikusse mahtuv kingitus
            </li>
            <li className="-indent-6 ml-6">
              Õhtu jooksul on olemas lapsehoidja, kuid soovitame võimalusel
              lapse koju jätta
            </li>
            <li className="-indent-6 ml-6">
              Palume tulekust või mittetulekust teatada hiljemalt{" "}
              <span className="font-semibold">1. maiks</span>
            </li>
          </ul>

          {!response ? (
            <div className="flex gap-4 pt-8 justify-center">
              <button
                onClick={() => handleResponse("declined")}
                className="bg-red-200 px-6 py-2 rounded-full cursor-pointer font-semibold hover:bg-red-300 text-gray-800"
              >
                Kahjuks ei saa tulla
              </button>
              <button
                onClick={() => handleResponse("accepted")}
                className="bg-green-200 px-6 py-2 rounded-full cursor-pointer font-semibold hover:bg-green-300 text-gray-800"
              >
                Pulmas näeme!
              </button>
            </div>
          ) : (
            <p className="mt-6 text-center text-xl font-semibold text-gray-100">
              Saime vastuse kätte, aitäh!
            </p>
          )}

          <p className="mt-6 text-center text-gray-200">
            Pulmapäeva ootuses Tamor ja Elina
          </p>
        </div>
      </div>
    </>
  );
}
