"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const guests = {
  650139: { name: "KALJU JA ÕIE", multi: true },
  650239: { name: "NATALJA JA ARKADI", multi: true},
  650339: { name: "ANNELI JA ANDRES", multi: true },
  650439: { name: "SIIM", multi: false },
  650539: { name: "TEENA", multi: false },
  650639: { name: "EVER JA MARILIN", multi: true },
  650739: { name: "IRINA JA KAASLANE", multi: true },
  650839: { name: "TAMARA", multi: false },
  650939: { name: "SILVA JA MATI", multi: true },
  651039: { name: "RIINA JA KELLY", multi: true },
  651139: { name: "ELYS JA MÄRTEN", multi: true },
  651239: { name: "SIIRI JA KARL", multi: true },
  651339: { name: "GERMAN JA MONIKA", multi: true },
  651439: { name: "GRETHEN JA KEVIN", multi: true },
  651539: { name: "KRISTIN JA KARL", multi: true },
  651639: { name: "ANDRIANA", multi: false },
  651739: { name: "HELINA", multi: false },
  651839: { name: "KRISTIN JA SANDER", multi: true },
  651939: { name: "ANNELI JA KAASLANE", multi: true },
  652039: { name: "LAURA JA KEVIN", multi: true },
  652139: { name: "ALEX JA KAASLANE", multi: true },
  652239: { name: "MARTIN JA ORNELLA", multi: true },
  652339: { name: "TAAVET JA ANETTE", multi: true },
  652439: { name: "JAAK", multi: false },
  652539: { name: "MICHEL JA KAASLANE", multi: true },
  652639: { name: "STANISLAV JA ELENA", multi: true },
  652739: { name: "GRETE JA STEN", multi: true },
  652839: { name: "GENNADI JA ANNE", multi: true },
  652939: { name: "RANDAL JA SELENE", multi: true },
  653039: { name: "ERIK JA ANNAMARI", multi: true },
  653139: { name: "IGOR JA INGA", multi: true },
  653239: { name: "ARTUR", multi: false },
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
    return <>
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

        <br />
        <p className="text-xl mb-4 text-center text-gray-100">
          MEIL ON SUUR RÕÕM KUTSUDA  OSA SAAMA MEIE PULMAPÄEVAST!
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
        <p className="text-3xl mb-4 text-center text-gray-100">
          LISAINFO
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-100">
          <li className="-indent-6 ml-6">
            Palume kohal olla
            <span className="font-semibold"> vähemalt 15 minutit varem</span>
          </li>

          <li className="-indent-6 ml-6">
            Palume lilli mitte tuua, sh potililled, uinuvad roosid jms
          </li>
          <li className="-indent-6 ml-6">
            Parkida saab restoranist paremat kätt (väiksem parkla) ja lisaks 100 meetrit enne restorani paremat kätt (suurem parkla), mõlemad parklad on tasuta.
          </li>
          <li className="-indent-6 ml-6">
            Pidu lõppeb hiljemalt 02:00
          </li>

        </ul>

  

        <p className="mt-6 text-center text-gray-200">
          Pulmapäeva ootuses Tamor ja Elina
        </p>
      </div>
    </div>
  </>
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
            {guest.multi ? "KALLID" : "KALLIS"} {guest.name}
          </p>
          <br />
          <p className="text-xl mb-4 text-center text-gray-100">
            MEIL ON SUUR RÕÕM KUTSUDA {guest.multi ? "TEID" : "SIND"} OSA SAAMA MEIE PULMAPÄEVAST!
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
              Kingitused? {guest.multi ? "Teie" : "Sinu"} kohalolek on meile kõige olulisem! Kui soovite
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
